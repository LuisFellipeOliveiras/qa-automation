const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://github.com/LuisFellipeOliveiras/qa-automation",
    video: false
  }
});
