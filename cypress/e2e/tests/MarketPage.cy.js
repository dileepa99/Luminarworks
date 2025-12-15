/// <reference types="cypress" />
// cypress/e2e/market.spec.js
import MarketPage from '../PageObjects/MarketPage';

//import MarketPage from '../pages/MarketPage';

describe('Market Page Tests', () => {
  const marketPage = new MarketPage();
   beforeEach(() => {
    marketPage.visit();  
      });

      
  it('Load the Luminar works app-Marketing Page - TC-548', () => {
            // navigate to page
    marketPage.verifyMainHeader(); // verify header text
  });



 it('Check the CTAs in the marketing home page - TC-549', () => {

   marketPage.checkCTA()

 });

  it('Check the navigation of the two CTA buttons - Starter and Pricing - Luminar Starter - TC-550.1', () => {

   marketPage.checkLuminarStarterBtn()

 });




it('Check the navigation of the two CTA buttons  - Explore Modules and Pricing - TC-550.2', () => {
 
  
marketPage.ExploreModulesBtn()


});

it('Check the compare modules button in pricing section - TC-552', () => {
 
  



});

});
