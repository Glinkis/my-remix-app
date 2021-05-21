/// <reference types="cypress" />
const path = require("path")
const { startDevServer } = require("@cypress/webpack-dev-server")

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on("dev-server:start", (options) => {
    return startDevServer({
      options,
      webpackConfig: {
        resolve: {
          extensions: [".js", ".ts", ".tsx"],
        },
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: "esbuild-loader",
                  options: {
                    loader: "tsx",
                    target: "es2015",
                  },
                },
                {
                  loader: path.resolve(__dirname, "react-loader.js"),
                },
              ],
            },
            {
              test: /\.css$/i,
              exclude: /node_modules/,
              use: ["style-loader", "css-loader"],
            },
          ],
        },
      },
    })
  })

  return config
}
