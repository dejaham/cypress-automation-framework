/// <reference types="cypress" />

/**
 * Suite de tests pour les listes déroulantes
 * Démontre l'interaction avec différents types de listes déroulantes
 * et la vérification des sélections effectuées
 */
describe("Interact with dropdown lists via webdriveruni", () => {
    /**
     * Test de sélection dans les listes déroulantes
     * Montre différentes façons de :
     * - Sélectionner des valeurs
     * - Vérifier les sélections
     * - Vérifier le contenu des options
     */
    it("Select specific values via select dropdown lists", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        // Sélection simple dans la première liste
        cy.get('#dropdowm-menu-1').select('c#')

        // Sélection avec vérification de la valeur
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')

        // Sélection avec vérification du texte affiché
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

        // Tests supplémentaires sur la deuxième liste
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')      // Vérifie la valeur
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')                // Vérifie le texte
    });
})