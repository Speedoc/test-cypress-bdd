const { defineConfig } = require('cypress')
const { afterEach } = require('mocha')

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    embeddedScreenshots: true,
    charts: true,
    reportPageTitle: 'custom-title',
    inlineAssets: true,
    saveAllAttempts: false,
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
  retries: {
    runMode: 0,
    openMode: 0
  },
})
