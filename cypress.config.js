const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
   
    baseUrl:'https://demo.guru99.com/V1/index.php',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env:{
      URL:'https://demo.guru99.com/V1/index.php',
    }
  },
 
});
