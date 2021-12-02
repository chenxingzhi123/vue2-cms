<template>
  <el-header class="tags-view-container">
    <router-link
      class="tags-view-item"
      :to="item.path"
      v-for="item in visitedViews"
      :key="item.path"
      ref="tag"
    >
      <el-tag
        :closable="!item.default"
        @close.prevent.stop="handleCloseClick(item)"
        :effect="isActive(item) ? 'dark' : 'plain'"
      >
        <span v-if="item.default" class="el-icon-s-home"></span>
        {{ item.title }}
      </el-tag>
    </router-link>

    <el-dropdown>
      <el-tag class="dropdown-msg tag-icon" effect="plain">
        <i class="el-icon-arrow-down"></i>
      </el-tag>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="handleCloseClick(currentTag)"
          >关闭当前</el-dropdown-item
        >
        <el-dropdown-item @click.native="handleCloseOtherClick(currentTag)"
          >关闭其他</el-dropdown-item
        >
        <el-dropdown-item @click.native="handleCloseAllClick()"
          >关闭全部</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import setting from "@/config/setting";
const defaultPage = setting.defaultPage;

export default {
  name: "TagsView",

  data() {
    return {
      currentTag: this.$route,
    };
  },

  computed: {
    ...mapGetters(["visitedViews"]),
  },

  created() {
    this.addView();
  },

  watch: {
    $route(newValue) {
      this.currentTag = newValue;
      this.addView();
    },
  },

  methods: {
    ...mapActions([
      "addVisitedView",
      "delVisitedView",
      "delOtherViews",
      "delAllViews",
    ]),

    addView() {
      const route = this.generateRoute();
      if (!route) {
        return false;
      }
      this.addVisitedView(this.generateRoute());
    },

    generateRoute() {
      if (this.$route.path) {
        return this.$route;
      }
      return false;
    },

    //计算是否是当前页
    isActive(route) {
      return route.path === this.$route.path || route.name === this.$route.name;
    },

    handleCloseClick(item) {
      this.delVisitedView(item).then((items) => {
        //如果关闭的是当前页，就跳到前一个页面
        if (this.isActive(item)) {
          const lastTag = items.slice(-1)[0];
          if (lastTag) {
            this.$router.push(lastTag.path);
          } else {
            this.$router.push("/");
          }
        }
      });
    },

    handleCloseOtherClick(item) {
      this.delOtherViews(item);
    },

    handleCloseAllClick() {
      this.delAllViews().then(() => {
        if (this.$route.path !== defaultPage.path) {
          this.$router.push(defaultPage.path);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tags-view-container {
  width: 100%;
  height: 40px !important;
  padding: 5px 20px;
  border-bottom: 1px solid #dfdfdf;
  white-space: nowrap;
  position: relative;

  ::v-deep .el-tag {
    border-radius: 0;
  }

  .tags-view-item {
    ::v-deep .el-tag {
      border-right: none;
    }
  }
  .tag-icon {
    padding: 0 3px;
  }
}
</style>
