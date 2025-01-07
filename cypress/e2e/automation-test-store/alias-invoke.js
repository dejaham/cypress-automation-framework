/// <reference types="cypress" />

/**
 * Test suite for demonstrating Cypress aliases and invoke commands
 * This suite focuses on testing various product-related functionalities
 * on the automation test store website
 */
describe("Alias and invoke", () => {
  /**
   * Test case to validate a specific hair care product details
   * - Navigates to the Hair Care category
   * - Verifies the first product's text content
   * - Checks if the product name has sufficient length
   * - Validates if the product name includes "Seaweed Conditioner"
   */
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  /**
   * Test case to validate product thumbnails on the homepage
   * - Checks the number of product thumbnails
   * - Verifies the "Add to Cart" functionality is present
   */
  it("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.thumbnail').as('productThumbnail')
    cy.get('@productThumbnail').should('have.length', 16)
    cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
  });

  /**
   * Test case to calculate the total price of all products
   * - Sums up prices of regular priced items
   * - Sums up prices of items on sale
   * - Validates the total sum matches the expected amount
   * 
   * Note: The .only modifier means only this test will run in the suite
   */
  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.thumbnail').as('productThumbnail')
    
    // Get regular and sale prices using aliases
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
    
    var itemsTotal = 0;
    
    // Calculate total for regular priced items
    cy.get('@itemPrice').then($linkText => {
        var itemsPriceTotal = 0;
        var itemPrice = $linkText.split('$');
        var i;
        for(i = 0; i < itemPrice.length; i++) {
            cy.log(itemPrice[i])
            itemsPriceTotal += Number(itemPrice[i])
        }
        itemsTotal += itemsPriceTotal;
        cy.log("Non sale price items total: " + itemsPriceTotal)
    })

    // Calculate total for sale items
    cy.get('@saleItemPrice').then($linkText => {
        var saleItemsPrice = 0;
        var saleItemPrice = $linkText.split('$');
        var i;
        for(i = 0; i < saleItemPrice.length; i++) {
            cy.log(saleItemPrice[i])
            saleItemsPrice += Number(saleItemPrice[i])
        }
        itemsTotal += saleItemsPrice;
        cy.log("Sale price items total: " + saleItemsPrice)
    })
    // Verify the total sum matches expected value
    .then(() => {
        cy.log("The total price of all products: " + itemsTotal)
        expect(itemsTotal).to.equal(572.45)
    })
  });
});
