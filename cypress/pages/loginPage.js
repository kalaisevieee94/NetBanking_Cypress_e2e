

export class loginPage{
   weblocators={
        userID : 'input[name="uid"]',
        password: 'input[name="password"]',
        loginbtn: 'input[name="btnLogin"]',
        logout :'a[href="Logout.php"]'
    }

    launchUrl(){

        cy.visit(Cypress.env('URL'));
    }

    enterUserID(uid){
        cy.get(this.weblocators.userID).type(uid);
    }
    enterPassword(password){
        cy.get(this.weblocators.password).type(password);
    }
    submitcredentials(){
        cy.get(this.weblocators.loginbtn).click();
    }
    clickonlogout(){
        cy.get(this.weblocators.logout).click();
        
    }
}