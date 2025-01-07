/// <reference types="cypress" />

/**
 * Test suite demonstrating Cypress web security features
 * Explores different approaches to handle Same-Origin Policy restrictions
 * Shows how to navigate between different domains in Cypress tests
 */
describe("Cypress web security", () => {
    /**
     * Test case showing direct navigation between different domains
     * Note: This test is skipped as it violates Same-Origin Policy
     * Cypress prevents visiting different domains in the same test by default
     */
    it.skip("Validate visiting two different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.google.com');  // This will fail due to Same-Origin Policy
    });

    /**
     * Test case demonstrating how to navigate between domains via user actions
     * Shows how to modify link behavior to work around Same-Origin Policy
     */
    it("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        // Remove target attribute to prevent opening in new tab
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });

    /**
     * Test case showing the usage of cy.origin() command
     * Demonstrates the recommended way to handle cross-origin navigation
     * Introduced in Cypress 12.0.0
     */
    it('Origin command', () => {
        // Visit first domain using origin command
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/");
        })

        // Visit second domain using origin command
        cy.origin('automationteststore.com', () => {
            cy.visit("/");
        })

        // Example of Same-Origin navigation (commented out)
        //cy.visit("https://www.webdriveruniversity.com");
        //cy.visit("https://selectors.webdriveruniversity.com");
    });
})