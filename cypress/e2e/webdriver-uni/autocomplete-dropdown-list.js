/// <reference types="cypress" />

/**
 * Suite de tests pour la fonctionnalité de liste déroulante avec autocomplétion
 * Vérifie le comportement de l'autocomplétion et la sélection d'éléments
 * sur la page WebdriverUniversity
 */
describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
    /**
     * Test de sélection de produits via la liste d'autocomplétion
     * Démontre comment :
     * 1. Saisir des caractères pour déclencher l'autocomplétion
     * 2. Sélectionner des éléments spécifiques dans la liste
     * 3. Vérifier l'URL après la sélection
     */
    it("Select specific product via autocomplete list", () => {
        // Navigation vers la page de test
        cy.visit("http://www.webdriveruniversity.com")
        // Supprime l'attribut target pour éviter l'ouverture dans un nouvel onglet
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        // Saisie de 'A' pour déclencher la première liste d'autocomplétion
        cy.get('#myInput').type('A')

        // Parcourt les options d'autocomplétion pour trouver et sélectionner 'Avacado'
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Avacado';

            if(prod === productToSelect) {
                // Deux façons de cliquer sur l'élément :
                //$el.click();              // Clic jQuery direct
                $el.trigger("click");       // Déclenchement d'un événement de clic

                // Soumet la sélection et vérifie l'URL
                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
            // Saisie de 'g' pour déclencher la seconde liste d'autocomplétion
            cy.get('#myInput').type('g')

            // Parcourt les options d'autocomplétion pour trouver et sélectionner 'Grapes'
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Grapes';
    
                if(prod === productToSelect) {
                    // Deux façons de cliquer sur l'élément :
                    //$el.click();              // Clic jQuery direct
                    $el.trigger("click");       // Déclenchement d'un événement de clic
    
                    // Soumet la sélection et vérifie l'URL
                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect)
                }
            })
        })
    });
})