/// <reference types="cypress" />
// cypress/e2e/market.spec.js
import AgentPage from '../PageObjects/AgentPage';
import AssetPage from '../PageObjects/AssetPage';


describe('Asset Page Tests', () => {
  const AssetPg = new AssetPage();
  const AgentPg = new AgentPage();
   beforeEach(() => {
    AssetPg.visit();  
      });

      
  it('[Add Agent]-Add a new agent and check the visibility, TC-659', () => {
           
    AssetPg.LoginApp('dileepa+7@luminarworks.com','Delhi200@'); 
    AssetPg.VerifyHomePage('Hari Ranaweera')
    AgentPg.MoveToAgentPg()
    AgentPg.CreateAgent('Truck', 'BU1','+94755512321','dileepa+7@luminaworks.com')
    AgentPg.SearchAgent('BU1','+94755512321')
    AgentPg.SearchAgentInListView('94755512321')


  });

});