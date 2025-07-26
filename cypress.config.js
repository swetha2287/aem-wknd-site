const { defineConfig } = require("cypress");
const Mochawesome= require("mochawesome");
module.exports = defineConfig({
   reporter: 'cypress-mochawesome-reporter',
"reporterOptions": {
     "reportpagetitle": "WkndSiteReport",
     "embedscreenshots":true,

      "overwrite": false,
      "html": true,
      "json": true
    },
  e2e: {
    baseUrl :'https://magento.softwaretestingboard.com/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
