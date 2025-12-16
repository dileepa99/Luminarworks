class AssetPage {
  // Method to visit the Market Page
  visit() {
    //cy.visit('https://idp.luminarworks.app/'); 
    cy.visit('https://app.qa.luminarworks.app/');
 

  }



    LoginApp(username,password) {

     cy.origin(
      'https://idp.luminarworks.app/',
      { args: { username, password } },
      ({ username, password }) => {

        cy.get('#username').clear().type(username);
        cy.get('#password').clear().type(password);
        cy.get('input[value="Sign In"]').click();


       });
       cy.url().should('include', '/home/dashboard');
       cy.contains('Dashboard').should('be.visible');

     }


     //=================================================================


     VerifyHomePage(myName)
     {
 
       cy.get('a[href="/home/dashboard"]').should('exist');
       cy.get('a[href="/home/support"]').should('exist');
       cy.get('a[href="/home/community"]').should('exist');
       cy.get('a[href="/home/luminar-academy"]').should('exist');

       cy.contains(myName).should('be.visible');

       cy.contains('Home').should('be.visible');
       cy.contains('Route Planner').should('be.visible');
       cy.contains('Data').should('be.visible');
       cy.contains('Integration').should('be.visible');
       cy.contains('Administration').should('be.visible');
       cy.contains('Support').should('be.visible');
       cy.contains('Chat').should('be.visible');

     }

     MoveToAssetPg()
     {

      cy.contains('Data').click()
      cy.wait(1000)
      cy.get('a[href="/data/assets"]').click();   



     }

     //=============================================================

     CreateAsset(SpeedProfile,BusinessUnit)
     {
      const uniqueSuffix = Math.floor(Date.now() / 1000);
      
         const assetName = `Automation${uniqueSuffix}`;

         cy.wrap(assetName).as('assetName'); // store as alias

         //Trype asset name
         cy.contains('button', 'Add Asset').click();
         cy.get('input[name="assetName"]')  // your field uses name="assetName"
        .clear()
        .type(assetName);

        //Type identifier
         const identifier = `Identifier${uniqueSuffix}`;
         cy.wrap(identifier).as('identifier'); // store as alias
         cy.get('input[name="identifier"]').clear().type(identifier);


     //Select Truck for the speed profile
        cy.contains('span', 'Speed Profile').click();

     // Select value     
       cy.get('input[placeholder="Search speed profile..."]') 
         .clear()
         .type(SpeedProfile)
         .type('{enter}'); // hit Enter to select

       // Optional: verify selection
       cy.contains('span', SpeedProfile).should('be.visible');
       cy.wait(1000)

     //Select business unit
       cy.contains('span', 'Branch').click();

       cy.get('input[placeholder="Search business unit..."]') 
        .clear()
        .type(BusinessUnit)
        .type('{enter}'); // hit Enter to select

       // Optional: verify selection
       cy.contains('span', BusinessUnit).should('be.visible');

      //Select the expiry date
      cy.get('input[placeholder="mm/dd/yyyy"]')
        .focus()
        .type('2027-12-20')
        .blur()
  

   //Type capacity
       cy.get('input[name="capacity1"]') // select the input by its name         
         .clear()                         // clear any existing value
         .type('10');   

    
       cy.get('input[name="capacity2"]') // select the input by its name        
         .clear()                                 // clear any existing value
         .type('20');   

       cy.get('input[name="capacity3"]') // select the input by its name
          .clear()                                 // clear any existing value
         .type('30');   

      //Select Trait

       cy.contains('span', 'Delivery Truck').click();
       cy.get('input[placeholder="Search options..."]') 
         .clear()
         .type("Delivery Truck")
         .type('{enter}'); // hit Enter to select

       cy.contains('h1, h2', 'Assets').click();

      //Click create asset buttton
      cy.contains('button', 'Create Asset').click();

      //Verify the success MessageChannel
      cy.contains('Asset created successfully').should('be.visible');

     }


     //=========================================================

     SearchAssets(BusinessUnit,Vehicle)
     {

     // const assetToSearch = this.assetName;

      cy.get('@assetName').then((name) => {
      cy.get('input[placeholder="Search..."]').clear().type(name).type('{enter}');
      cy.wait(1000)
      cy.contains(name).should('be.visible');

      
    //Check card view values(Name identifier)
    cy.get('.text-sm.font-semibold.text-foreground.truncate')
     .should('be.visible')
     .and('contain.text', name);

    

});

   cy.get('@identifier').then((ID) => {
     cy.get('.text-xs.font-medium.text-foreground.truncate')
     .should('be.visible')
     .and('contain.text', ID);
 

   });
   //Check ths status
   cy.contains('span','Active')

   //Check capacity 1 value
   cy.get('div.flex.transition-all.duration-300.ease-in-out.flex-row.justify-between.items-center.gap-1').eq(3)
  .should('be.visible') // make sure the div is visible
  .within(() => {
    // Verify the label
    cy.contains('Capacity1').should('exist');    
    // Verify the value next to it
    cy.contains('100').should('exist');
  })
       //Check capacity 2 value
   cy.get('div.flex.transition-all.duration-300.ease-in-out.flex-row.justify-between.items-center.gap-1').eq(4)
  .should('be.visible') // make sure the div is visible
  .within(() => {
    // Verify the label
    cy.contains('Capacity2').should('exist');    
    // Verify the value next to it
    cy.contains('200').should('exist');
  })
         //Check capacity 3 value
   cy.get('div.flex.transition-all.duration-300.ease-in-out.flex-row.justify-between.items-center.gap-1').eq(5)
  .should('be.visible') // make sure the div is visible
  .within(() => {
    // Verify the label
    cy.contains('Capacity3').should('exist');    
    // Verify the value next to it
    cy.contains('300').should('exist');

    
  });

   //Check the business unit of the asset
   cy.get('div.flex.transition-all.duration-300.ease-in-out.flex-row.justify-between.items-center.gap-1').eq(1)
  .should('be.visible') // make sure the div is visible
  .within(() => {
    // Verify the label
    cy.contains('Business Unit').should('exist');    
    // Verify the value next to it
    cy.contains(BusinessUnit).should('exist');

    
  });

  //Check the Trait of the asset

  cy.get('div.flex.min-w-0.gap-3.w-1\\/2.flex-row.justify-between').eq(0) // note the escaped '/' in w-1/2
  .should('be.visible')
  .within(() => {
    cy.contains('Trait').should('exist');          // verify the label
    cy.contains(Vehicle).should('exist'); // verify the value
  });


     }
  //=================================================================

  SearchAssetInListView(ExpDate,myTruck)
  {

 cy.get('a[href="/data/assets/list-view"]').click();
 cy.wait(2000)

 //Check the Asset name
  cy.get('@assetName').then((name) => {
  cy.get('.font-medium.text-sm')       // select the element by class
    .should('be.visible') 
      .and('contain.text', name);

 })
    //Check the asset Identifier
    cy.get('@identifier').then((ID) => {
     cy.get('.px-4.py-2.align-middle') 
     .should('be.visible')
     .and('contain.text', ID);
 

   });

   //Check ths Asset status
   cy.contains('span','Active')

  //Check the Trait
  cy.contains('span' , myTruck)
       
   //Check the Business unit
 cy.get('tbody')
  .contains('td', 'BU1')
  .should('be.visible');

   //Check the capacity
 cy.get('tbody')
  .contains('td', '100kg')
  .should('exist');

  //Check the expiry date of the asset
 cy.get('tbody')
  .contains('td', ExpDate)
  .should('exist');


     }


     EditAsset(MyVehicle,ExDte)
   {

    //Select the agent to edit
     cy.get('.flex-shrink-0 [data-slot="checkbox"]')
       .should('be.visible')
       .click();
     cy.wait(1000)

     //Click edit icon
     cy.get('[aria-label="Edit"]').click();

     //Edit Expiry date
        cy.get('input[placeholder="mm/dd/yyyy"]')
        .type(ExDte)
        .blur()
    
         //Edit Trait
       cy.contains('span', 'Delivery Truck')
         .scrollIntoView()
         .should('be.visible')  // optional, ensures Cypress waits for it
         .click();
       cy.wait(1000)
       cy.get('[data-value="Clear"]').click({ force: true });
       cy.get('input[placeholder="Search options..."]') 
         .type(MyVehicle)
         .type('{enter}'); // hit Enter to select
       cy.contains('h1, h2', 'Assets').click();

       //Save changes 
       cy.contains('button', 'Save Changes').click();

       //Check success message
       cy.contains('Asset updated successfully').should('be.visible');

        
     
  

   }
  
    } 

    
  
 
export default AssetPage;

