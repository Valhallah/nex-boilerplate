describe('Navigation', () => {
  it('should navigate to each page', () => {
    cy.visit('/');
    cy.contains('Home Page');

    cy.get('a').contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Page');

    cy.get('a').contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.contains('Contact Page');
  });
});
    
