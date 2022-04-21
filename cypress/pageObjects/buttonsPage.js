import BasePage from "./basePage";
class ButtonsPage extends BasePage {
    static get url () {
        return '/buttons';
    }
    static get exampleElement (){
        return cy.get('exampleSelector');
    }
    static get doubleClick(){
        return cy.get("#doubleClickBtn");
    }
    static get rightClick(){
        return cy.get("#rightClickBtn");
    }
    static get doubleClickSuccess(){
        return cy.get("#doubleClickMessage");
    }
    static get rightClickMsg(){
        return cy.get("#rightClickMessage");
    }
    static get dynamicClick(){
        return cy.get("button.btn-primary").contains(/^\bClick Me\b/);
    }
    static get dynamicClickMsg(){
        return cy.get("#dynamicClickMessage");
    }
}
export default ButtonsPage;