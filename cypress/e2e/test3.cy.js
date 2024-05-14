/// <reference types="cypress" />

describe('example to-do app', () => {
   
    it('displays two todo items by default', () => {

        cy.visit("https://experimental-plan.adtrac.media/");
        cy.get("#mat-input-0").type("christian.lohrmann@excommedia.ch");
        cy.get("#mat-input-1").type("12345");
        cy.get("login_submit_btn").click();
        cy.get("#lyt_link_routto_cmpgn").click();
        cy.get("cmpgnlst_btn_open").click();
        cy.get("#budget").click();
        cy.get("#pln_number").type("1000");

        cy.get('button[aria-label="Open calendar"]')
        .eq(0)
        .click({ force: true });
      cy.wait(3000);
      cy.get('button.mat-calendar-period-button.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base').click({
        multiple: true
      });
      cy.wait(3000);
      cy.get('span.mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-today')
        .contains("2024")
        .click();
      cy.wait(3000);
      cy.get('div')
        .contains("May")
        .click();
      cy.wait(3000);
      cy.get('button > span.mat-calendar-body-cell-content.mat-focus-indicator')
        .contains("7")
        .click();
      cy.wait(3000);
      cy.get('button.mat-calendar-period-button.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base').click();
      cy.wait(3000);
      cy.get('span.mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-today')
        .contains("2024")
        .click();
      cy.wait(3000);
      cy.get('div')
        .contains("May")
        .click();
      cy.wait(3000);
      cy.get('button > span.mat-calendar-body-cell-content.mat-focus-indicator')
        .contains("7")
        .click();
    
        cy.get("invc_btn_next").click();
        cy.get("#ownr_select_owner").click();
        cy.get('#ownr_select_owner').type('{downarrow}{enter}');
        // cy.get();

        // cy.get();
        // cy.get();

    
    })  

})