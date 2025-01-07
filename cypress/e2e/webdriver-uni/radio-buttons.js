/// <reference types="cypress" />

/**
 * Suite de tests pour les boutons radio
 * Vérifie le fonctionnement des boutons radio sur webdriveruni :
 * - Sélection des boutons
 * - Vérification des états (coché/non coché)
 * - Gestion des boutons désactivés
 */
describe("Verify radio buttons via webdriveruni", () => {
    /**
     * Test de sélection des boutons radio
     * Démontre comment sélectionner différents boutons radio
     * en utilisant leur position dans la liste
     */
    it("Check specific radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        
        // Sélectionne le premier bouton radio
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        // Sélectionne le deuxième bouton radio
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    });

    /**
     * Test de validation des états des boutons radio
     * Vérifie :
     * - L'état initial des boutons
     * - Le changement d'état après sélection
     * - Les boutons désactivés
     */
    it("Validate the states of specific radio buttons", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        // Vérifie l'état initial des boutons
        cy.get("[value='lettuce']").should('not.be.checked')  // Laitue non cochée
        cy.get("[value='pumpkin']").should('be.checked')      // Citrouille cochée

        // Change la sélection et vérifie les nouveaux états
        cy.get("[value='lettuce']").check()                   // Coche laitue
        cy.get("[value='lettuce']").should('be.checked')      // Vérifie que laitue est cochée
        cy.get("[value='pumpkin']").should('not.be.checked')  // Vérifie que citrouille n'est plus cochée

        // Vérifie qu'un bouton est désactivé
        cy.get("[value='cabbage']").should('be.disabled')     // Vérifie que chou est désactivé
    });
})