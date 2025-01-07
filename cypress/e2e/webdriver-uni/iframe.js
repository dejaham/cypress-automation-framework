/// <reference types="cypress" />

/**
 * Suite de tests pour la gestion des iframes et des fenêtres modales
 * Démontre comment interagir avec des éléments dans un iframe
 * et comment gérer les fenêtres modales qui en résultent
 */
describe("Handling IFrame & Modals", () => {
    /**
     * Test d'interaction avec un iframe et une fenêtre modale
     * Étapes :
     * 1. Accéder à l'iframe
     * 2. Interagir avec les éléments dans l'iframe
     * 3. Gérer la fenêtre modale qui apparaît
     */
    it("Handle webdriveruni iframe and modal", () => {
        cy.visit("http://www.webdriveruniversity.com")
        // Supprime l'attribut target pour éviter l'ouverture dans un nouvel onglet
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})

        // Accède au contenu de l'iframe
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            // Crée un alias pour le corps de l'iframe
            cy.wrap(body).as('iframe')
        })

        // Clique sur le bouton dans l'iframe
        cy.get('@iframe').find('#button-find-out-more').click()

        // Crée un alias pour la fenêtre modale
        cy.get('@iframe').find('#myModal').as('modal')

        // Vérifie le contenu de la fenêtre modale
        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods');
        })

        // Ferme la fenêtre modale
        cy.get('@modal').contains('Close').click()
    });
})