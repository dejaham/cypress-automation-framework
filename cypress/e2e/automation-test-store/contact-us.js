/// <reference types="cypress" />

/**
 * Test suite for the Contact Us form functionality
 * Tests the submission process of the contact form on the Automation Test Store
 */
describe("Test Contact Us form via Automation Test Store", () => {
    /**
     * Test case to verify successful form submission
     * Steps:
     * 1. Navigate to the contact page
     * 2. Fill in the contact form with test data
     * 3. Submit the form and verify submission
     */
    it("Should be able to submit a successful submission via contact us form", () => {
        // Visit the homepage
        cy.visit("https://www.automationteststore.com/");
        
        // Click on the Contact link and log the action
        cy.get("a[href$='contact']").click().then(function(linktext) {
            cy.log("clicked on link using text: " + linktext.text())
        })
        // Alternative xpath selector method (commented out)
        //cy.xpath("//a[contains(@href,'contact')]").click();
        
        // Fill in the contact form fields
        cy.get('#ContactUsFrm_first_name').type("Joe");  // Enter first name
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");  // Enter email
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")  // Enter enquiry message
        
        // Submit the form
        cy.get("button[title='Submit']").click();
    });
})