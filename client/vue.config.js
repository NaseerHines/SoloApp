const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../public"),
  devServer: {
    proxy: {
      "/api/lookup": {
        target: "http://localhost:8085",
      },
    },
  },
};
