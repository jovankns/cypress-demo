const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com', // URL stranice
    setupNodeEvents(on, config) {
      // Postavi logovanje na minimalno
      config.env.logCommand = false;
      return config;
    },
    retries: {
      runMode: 2,
      openMode: 0,
    },
    video: true, // Snimi testove
    screenshotOnRunFailure: true, // Screenshot pri grešci
  },
});
