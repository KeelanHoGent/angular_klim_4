describe('adding a new product template', function () {
  beforeEach(function () {
    cy.login();
    cy.visit('/add-product-template');
  });

  it('button enabled when everything filled in', function() {

    cy.fillProductTemplate();

    cy.get('[data-cy=newProductTemplateSubmit]').should('be.enabled');
  });

  it('Button is disabled when form not filled in', function() {
    cy.get('[data-cy=newProductTemplateName]').type('abcde');
    cy.get('[data-cy=newProductTemplateImage]').type('https://tenor.com/view/we-got-him-we-got-him-ladies-and-gentlemen-gif-13874411');
    cy.get('[data-cy=newProductTemplateScore]').type('5');
    cy.get('[data-cy=newProductTemplateCategories]').click();
    cy.get('mat-option').contains('default categorytemplate').click();
    cy.get('[data-cy=newProductTemplateGeneralVariation]').type('dit is een test');

    cy.get('[data-cy=newProductTemplateSubmit]').should('be.disabled');
  });

  it('cancel button returns to view without adding', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/School/productTemplates/1',
      status: 200,
      response: 'fixture:productTemplates.json'
    });

   cy.fillProductTemplate();
    cy.get('[data-cy=newProductTemplateCancel]').click();

    cy.get('[data-cy=productTemplateCards]').should('have.length', 3);
  });

  it('submit adds a product template to list', function() {

    cy.fillProductTemplate();

    cy.get('[data-cy=newProductTemplateSubmit]').click();
    cy.get('[data-cy=productTemplateCards]').contains('abcde').should('be.visible');
  });
});
