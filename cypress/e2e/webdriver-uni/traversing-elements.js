/// <reference types="Cypress" />

/**
 * Suite de tests démontrant les différentes méthodes de traversée du DOM dans Cypress
 * Illustre comment naviguer et interagir avec les éléments du DOM
 * en utilisant les différentes méthodes de traversée disponibles
 */
describe("Traversing DOM elements in Cypress", () => {
  /**
   * Hook beforeEach : exécuté avant chaque test
   * - Visite la page de test
   * - Accède à la section des tableaux de données
   */
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

  /**
   * Test de la méthode children()
   * Permet d'accéder aux éléments enfants directs d'un élément
   */
  it("children() to get the children of DOM elements", () => {
  });

  /**
   * Test de la méthode closest()
   * Trouve l'ancêtre le plus proche correspondant au sélecteur
   */
  it("closest() to validate the closest ancestor DOM element", () => {
  });

  /**
   * Test de la méthode eq()
   * Sélectionne un élément à un index spécifique dans un ensemble
   */
  it("eq() to retrieve a specific element based on index", () => {
  });

  /**
   * Test de la méthode filter()
   * Filtre les éléments qui correspondent à un sélecteur donné
   */
  it("filter() to retrieve DOM elements that match a specific selector", () => {
  });

  /**
   * Test de la méthode find()
   * Recherche des éléments descendants correspondant au sélecteur
   */
  it("find() to retrieve DOM elements of a given selector", () => {
  });

  /**
   * Test de la méthode first()
   * Sélectionne le premier élément d'un ensemble
   */
  it("first() to retrieve the first DOM element within elements ", () => {
  });

  /**
   * Test de la méthode last()
   * Sélectionne le dernier élément d'un ensemble
   */
  it("last() to retrieve the last DOM element within elements", () => {
  });

  /**
   * Test de la méthode nextAll()
   * Sélectionne tous les éléments frères suivants
   */
  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
  });

  /**
   * Test de la méthode nextUntil()
   * Sélectionne tous les frères suivants jusqu'à un élément spécifique
   */
  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
  });

  /**
   * Test de la méthode not()
   * Exclut les éléments correspondant à un sélecteur
   */
  it("not() to remove DOM element(s) from the set of elements", () => {
  });

  /**
   * Test de la méthode parent()
   * Accède à l'élément parent direct
   */
  it("parent() To get parent DOM element of elements", () => {
  });

  /**
   * Test de la méthode parents()
   * Accède à tous les éléments parents
   */
  it("parents() to get parents DOM element of elements", () => {
  });

  /**
   * Test de la méthode prev()
   * Sélectionne l'élément frère précédent
   */
  it("prev() to get the previous sibling DOM element within elements", () => {
  });

  /**
   * Test de la méthode prevAll()
   * Sélectionne tous les éléments frères précédents
   */
  it("prevAll() to get all previous sibling DOM elements within elements", () => {
  });

  /**
   * Test de la méthode prevUntil()
   * Sélectionne tous les frères précédents jusqu'à un élément spécifique
   */
  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
  });

  /**
   * Test de la méthode siblings()
   * Sélectionne tous les éléments frères
   */
  it("siblings() To get all sibling DOM elements of elements", () => {
  });
});