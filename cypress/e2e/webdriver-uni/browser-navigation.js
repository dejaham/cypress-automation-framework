/// <reference types="cypress" />

/**
 * Suite de tests pour valider les liens de la page d'accueil webdriveruni
 * Vérifie la navigation entre les différentes pages et le comportement du navigateur
 */
describe("Validate webdriveruni homepage links", () => {
    /**
     * Test de navigation entre les pages
     * Vérifie :
     * 1. La redirection vers les bonnes pages
     * 2. La navigation avant/arrière du navigateur
     * 3. Le rechargement de la page
     */
    it("Confirm links redirect to the correct pages", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        // Supprime l'attribut target pour éviter l'ouverture dans un nouvel onglet
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        // Vérifie que l'URL contient 'contactus'
        cy.url().should('include', 'contactus')

        // Test de la navigation arrière
        cy.go('back')
        // Recharge la page
        cy.reload()
        // Vérifie le retour à la page d'accueil
        cy.url().should('include', 'http://www.webdriveruniversity.com/')
        //cy.reload(true) //recharge sans utiliser le cache

        // Test de la navigation avant
        cy.go('forward')
        cy.url().should('include', 'contactus')

        // Test du portail de connexion
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        // Test de la liste de tâches
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
    });
})