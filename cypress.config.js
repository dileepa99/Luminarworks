const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nezyc3',
  e2e: {
     baseUrl: "https://qa.luminarworks.app/",
     projectId :"nezyc3",
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
  },
});
