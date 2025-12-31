/// <reference types="cypress" />
// cypress/e2e/market.spec.js
import AssetPage from '../PageObjects/AssetPage';


describe('Asset Page Tests', () => {
  const AssetPg = new AssetPage();
   beforeEach(() => {
    AssetPg.visit();  
      });

      
  it('[Asset creation]-Add an assert and check the record in assert table- TC-580, TC-592', () => {
           
    AssetPg.LoginApp('dileepa+8@luminarworks.com','Delhi200@'); 
    AssetPg.VerifyHomePage('Hari Ranaweera')
    AssetPg.MoveToAssetPg()
    AssetPg.CreateAsset('Truck', 'BU1')
    AssetPg.SearchAssets('BU1')
    AssetPg.SearchAssetInListView('Dec 20, 27')


  });


    it('[Asset edit]-Check editability of assets which are in valid state- TC-599', () => {
           
    AssetPg.LoginApp('dileepa+8@luminarworks.com','Delhi200@'); 
    AssetPg.VerifyHomePage('Hari Ranaweera')
    AssetPg.MoveToAssetPg()
    AssetPg.CreateAsset('Truck', 'BU1')
    AssetPg.SearchAssets('BU1')
    AssetPg.EditAsset('2027-12-30')
    AssetPg.SearchAssetInListView('Dec 30, 27','box_truck')
   
  

  });


});