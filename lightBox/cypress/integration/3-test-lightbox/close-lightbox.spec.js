/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('test lightbox', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://127.0.0.1:5500/app/js/exercice/lightBox/lightbox.html')
    })
  
    it('Click and discard', () => {
      cy.get('#img').click( { force: true} )
      cy.get("body").click("topLeft")
    })
  
    it('Add a like !', () => {
      cy.get('#img').click( { force: true} )
      cy.get('#likesvg').click( { force: true} )
      
      cy.get('#likecounter')
        .contains(1)
      cy.get("body").click("topLeft")
      cy.get('#overlayLike').contains(1)

    })
  
    it('Remove a like !', () => {
      cy.get('#img').click( { force: true} )
      cy.get('#likecounter')
        .contains(0)
      cy.get("body").click("topLeft")
      cy.get('#overlayLike').contains(0)

    })


    it('Add a comment', () => {
      cy.get('#img').click( { force: true} )

      cy.get('#commentbox"')
      .type('Awesome!').should('have.value', 'Awesome!')  

    })

    
    it('can check off an item as completed', () => {
      // In addition to using the `get` command to get an element by selector,
      // we can also use the `contains` command to get an element by its contents.
      // However, this will yield the <label>, which is lowest-level element that contains the text.
      // In order to check the item, we'll find the <input> element for this <label>
      // by traversing up the dom to the parent element. From there, we can `find`
      // the child checkbox <input> element and use the `check` command to check it.
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
  
      // Now that we've checked the button, we can go ahead and make sure
      // that the list element is now marked as completed.
      // Again we'll use `contains` to find the <label> element and then use the `parents` command
      // to traverse multiple levels up the dom until we find the corresponding <li> element.
      // Once we get that element, we can assert that it has the completed class.
      cy.contains('Pay electric bill')
        .parents('li')
        .should('have.class', 'completed')
    })
  })
  