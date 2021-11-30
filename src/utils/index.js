/**
 * 随机生成十六进制颜色
 * @returns 16进制颜色
 */
export function randomHexColor() {
  let hex = Math.floor(Math.random() * 16777216).toString(16);
  //while循环判断hex位数，少于6位前面加0凑够6位
  while (hex.length < 6) {
    hex = "0" + hex;
  }
  return "#" + hex;
}
