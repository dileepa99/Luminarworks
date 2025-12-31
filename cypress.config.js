const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "6gi7v4", // Cypress Cloud project ID

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: "https://qa.luminarworks.app/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});


/*
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nezyc3',
  e2e: {
     baseUrl: "https://qa.luminarworks.app/",
    // projectId: 'nezyc3',
      projectId :"6gi7v4",
        reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  }

    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
  },
});
*/