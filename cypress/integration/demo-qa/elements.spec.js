
import SelectablePage from "../../pageObjects/selectablePage";


context("Elements Page", () => {
  
  context("Selectable list scenarios", () => {
    beforeEach(() =>{
      
      SelectablePage.visit();
    });
    it.only("Click list scenarios",()=>{
     /* cy.get('#verticalListContainer > li').each(() =>{
      });*/

      SelectablePage.listElements.eq(0).should('contain',"Cras justo odio").click()
      .should('have.class',"active list-group-item-action");

      SelectablePage.listElements.eq(1).should('not.have.class',"active list-group-item-action");

      SelectablePage.listElements.eq(2).should('contain',"Morbi leo risus").click()
      .should('have.class',"active list-group-item-action");

      SelectablePage.listElements.eq(3).should('not.have.class',"active list-group-item-action");
   
    });
    it.only("Click grid scenarios",()=>{
      SelectablePage.gridTab.click();
    
      SelectablePage.firstRow.eq(1).should('contain',"Two").click()
      .should('have.class',"active list-group-item-action");

      SelectablePage.secondRow.eq(0).should('contain',"Four").click()
      .should('have.class',"active list-group-item-action");

      SelectablePage.secondRow.eq(2).should('contain',"Six").click()
      .should('have.class',"active list-group-item-action");

      SelectablePage.thirdRow.eq(1).should('contain',"Eight").click()
      .should('have.class',"active list-group-item-action");

      
      SelectablePage.firstRow.eq(0).should('contain',"One").should('not.have.class',"active list-group-item-action");

      SelectablePage.firstRow.eq(2).should('contain',"Three").should('not.have.class',"active list-group-item-action");

      SelectablePage.secondRow.eq(1).should('contain',"Five").should('not.have.class',"active list-group-item-action");

      SelectablePage.thirdRow.eq(0).should('contain',"Seven").should('not.have.class',"active list-group-item-action");
      
      SelectablePage.thirdRow.eq(2).should('contain',"Nine").should('not.have.class',"active list-group-item-action");
      
    });
  });

});
