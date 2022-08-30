/// <reference types="cypress" />

import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

/**
 * CONTAINS BASE FUNCTIONS & SELECTORS
 */

export const SELECTOR ={

}

class base{
    static setHomePageDesktop(){
        cy.viewport(1440, 950)
        cy.visit('https://speedoc.com/sg')
    }

    static setHomePageMobile(){
        cy.viewport('samsung-note9')
        cy.visit('https://speedoc.com/sg')
    }

    static setNurseHomeVisitDesktop(){
        cy.viewport(1440, 950)
        cy.visit('https://speedoc.com/sg/home-nursing-care-house-call-nurses')
    }

    static setVideoConsultationPageMobile(){
        cy.viewport('samsung-note9')
        cy.visit('https://speedoc.com/sg/telemedicine-online-doctors')
    }

    static setChronicDiseasePageMobile(){
        cy.viewport('samsung-note9')
        cy.visit('https://speedoc.com/sg/chronic-diseases-management')
    }

    /**
     * ADD WAIT TIME
     * @param {input}, add waiting time in seconds 
     */
    static addWaitTime(input){
        cy.wait(input*1000)
    }

    /**
     * ASSERT ELEMENTS CONTAINS SPECIFIC TEXT
     * @param text 
     * @returns 
     */
    static assertTextContains(text){
        (cy.contains(text, {timeout: 10000}).should('exist'))
    }

    /**
     * CLEAR TEXTBOX / TEXT AREA
     * @param {*} element 
     */
    static clearText(element){
        cy.get(element).should('exist')
        .clear()
    }

    static clickText(text){
        base.addWaitTime(1)
        cy.contains(text).should('exist').click()
    }

    static clickButtonContainsText(buttonClass, text){
        cy.get(buttonClass).contains(text)
        .click()
    }

    /**
     * VERIFY & CLICK SELECTED ELEMENT
     * @param element 
     */
    static clickSelectedElement(element){
        cy.get(element, {timeout: 7000})
        .should('exist','be.visible')
        .click({force:true})
    }

    static clickSelectedElementNoForce(element){
        cy.get(element, {timeout: 7000})
        .should('exist','be.visible')
        .click()
    }

    /**
     * VERIFY IF ELEMENT VISIBLE IN VIEWPORT
     * @param element 
     */
    static verifyElementVisible(element){
        cy.get(element, {timeout: 10000}).should('exist', 'be.visible')
    }

    /**
     * VERIFY IF ELEMENT VISIBLE AND HAVE SPECIFIC ATTR VALUE
     * @param {*} element 
     */
    static verifyElementVisibleWithAttr(element, attr, value){
        cy.get(element, {timeout: 10000})
        .should('exist', 'be.visible')
        .should('have.attr', attr)
        .should('include', value)
    }

    static verifyElementEnabled(element){
        cy.get(element, {timeout: 7000}).should('exist','be.enabled')
    }

    /**
     * VERIFY IF ELEMENT EXIST IN DOM
     * @param element 
     */
    static verifyElementExist(element){
        cy.get(element, {timeout: 7000}).should('exist')
    }

    /**
     * VERIFY IF ELEMENT EXIST IN DOM AND CONTAINS SPECIFIC STRING
     * @param {*} element 
     * @param {*} string 
     */
    static verifyIfElementExistsAndContains(element, string){
        cy.get(element, {timeout: 7000}).should('exist', 'be.visible')
        .contains(string)
    }

    /**
     * TYPE TEXT INTO DESIGNATED ELEMENT
     * @param {*} element 
     * @param {*} text 
     */
    static typeTextIntoElements(element, text){
        cy.get(element, {timeout: 7000}).should('exist', 'be.visible')
        .scrollIntoView()
        .type(text)
        this.addWaitTime(1)
        // cy.get(element, {timeout: 7000}).should('exist', 'be.visible')
        // .type('{enter}')
    }

    static hoverIntoElementContains(element, text){
        cy.get(element)
        .should('exist', 'be.visible')
        .contains(text)
        .trigger('mouseover')
    }
}

export default base