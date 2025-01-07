/// <reference types="cypress" />

/**
 * Suite de tests démontrant les différents types de sélecteurs dans Cypress
 * Présente les différentes méthodes pour sélectionner des éléments sur une page web
 */
describe("Selector examples", () => {
    /**
     * Test illustrant les différentes façons de sélectionner des éléments
     * Utilise la page Contact Us de WebdriverUni comme exemple
     * Montre les sélecteurs les plus couramment utilisés
     */
    it("Examples of Selectors via WebdriverUni Contact Us Page", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

        // Sélection par nom de balise HTML
        cy.get("input")

        // Sélection par attribut name et sa valeur
        cy.get("input[name='first_name']")

        // Sélection par ID
        cy.get("#contact_me")

        // Sélection par classe CSS
        cy.get(".feedback-input")

        // Sélection par classes multiples
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

        // Sélection par combinaison de deux attributs différents
        cy.get("[name='email'][placeholder='Email Address']")

        // Sélection par XPath (nécessite le plugin cypress-xpath)
        cy.xpath("//input[@name='first_name']")
    })
})