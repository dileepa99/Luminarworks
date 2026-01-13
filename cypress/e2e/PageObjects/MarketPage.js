// cypress/pages/MarketPage.js

class MarketPage {
  // Method to visit the Market Page
  visit() {
    cy.visit('/'); // assuming baseUrl is set in cypress.config.js
  }

  
  // Method to verify the main header text
  verifyMainHeader() {
    cy.contains('Logistics software, democratized.').should('be.visible');
  }



 
   checkCTA()

   {
   cy.contains('Luminar Starter').should('be.visible');
   cy.contains('Explore Modules & Pricing')
   cy.contains('Get Started')
   cy.get('img[src="/logo-full.svg"]').should('be.visible');

   }

   checkLuminarStarterBtn()
   {

    cy.wait(2000)
    cy.contains('Luminar Starter').click();
    cy.wait(2000)
    cy.url().should('eq', 'https://app.qa.luminarworks.app/signup');
   // cy.url().should('eq','https://int.luminarworks.app/signup')


   cy.origin('https://app.qa.luminarworks.app' , () => {
  cy.url().should('include', '/signup');
  cy.get('[data-slot="card-title"]')
  .should('be.visible')               // ensure element is visible
  .and('have.text', 'Sign Up for Luminar Works'); // exact match
  // Verify the button exists and contains the correct text
cy.get('[data-slot="button"]')
  .should('be.visible')               // ensure the button is visible
  .and('contain.text', 'Verify');     // check the text

});  
   }

   

   ExploreModulesBtn()
   {

    cy.wait(2000)
    cy.contains('Explore Modules & Pricing').click();
    cy.wait(2000)

cy.contains('h1', 'Pricing That').should('be.visible');
cy.contains('h1', 'Scales With You').should('be.visible');
cy.get('h2.text-primary-foreground')
  .should('contain.text', 'Curated Bundles');

  cy.get('h2.text-primary-foreground')
  .should('contain.text', 'Free');



   }
  }


  
 
export default MarketPage;
