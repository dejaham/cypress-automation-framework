/// <reference types="cypress" />

/**
 * Test suite demonstrating iteration over multiple elements
 * Shows how to use Cypress each() command to iterate through products
 */
describe("Iterate over elements", () => {
  /**
   * Test case to demonstrate logging information for each product
   * Iterates through all hair care products and logs their index and name
   */
  it("Log information of all hair care products", () => {
    cy.visit("https://automationteststore.com/");
    // Navigate to Hair Care category
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    // Iterate through each product and log its index and name
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        cy.log("Index: " + index + " : " + $el.text())
    });
  });

  /**
   * Test case to demonstrate finding and selecting a specific product
   * Shows how to conditionally click on a product based on its name
   */
  it("Add specific product to basket", () => {
    cy.visit("https://automationteststore.com/");
    // Navigate to Hair Care category
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    // Iterate through products and click on specific product
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        // Check if current product is the one we're looking for
        if($el.text().includes('Curls to straight Shampoo')) {
            cy.wrap($el).click()  // Click on the found product
        }
    });
  });
});
