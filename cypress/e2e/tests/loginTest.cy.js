
import { loginPage } from "../../pages/loginPage"
import loginData from "../../fixtures/loginData.json"
const login=new loginPage();
describe('login',()=>{
    
it.only('login',()=>{
     
        login.launchUrl();
        login.enterUserID(loginData.userID);
        login.enterPassword(loginData.password);
        login.submitcredentials();
        //login.clickonlogout();

    })

    // it('logincommandsjs',()=>{
    //     Cypress.login(loginData.userID,loginData.password);
    
    //     })
})