context('Actions', () => {
    beforeEach(() => {
        cy.login();
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/ProjectTemplate/projecttemplates/1',
            status: 200,
            response: 'fixture:projecttemplates.json'
        });

        cy.visit('/projecttemplates');
    })
    it('shows three project templates', function() {
        cy.get('[data-cy=projectTemplateListItem]').should('have.length', 3);
      });
    
      it('click on card shows detail page', function() {
        cy.server();
        cy.route({
          method: 'GET',
          url: '/api/ProjectTemplate/1',
          status: 200,
          response: 'fixture:projectTemplate.json'
        });
    
        console.log(cy.get('[data-cy=projectTemplateListItem]').contains('Test Project').parent('div'));
        cy.get('[data-cy=projectTemplateListItem]').contains('Test Project').then(($e) => {$e.parent('div').find('[data-cy=projectTemplateDetails]').click(); cy.get('[data-cy=editProjectTemplateName]').should('have.value', 'Test Project')});
       
        ;
    
      });
    
      it('click on new goes to add new project template', function() {
        cy.get('[data-cy=addNewProjectTemplate]').click();
        cy.get('[data-cy=newProjectTemplateName]').should('be.visible');
      });
})
