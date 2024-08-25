
export class addNewCustomer{
    weblocators={
NewCustomer:'//*[@class="menusubnav"]/li[2]/a',
CustomerName:'input[name="name"]',
Gender      : 'input[name="rad1"]',
DOB         : 'input[name="dob"]',
Address     : 'textarea[name="addr"]',
City        : 'input[name="city"]',
State       : 'input[name="state"]',
Pin         : 'input[name="pinno"]',
TeleNo      :'input[name="telephoneno"]',
EMail      : 'input[name="emailid"]',
Submit      : 'input[name="sub"]'
  }

  clickonaddnewcustomer(){
    cy.xpath(this.weblocators.NewCustomer).click();
  }
 enternewcustomer(cname){
    cy.get(this.weblocators.CustomerName).type(cname);
 }
 selectGender(){
    cy.get(this.weblocators.Gender).last().click();
 }
 enterDOB(dob){
    cy.get(this.weblocators.DOB).type(dob);
 }
 enterAddr(addr){
    cy.get(this.weblocators.Address).type(addr);
 }
 enterCity(city){
    cy.get(this.weblocators.City).type(city);
 }
 enterState(state){
    cy.get(this.weblocators.State).type(state);
 }
 enterPinnum(pinno){
    cy.get(this.weblocators.Pin).type(pinno);
 }
 enterTeleNo(teleno){
    cy.get(this.weblocators.TeleNo).type(teleno);
 }
 enterEmail(email){
    cy.get(this.weblocators.EMail).type(email);
 }
 submitcustomer(){
    cy.get(this.weblocators.Submit).click();
 }
}