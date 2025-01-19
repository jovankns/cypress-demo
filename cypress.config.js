const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      console.log('Video recording enabled:', config.video);
      console.log('Screenshots on failure enabled:', config.screenshotOnRunFailure);
      return config;
    },
    retries: {
      runMode: 2, // Number of retries in CLI (headless) mode
      openMode: 0, // Number of retries in "open" mode (interactive)
    },
    video: true, // Enable video recording for each test
    screenshotOnRunFailure: true, // Capture a screenshot whenever a test fails
  },
  },
});
