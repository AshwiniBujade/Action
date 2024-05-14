/// <reference types="cypress" />

describe('example to-do app', () => {
   
  it('displays two todo items by default', () => {

      cy.visit("https://experimental-plan.adtrac.media/");
      cy.get("#mat-input-0").type("christian.lohrmann@excommedia.ch");
      cy.get("#mat-input-1").type("12345");
      cy.get("#login_submit_btn").click();
  
  })  

})