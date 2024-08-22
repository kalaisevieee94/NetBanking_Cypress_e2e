const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      URL:'https://demo.guru99.com/V1/index.php',
    }
  },
 
});
