import { loginPage } from "../../pages/loginPage"


describe('login',()=>{

    let userdata;
    before(() => {
        // Load fixture data before running the tests
        cy.fixture('loginData').then((data) => {
          userdata = data;
        });
      });
    it('login',()=>{
        const login=new loginPage();
        login.launchUrl();
        login.enterUserID(userdata.userID);
        login.enterPassword(userdata.password);
        login.submitcredentials();

    })
})