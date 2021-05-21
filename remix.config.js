/**
 * @type {import("@remix-run/dev/config").AppConfig}
 */
const config = {
  appDirectory: "app",
  cacheDirectory: "node_modules/.cache",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
}

module.exports = config
