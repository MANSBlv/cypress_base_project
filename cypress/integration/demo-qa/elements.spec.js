import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonsPage from "../../pageObjects/radioButtonsPage";
import webTablesPage from "../../pageObjects/webTablesPage";
import ButtonsPage from "../../pageObjects/buttonsPage";
import LinksPage from "../../pageObjects/linksPage";
//import RadioButtonsPage from "../../pageObjects/radioBoxPage";

context("Elements Page", () => {
  /*context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Filling in Text Boxes", () => {
      // Add scenario stuff here
      TextBoxPage.fullNameInput.type('George');
      //TextBoxPage.fullNameInput.invoke('attr', 'placeholder').should('contain','Full Name')
      TextBoxPage.userEmailInput.type('KKKKKK@randomdomain.com');
      TextBoxPage.currentAddressInput.type('Some random current Address 1234');
      TextBoxPage.permanentAddressInput.type('Some random permanent Address 1234');
      TextBoxPage.submitButton.click();
      TextBoxPage.nameParagraph.should("be.visible").should("contain", "George");

      TextBoxPage.emailParagraph.should("be.visible").should("contain","KKKKKK@randomdomain.com");
      TextBoxPage.currentAddressParagraph.should("be.visible").should("contain","Some random current Address 1234");
      TextBoxPage.permanentAddressParagraph.should("be.visible").should("contain","Some random permanent Address 1234");
    });
    it.only("Filling in Text Boxes with fixtures",()=>{
      cy.fixture('textBoxPageData').then(data => {
        TextBoxPage.fullNameInput.type(data.fullName);
        TextBoxPage.userEmailInput.type(data.email);
        TextBoxPage.currentAddressInput.type(data.currentAddress);
        TextBoxPage.permanentAddressInput.type(data.permanentAddress);
        TextBoxPage.submitButton.click();
        TextBoxPage.nameParagraph.should("be.visible").should("contain", "George");
  
        TextBoxPage.emailParagraph.should("be.visible").should("contain",data.email);
        TextBoxPage.currentAddressParagraph.should("be.visible").should("contain",data.currentAddress);
        TextBoxPage.permanentAddressParagraph.should("be.visible").should("contain",data.permanentAddress);




        
      });
    });

  });
  context("Checkbox scenarios", () => {
    beforeEach(() =>{
      CheckBoxPage.visit();
    });
    it.only("Clicking checkbox - Notes",()=>{
     CheckBoxPage.expandAllButton.click();
     CheckBoxPage.checkboxListItems.contains('Notes').click();
     CheckBoxPage.checkboxListItems.contains('General').click();
     CheckBoxPage.selectedItemsArea.should('contain','notes').should('contain','general')
    });
    it.only("Clicking checkbox - Office",()=>{
      //click office
      //validate- office public private classfield general
      CheckBoxPage.expandAllButton.click();
     CheckBoxPage.checkboxListItems.contains('Office').click();
     CheckBoxPage.selectedItemsArea.should('contain','office').should('contain','public').should('contain','private').should('contain','classified').should('contain','general');
    
    });
  });
  context("Radio buttons scenarios", () => {
    beforeEach(() =>{
      
      RadioButtonsPage.visit();
    });

    it.only("CLick radio button scenarios",()=>{
      RadioButtonsPage.yesRadioButton.click();
      RadioButtonsPage.resultsText.should("contain","Yes");
      RadioButtonsPage.impressiveRadioButton.click();
      RadioButtonsPage.resultsText.should("contain","Impressive");
      RadioButtonsPage.noRadioButton.should('be.disabled');
      
    });
  });*/
  /*context("Web tables scenarios", () => {
    beforeEach(() =>{
      
      webTablesPage.visit();
    });
    it.only("CLick web table scenarios",()=>{
      //click add button  input all elements necessary
      //First Name Last Name Email Age Salary Department then submit button
      webTablesPage.addButton.click();
      webTablesPage.firstName.type("xxxx");
      webTablesPage.lastName.type("YYYYY");
      webTablesPage.userEmail.type("aaa@gnv.lv");
      webTablesPage.userAge.type("40");
      webTablesPage.salary.type("500");
      webTablesPage.department.type("math");
      webTablesPage.submitButton.click();
      webTablesPage.allTable.should('contain','aaa@gnv.lv');
      webTablesPage.allTableRows.should('contain','aaa@gnv.lv');

    });
    it.only("Delete all records",()=>{
      //delete user with email
     // webTablesPage.deleteTableUser.type("alden@example.com").click();
     //webTablesPage.allTableRows.should('contain','alden@example.com');
     //webTablesPage.deleteButton.click();
      webTablesPage.deleteRow("alden@example.com");
      webTablesPage.deleteRow("cierra@example.com");
    });
  });*/
  context("Buttons page scenarios", () => {
    beforeEach(() =>{
      
      ButtonsPage.visit();
    });
    it.only("Click buttons scenarios",()=>{
      ButtonsPage.doubleClick.dblclick();
      ButtonsPage.doubleClickSuccess.should('contain',"You have done a double click");
      ButtonsPage.rightClick.rightclick();
      
      ButtonsPage.rightClickMsg.should('contain',"You have done a right click");
      ButtonsPage.dynamicClick.click();
      ButtonsPage.dynamicClickMsg.should('contain',"You have done a dynamic click");
    
    });

  });
  context("Links scenarios", () => {
    beforeEach(() =>{
      
      LinksPage.visit();
    });
    it.only("Click Links scenarios",()=>{
      cy.intercept('GET','created',{statusCode:500}).as('getCreated');
      LinksPage.createdLink.click();
      cy.wait('@getCreated').then(data =>{
        //cy.log(data.response.statusCode);
        expect(data.response.statusCode).to.eq(201)
      });

    });

  });

});
