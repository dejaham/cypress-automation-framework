/// <reference types= "cypress" />


describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("banner");
        cy.get('[name="email"]').type("joeb@gmail.com");
        cy.get('textarea.feedback-input').type("Hello i want to contact you");
        cy.get('[type="submit"]').click();
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("banner");
        cy.get('textarea.feedback-input').type("Hello i want to contact you");
        cy.get('[type="submit"]').click();
    })
})