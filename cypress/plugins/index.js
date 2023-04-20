//const ntlmAuth = require("cypress-ntlm-auth");

/*module.exports = (on, config) => {
  config = ntlmAuth.initNtlmAuth(config);
  return config;
};*/

const { defineConfig } = require('cypress')
const setupNodeEvents = require('./cypress/plugins/index.js')

module.exports = defineConfig({
  component: {
    devServer(cypressConfig) {
      // component testing dev server setup code
    },
    setupNodeEvents,
  },
  e2e: {
    setupNodeEvents,
  },
})