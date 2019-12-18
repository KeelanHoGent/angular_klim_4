describe('adding a new product template', function () {
  beforeEach(function () {
    cy.login();
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/School/productTemplates/1',
      status: 200,
      response: 'fixture:productTemplates.json'
    });

    cy.visit('/producten');
  });

  it('shows four cards', function() {
    cy.get('[data-cy=productTemplateCards]').should('have.length', 4);
  });

  it('delete button disbled if added by go', function() {

    cy.get('[data-cy=productAddedByGo]').should('have.length', 4);
    cy.get('[data-cy=deleteProductTemplate]').should('have.length', 0);

  });

  it('click on card shows detail page', function() {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/api/ProductTemplate/1',
      status: 200,
      response: 'fixture:productTemplate.json'
    });

    cy.get('[data-cy=productTemplateCards]').contains('Karton').click();
    cy.get('[data-cy=productTemplateName]').should('have.value', 'Karton');

  });

  it('when added by go everything from product should be disabled', function() {

    // cy.server();
    // cy.route({
    //   method: 'GET',
    //   url: '/api/ProductTemplate/1',
    //   status: 200,
    //   response: 'fixture:productTemplate.json'
    // });

    cy.get('[data-cy=productTemplateCards]').contains('Karton').click();

    cy.get('[data-cy=productTemplateName]').should('be.disabled');
    cy.get('[data-cy=productTemplateImage]').should('be.disabled');
    cy.get('[data-cy=productTemplateScore]').should('be.disabled');

  });

  it('click on new goes to add new product', function() {
    cy.get('[data-cy=addNewProductTemplate]').click();
    cy.get('[data-cy=newProductTemplateName]').should('be.visible');
  });
});
