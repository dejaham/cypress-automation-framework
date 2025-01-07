/// <reference types="cypress" />

/**
 * Suite de tests pour vérifier le fonctionnement des cases à cocher
 * Teste différentes interactions avec les checkboxes sur webdriveruni
 */
describe("Verify checkboxes via webdriveruni", () => {
    /**
     * Test de sélection d'une case à cocher
     * Vérifie qu'une case peut être cochée et que son état est correctement mis à jour
     */
    it("Check and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com")
        // Supprime l'attribut target pour éviter l'ouverture dans un nouvel onglet
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        // Première méthode : sélection directe
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        // Deuxième méthode : utilisation d'un alias pour plus de lisibilité
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        //cy.get('@option-1').check();
        // Vérifie que la case est bien cochée
        cy.get('@option-1').check().should('be.checked')
    });

    /**
     * Test de désélection d'une case à cocher
     * Vérifie qu'une case peut être décochée et que son état est correctement mis à jour
     */
    it("Uncheck and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com")
        // Supprime l'attribut target pour éviter l'ouverture dans un nouvel onglet
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        // Utilisation d'un alias pour la case à décocher
        cy.get(':nth-child(5) > input').as('option-3')
        // Décoche la case et vérifie qu'elle n'est plus cochée
        cy.get('@option-3').uncheck().should('not.be.checked')
    });

    /**
     * Test de sélection multiple de cases à cocher
     * Démontre comment cocher plusieurs cases en une seule commande
     */
    it("Check multiple checkboxes", () => {
        cy.visit("http://www.webdriveruniversity.com")
        // Supprime l'attribut target pour éviter l'ouverture dans un nouvel onglet
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        // Sélectionne plusieurs cases à cocher en une seule commande
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    });
})