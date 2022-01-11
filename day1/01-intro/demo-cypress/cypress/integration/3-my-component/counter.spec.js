
describe('Test My App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('shows a button', () => {
    cy.get('button').should('have.text', 'Click');
  })

  it('starts the count at 0', () => {
    cy.contains('You clicked 0 times').should('be.visible');
  })

  it('Increases as the user clicks', () => {
    cy.get('button').click();
    cy.get('button').click();
    cy.get('button').click();
    cy.contains('You clicked 3 times').should('be.visible');
  })

});

