import { first } from "lodash";

class AgentPage {
  // Method to visit the Market Page
  visit() {
    //cy.visit('https://idp.luminarworks.app/'); 
    cy.visit('https://app.qa.luminarworks.app/');
 

  }



      MoveToAgentPg()
     {

      cy.contains('Data').click()
      cy.wait(1000)
      cy.get('a[href="/data/agents"]').click();   

     }


     //=============================================================================
     CreateAgent(SpeedProfile,BusinessUnit,PhnNumber,email)

     {
         const uniqueSuffix = Math.floor(Date.now() / 1000);
      
         const agentName = `Agent${uniqueSuffix}`;
         cy.wrap(agentName).as('agentName'); // store as alias

         //Trype asset name
         cy.contains('button', 'Add Agent').click();
         cy.get('input[name="agentName"]')  // your field uses name="assetName"
        .clear()
        .type(agentName);

        //Type identifier
         const identi = `Identi${uniqueSuffix}`;
         cy.wrap(identi).as('identi'); // store as alias
         cy.get('input[name="identifier"]').clear().type(identi);


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
         .type('2027-12-25')
         .blur()
  

   //Add Phone number
       cy.get('input[name="phoneNumber"]') // select the input by its name
         .clear()                         // clear any existing value
         .type(PhnNumber);   

    
    //Add email ID
         //Add Phone number
       cy.get('input[name="email"]') // select the input by its name
         .clear()                         // clear any existing value
         .type(email);   
  
 

      //Select Trait

       cy.contains('span', 'Select traits').click();
       cy.get('input[placeholder="Search options..."]') 
         .clear()
         .type("Compact Van")
         .type('{enter}'); // hit Enter to select

       cy.contains('h1, h2', 'Agents').click();
       cy.wait(2000)

      //Click create asset buttton
      //cy.contains('button', 'Add Agent').eq(0).click();
       cy.get('div.flex.justify-end.pt-4')
         .contains('button', 'Add Agent')
         .should('be.enabled')
         .click();


      //Verify the success MessageChannel
      cy.contains('Agent created successfully').should('be.visible');

     
     }

     //===================================================================

     SearchAgent(AgentBusinessUnit,PhnNumber,Vehicle,Ext)
  
     {
       //Check Agent's name
      cy.get('@agentName').then((Agtname) => {
      cy.get('input[placeholder="Search..."]').clear().type(Agtname).type('{enter}');
      cy.wait(1000)
      cy.contains(Agtname).should('be.visible');

        //Check card view values(Name identifier)
      cy.get('.text-sm.font-semibold.text-foreground.truncate')
     .should('be.visible')
     .and('contain.text', Agtname);

  });
   
   //Check the Agent's identifier
     cy.get('@identi').then((IDF) => {
     cy.get('.text-xs.font-medium.text-foreground.truncate')
     .should('be.visible')
     .and('contain.text', IDF);
 

   });

   //Check the status of the Agent     
   cy.contains('span','Active')
   

   //Check the Agent's business unit
      cy.get('div.flex.transition-all.duration-300.ease-in-out.flex-row.justify-between.items-center.gap-1').eq(1)
        .should('be.visible') // make sure the div is visible
        .within(() => {
    // Verify the label
    cy.contains('Business Unit').should('exist');    
    // Verify the value next to it
    cy.contains(AgentBusinessUnit).should('exist');
   });


   //Check the Trait of the Agent
     cy.get('div.flex.min-w-0.gap-3.w-1\\/2.flex-row.justify-between').eq(0) // note the escaped '/' in w-1/2
       .should('be.visible')
       .within(() => {
    cy.contains('Trait').should('exist');          // verify the label
    cy.contains(Vehicle).should('exist'); // verify the value
  });

   //Check the contact number of the Agent
    cy.get('div.flex.transition-all.duration-300.ease-in-out.flex-row.justify-between.items-center.gap-1').eq(3)
      .should('be.visible') // make sure the div is visible
      .within(() => {
    // Verify the label
    cy.contains('Contact').should('exist');    
    // Verify the value next to it
    cy.contains(PhnNumber).should('exist');
   });

   //Check the External status of the Agent
     
    cy.get('div.flex.transition-all.duration-300.ease-in-out.flex-row.justify-between.items-center.gap-1').eq(2)
      .should('be.visible') // make sure the div is visible
      .within(() => {
    // Verify the label
    cy.contains('External').should('exist');    
    // Verify the value next to it
    cy.contains(Ext).should('exist');
   });

}
  


   //===================================================================================


   SearchAgentInListView(ContNo)
   {
    cy.get('a[href="/data/agents/list-view"]').click();
    cy.wait(2000)

 //Check the Asset name
    cy.get('@agentName').then((Agtname) => {
    cy.get('.font-medium.text-sm')       // select the element by class
      .should('be.visible') 
      .and('contain.text', Agtname);
  
 })
    //Check the asset Identifier
    cy.get('@identi').then((IDF) => {
     cy.get('.px-4.py-2.align-middle') 
     .should('be.visible')
     .and('contain.text', IDF);
 

   });

   //Check ths Asset status
   cy.contains('span','Active')

  //Check the Trait
  cy.contains('span' ,'compact_van')
       
   //Check the Agent's Business unit
 cy.get('tbody')
  .contains('td', 'BU1')
  .should('be.visible');

  
   //Check the Agent's contact number
cy.get('tbody')
  .contains('td', ContNo)
  .should('exist');

     //Check the Agent's 'External'
cy.get('tbody')
  .contains('td', 'False')
  .should('exist');

  //Check the Agent's Expiry date
cy.get('tbody')
  .contains('td', 'Dec 25, 27')
  .should('exist');

   }

   //==================================================================

   EditAgent(EditNumber)
   {

    //Select the agent to edit
     cy.get('.flex-shrink-0 [data-slot="checkbox"]')
       .should('be.visible')
       .click();
     cy.wait(1000)

     //Click edit icon
      cy.get('div.flex.justify-end')
        .find('button[data-slot="button"]')
        .should('be.visible')
        .click();
 
        //Edit phone number
       cy.get('input[name="phoneNumber"]') 
         .clear()                         // clear any existing value
         .type(EditNumber);   

         //Edit Trait
       cy.contains('span', 'Select traits').click();
       cy.get('input[placeholder="Search options..."]') 
         .clear()
         .type("Compact Van")
         .type('{enter}'); // hit Enter to select

   }
  
     
}


    export default AgentPage;