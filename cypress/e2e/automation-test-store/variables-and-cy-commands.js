/// <reference types="cypress" />

/**
 * Test suite demonstrating the usage of variables, Cypress commands, and jQuery commands
 * Shows different approaches to handle asynchronous operations and element interactions
 */
describe("Verifying variables, cypress commands and jquery commands", () => {
    /**
     * Test case showing different approaches to navigate between product pages
     * Demonstrates why some approaches fail and others succeed
     */
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        
        // Example 1: This approach will fail due to async nature of Cypress commands
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click();
        // skincareLink.click();

        // Example 2: This approach will work but isn't optimal
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click();

        // Example 3: Recommended Approach - Chaining commands directly
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
    });

    /**
     * Test case demonstrating proper handling of element text
     * Shows why direct property access fails and how to properly access element properties
     */
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        // This will fail - cannot directly access text property
        // const header = cy.get("h1 .maintext");
        // cy.log(header.text())

        // Correct approach using .then() to handle async operation
        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
    });

    /**
     * Test case showing different approaches to validate form properties
     * Demonstrates both Cypress commands and jQuery methods
     * Note: This test is marked with .only and will be the only one executed in the suite
     */
    it.only("Validate properties of the Contact Us Page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        // Approach 1: Using Cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        // Approach 2: Using jQuery with promises
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            // Using jQuery to find and validate text
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            // Demonstrating embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())  // Log the text content
                cy.log(fnText)         // Log the entire jQuery element
            })
        })
    });
})