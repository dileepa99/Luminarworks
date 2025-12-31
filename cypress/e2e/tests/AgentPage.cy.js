/// <reference types="cypress" />
// cypress/e2e/market.spec.js
import AgentPage from '../PageObjects/AgentPage';
import AssetPage from '../PageObjects/AssetPage';


describe('Agent Page Tests', () => {
  const AssetPg = new AssetPage();
  const AgentPg = new AgentPage();
   beforeEach(() => {
    AssetPg.visit();  
      });

      
  it('[Add Agent]-Add a new agent and check the visibility, TC-659,TC-662', () => {
           
    AssetPg.LoginApp('dileepa+8@luminarworks.com','Delhi200@'); 
    AssetPg.VerifyHomePage('Hari Ranaweera')
    AgentPg.MoveToAgentPg()
    AgentPg.CreateAgent('Truck', 'BU1','+94755512321','dileepa+8@luminaworks.com')
    AgentPg.SearchAgent('BU1','+94755512321','False')
    AgentPg.SearchAgentInListView('Dec 25, 27','94755512321')


  });
  

//This TC failing due to Issue 733:[Agent]-Multiple edits for the single user not able to perform

  it('[Edit Agent]-Edit mutiple fields of an existing agent, TC-690', () => {
    AssetPg.LoginApp('dileepa+8@luminarworks.com','Delhi200@'); 
    AssetPg.VerifyHomePage('Hari Ranaweera')
    AgentPg.MoveToAgentPg()
    AgentPg.CreateAgent('Truck', 'BU1','+94755512321','dileepa+8@luminaworks.com')
    AgentPg.SearchAgent('BU1','+94755512321','False')
    AgentPg.EditAgent('2028-01-30','+94755588999')
    AgentPg.SearchAgentInListView('Jan 30, 28','+94755588999')


  });
  

});