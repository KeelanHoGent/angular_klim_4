describe('Login Page', () => {

  it('login page', () => {
    cy.visit('/login');
    cy.get('[data-cy=loginUsername]').type('leraar');
    cy.get('[data-cy=loginPassword]').type('P@ssword1');
    cy.get('[data-cy=loginSubmit').click();
  });

  });
