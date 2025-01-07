/// <reference types="cypress" />

/**
 * Suite de tests pour la gestion des alertes JavaScript
 * Démontre différentes façons de gérer les boîtes de dialogue JS :
 * - Alertes simples
 * - Boîtes de confirmation
 * - Utilisation de stubs pour le test
 */
describe("Handle js alerts", () => {
    /**
     * Test de vérification du texte d'une alerte JS
     * Vérifie que l'alerte contient le message attendu
     */
    it("Confirm js alert contains the correct text", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        // Supprime l'attribut target pour éviter l'ouverture dans un nouvel onglet
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        // Déclenche l'alerte
        cy.get('#button1').click()

        // Vérifie le texte de l'alerte
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });

    /**
     * Test de la boîte de confirmation - cas "OK"
     * Vérifie le comportement lors du clic sur OK
     */
    it("Validate js confirm alert box works correctly when clicking ok", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()

        // Simule le clic sur OK (retourne true)
        cy.on('window:confirm', (str) => {
            return true;
        })
        // Vérifie le message de confirmation
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    /**
     * Test de la boîte de confirmation - cas "Cancel"
     * Vérifie le comportement lors du clic sur Cancel
     */
    it("Validate js confirm alert box works correctly when clicking cancel", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()

        // Simule le clic sur Cancel (retourne false)
        cy.on('window:confirm', (str) => {
            return false;
        })
        // Vérifie le message de confirmation
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });

    /**
     * Test avancé utilisant un stub
     * Démontre l'utilisation des stubs pour tester les interactions
     * avec les boîtes de dialogue de manière plus précise
     */
    it("Validate js confirm alert box using a stub", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        // Création du stub
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        // Test avec le stub
        cy.get('#button4').click().then(() => {
            // Vérifie que le stub a été appelé avec le bon message
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;  // Simule le clic sur OK
        }).then(() => {
            // Vérifie le message final
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });
})