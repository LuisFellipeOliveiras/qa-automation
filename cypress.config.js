const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://SEU-USUARIO.github.io/SEU-REPOSITORIO/",
    video: false
  }
});
