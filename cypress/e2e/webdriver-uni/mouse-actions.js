/// <reference types="cypress" />

/**
 * Suite de tests pour les actions de la souris
 * Démontre différentes interactions possibles avec la souris dans Cypress :
 * - Défilement vers un élément
 * - Glisser-déposer
 * - Double-clic
 * - Maintien du clic gauche
 */
describe("Test mouse actions", () => {
    /**
     * Test de défilement vers un élément
     * Fait défiler la page jusqu'à ce que l'élément soit visible
     */
    it("Scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com")
        // Fait défiler jusqu'à l'élément et clique dessus
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    });

    /**
     * Test de glisser-déposer
     * Simule l'action de glisser-déposer en utilisant les événements souris
     */
    it("I should be able to drag and drop a draggable item", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // Simule le début du glissement (mousedown sur l'élément à déplacer)
        cy.get('#draggable').trigger('mousedown', {which: 1});

        // Simule le dépôt (mousemove puis mouseup sur la zone cible)
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    });

    /**
     * Test de double-clic
     * Effectue un double-clic sur un élément
     */
    it("I should be able to perform a double mouse click", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // Exécute le double-clic
        cy.get('#double-click').dblclick();
    });

    /**
     * Test de maintien du clic gauche
     * Vérifie le changement de style lors du maintien du clic gauche
     */
    it("I should be able hold down the left mouse click button on a given element", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})

        // Maintient le clic gauche et vérifie le changement de couleur
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            // Vérifie que la couleur de fond est passée au vert
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    });
})