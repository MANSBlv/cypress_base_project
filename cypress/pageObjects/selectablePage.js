import BasePage from "./basePage";

class SelectablePage extends BasePage {

    static get url () {
        return '/selectable';
    }

    static get exampleElement () {
        return cy.get('exampleSelector');
      }

    static get listElements () {
        return cy.get('#verticalListContainer > li');
    }
        //------For grid ----------
    static get gridTab () {
        return cy.get('#demo-tab-grid')
    }

    static get firstRow () {
        return cy.get('#row1>li');
    }

    static get secondRow () {
        return cy.get('#row2>li');
    }

    static get thirdRow () {
        return cy.get('#row3>li');
    }
}
export default SelectablePage;