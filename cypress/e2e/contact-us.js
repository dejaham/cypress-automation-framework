<<<<<<< HEAD
/// <reference types="cypress" />


describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").click();
        //cy.xpath("//a[contains(@href,'contact')]").click();
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        cy.get("button[title='Submit']").click();
    });
=======
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
>>>>>>> b6f51ddb930683f0569d625eb3d9f9deb2c30411
})