import setting from "@/config/setting";

const title = setting.title ?? "Vue Element Admin";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return title;
}
