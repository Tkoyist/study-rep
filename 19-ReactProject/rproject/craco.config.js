// 配置文件别名，方便直接找到文件

// 先获取当前文件位置
const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      // 这样可以通过@ 直接访问到src 文件夹了
      "components": resolve("src/components")
    }
  }
}
