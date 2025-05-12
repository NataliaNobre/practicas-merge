// cypress/e2e/login_spec.js

describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('https://example.com/login'); // Reemplaza con la URL real
    });
  
    it('should display the login form', () => {
      cy.get('form').should('exist');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');
    });
  
    it('should show an error on invalid credentials', () => {
      cy.get('input[name="email"]').type('wrong@example.com');
      cy.get('input[name="password"]').type('invalidPassword');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Credenciales inválidas').should('be.visible');
    });
  
    it('should redirect on successful login', () => {
      cy.get('input[name="email"]').type('user@example.com'); // to be reviewed!
      cy.get('input[name="password"]').type('correctPassword');
      cy.get('button[type="submit"]').click();
    });
});