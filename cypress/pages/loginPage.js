const cypress = require("cypress");

export class loginPage{
   constructor(){
        this.userID = 'input[name="uid"]',
        this.password= 'input[name="password"]',
        this.loginbtn= 'input[name="btnLogin"]'
    }

    launchUrl(){
        // const url=Cypress.env('URL');
        // console.log("url of the page: ",url);
        cy.visit(Cypress.env('URL'));
    }

    enterUserID(uid){
        cy.get(this.userID).type(uid);
    }
    enterPassword(password){
        cy.get(this.password).type(password);
    }
    submitcredentials(){
        cy.get(this.loginbtn).click();
    }
}