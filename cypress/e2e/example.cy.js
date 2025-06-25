describe('Example Test', () => {
  it('should visit a page and verify title', () => {
    // Visit a webpage
    cy.visit('https://example.cypress.io')
    
    // Check if the page contains specific text
    cy.contains('Kitchen Sink')
    
    // Click on a link
    cy.contains('type').click()
    
    // Verify URL includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    
    // Type into an input field
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })

  it('should handle a button click', () => {
    // Visit the same page
    cy.visit('https://example.cypress.io')
    
    // Click on a button
    cy.contains('button').click()
    
    // Verify the button click action
    cy.get('.navbar-header').should('have.class', '.navbar-toggle.collapsed')
  })    

    it('should check for an element visibility', () => {
        // Visit the same page
        cy.visit('https://example.cypress.io')
        
        // Check if an element is visible
        cy.get('#utilities').should('be.visible')
    })
})
