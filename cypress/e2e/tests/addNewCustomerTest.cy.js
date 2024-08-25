
import { addNewCustomer } from "../../pages/addNewCustomerPage";
import { loginPage } from "../../pages/loginPage";
const login=new loginPage()
const addnewcustomer=new addNewCustomer();
import loginData from "../../fixtures/loginData.json";
import customerData from "../../fixtures/customerData.json"
describe('addnewcustomer',()=>{
    before(()=>{
        login.launchUrl();
        login.enterUserID(loginData.userID);
        login.enterPassword(loginData.password);
        login.submitcredentials();
    })
    it('addnewcustomer',()=>{
        addnewcustomer.clickonaddnewcustomer();
        addnewcustomer.enternewcustomer(customerData.CustomerName);
        addnewcustomer.selectGender();
        addnewcustomer.enterDOB(customerData.DOB);
        addnewcustomer.enterAddr(customerData.Address);
        addnewcustomer.enterCity(customerData.City);
        addnewcustomer.enterState(customerData.State);
        addnewcustomer.enterPinnum(customerData.Pin);
        addnewcustomer.enterTeleNo(customerData.TeleNo);
        addnewcustomer.enterEmail(customerData.email);
        addnewcustomer.submitcustomer();        
    })
})