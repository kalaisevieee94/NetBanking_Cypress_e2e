// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




Cypress.Commands.add('login',(userName, password)=>{
    cy.visit('');                    
    cy.get('input[name="uid"]').type(userName);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="btnLogin"]').click();
//    let welpage= cy.get("//*[text()='Welcome To Manager's Page of GTPL Bank']");
//    expect(welpage.text()).to.equal("Welcome To Manager's Page of GTPL Bank1");
//    cy.log(welpage.text());
//    cy.log("hello");
//    assert.equal(welpage.text(),"Welcome To Manager's Page of GTPL Bank1");
   
})
///<reference types="Cypress"/>
///<reference types="Cypress-xpath"/>