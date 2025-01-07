/// <reference types="cypress" />

/**
 * Test suite demonstrating different methods to inspect and interact with items
 * Shows various ways to locate and click on elements using Cypress commands
 */
describe("Inspect Automation Test Store items using chain of commands", () => {
    /**
     * Test case demonstrating element selection using specific CSS selector
     * Uses a complex selector path to target the first featured item
     */
    it("Click on the first item using item header", () => {
        cy.visit("https://www.automationteststore.com/");
        // Click on first item using full CSS path selector
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    });

    /**
     * Test case showing element selection using text content
     * Uses contains() method to find element by its text
     */
    it("Click on the first item using item text", () => {
        cy.visit("https://www.automationteststore.com/");
        // Click on item by finding element containing specific text
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });

    /**
     * Test case demonstrating element selection using index
     * Shows how to chain commands to find and select elements
     */
    it("Click on the first item using index", () => {
        cy.visit("https://www.automationteststore.com/");
        // Click on first item by chaining commands and using index
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });
})