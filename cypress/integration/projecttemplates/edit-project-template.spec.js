context('Actions', () => {
    beforeEach(() => {
      cy.login();
        cy.server({ delay: 1000});
        
          cy.route({
            method: 'GET',
            url: '/api/School/productTemplates/1',
            status: 200,
            response: 'fixture:productTemplates.json'
          });
          cy.route({
            method: 'GET',
            url: '/api/ApplicationDomain',
            status: 200,
            response: 'fixture:applicationDomains.json'
          });
          
        cy.visit('/add-project-template');
    })
    
})
