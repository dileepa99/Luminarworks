/// <reference types="cypress" />
// cypress/e2e/market.spec.js
import AssetPage from '../PageObjects/AssetPage';


describe('Asset Page Tests', () => {
  const AssetPg = new AssetPage();
   beforeEach(() => {
    AssetPg.visit();  
      });

      
  it('[Asset creation]-Add an assert and check the record in assert table- TC-580, TC-592', () => {
           
    AssetPg.LoginApp('dileepa+7@luminarworks.com','Delhi200@'); 
    AssetPg.VerifyHomePage('Hari Ranaweera')
    AssetPg.MoveToAssetPg()
    AssetPg.CreateAsset('Truck', 'BU1')
    AssetPg.SearchAssets('BU1')
    AssetPg.SearchAssetInListView()


  });


    //it('[Asset card view]-Check the card view of the asset table- TC-592', () => {




//});

});