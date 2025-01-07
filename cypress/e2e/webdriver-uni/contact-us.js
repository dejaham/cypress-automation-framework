import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'

/// <reference types="cypress" />

/**
 * Suite de tests pour le formulaire de contact de WebdriverUni
 * Utilise le pattern Page Object Model pour une meilleure organisation du code
 * Les tests vérifient les soumissions réussies et échouées du formulaire
 */
describe("Test Contact Us form via WebdriverUni", () => {
  // Configuration du timeout par défaut pour les commandes Cypress
  Cypress.config('defaultCommandTimeout', 20000)
  // Initialisation des objets de page
  const homepage_PO = new Homepage_PO();
  const contact_Us_PO = new Contact_Us_PO();

  /**
   * Hook before : charge les données de test depuis le fichier example.json
   * Ces données seront utilisées dans les tests
   */
  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;  // Stockage des données dans une variable globale
    });
  });

  /**
   * Hook beforeEach : exécuté avant chaque test
   * - Visite la page d'accueil
   * - Attend 3 secondes pour le chargement
   * - Clique sur le bouton Contact Us
   */
  beforeEach(function () {
    homepage_PO.visitHompage();
    cy.wait(3000);
    homepage_PO.clickOn_ContactUs_Button();
    //cy.pause();  // Point d'arrêt pour le débogage (commenté)
  });

  /**
   * Test de soumission réussie du formulaire
   * Vérifie :
   * - L'encodage de la page
   * - Le titre de la page
   * - L'URL
   * - La soumission du formulaire avec des données valides
   */
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    // Soumission du formulaire avec les données de test
    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"), 
      data.last_name, 
      data.email, 
      "How can I learn Cypress?", 
      "h1", 
      "Thank You for your Message!"
    );
  });

  /**
   * Test de soumission échouée du formulaire
   * Vérifie le comportement avec un email invalide
   * Note : Le test est conditionnel selon le navigateur utilisé
   */
  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    // Test spécifique pour les navigateurs autres que Firefox
    if(Cypress.isBrowser('firefox')) {
      // Comportement spécifique pour Firefox si nécessaire
    } else {
      // Test avec un email vide pour provoquer une erreur
      contact_Us_PO.contactForm_Submission(
        data.first_name, 
        data.last_name,
        " ", // Email vide
        "How can I learn Cypress?", 
        "body", 
        "Error: Invalid email address"
      )
    }
  });
});
