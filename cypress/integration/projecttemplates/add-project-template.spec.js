import { createPartiallyEmittedExpression } from "typescript";

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
    it('testvalidatie_nameTeKort', function(){
        
        cy.get('[data-cy=newProjectTemplateName]').type('abcde')
        cy.get('[data-cy=newProjectTemplateDescription]').type('Niet Te Kort')
        cy.get('[data-cy=newProjectTemplateImage]').type('https://tenor.com/view/we-got-him-we-got-him-ladies-and-gentlemen-gif-13874411')
        cy.get('[data-cy=newProjectTemplateBudget]').type('15')
        cy.get('[data-cy=newProjectTemplateMaxScore]').type('45')
        cy.get('[data-cy=newProjectTemplateApplicationDomain]').click();
        cy.get('mat-option').contains('Constructie').click();
        cy.get('[data-cy=newProjectTemplateProductTemplates]').click();
        cy.get('mat-option').contains('Lijm').click();
        cy.get('mat-option').contains('Hout').click();



        cy.get('[data-cy=newProjectTemplateNameError]').should('be.visible');
        cy.get('[data-cy=newProjectTemplateDescriptionError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateImageError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateBudgetError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateMaxScoreError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateApplicationDomainError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateProductTemplatesError]').should('not.be.visible');

        cy.get('[data-cy=newProjectTemplateSubmit]').should('be.disabled');

    });
    it('testvalidatie_descriptionTeKort', function(){
        cy.get('[data-cy=newProjectTemplateName]').type('Niet Te Kort')
        cy.get('[data-cy=newProjectTemplateDescription]').type('abcde')
        cy.get('[data-cy=newProjectTemplateImage]').type('https://tenor.com/view/we-got-him-we-got-him-ladies-and-gentlemen-gif-13874411')
        cy.get('[data-cy=newProjectTemplatNameError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateDescriptionError]').should('be.visible');
        cy.get('[data-cy=newProjectTemplateImageError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateSubmit]').should('be.disabled');

    });
    it('testvalidatie_imageNietIngevuld', function(){
        cy.get('[data-cy=newProjectTemplateImage]').click()
        cy.get('[data-cy=newProjectTemplateName]').type('Niet Te Kort')
        cy.get('[data-cy=newProjectTemplateDescription]').type('Niet Te Kort')
        cy.get('[data-cy=newProjectTemplateNameError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateDescriptionError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateImageError]').should('be.visible');
        cy.get('[data-cy=newProjectTemplateSubmit]').should('be.disabled');


    });
    it('testvalidatie_ongeldigeBudget', function(){
        
        cy.get('[data-cy=newProjectTemplateName]').type('abcdef')
        cy.get('[data-cy=newProjectTemplateDescription]').type('Niet Te Kort')
        cy.get('[data-cy=newProjectTemplateImage]').type('https://tenor.com/view/we-got-him-we-got-him-ladies-and-gentlemen-gif-13874411')
        cy.get('[data-cy=newProjectTemplateBudget]').type('-45')
        cy.get('[data-cy=newProjectTemplateMaxScore]').type('5')
        cy.get('[data-cy=newProjectTemplateApplicationDomain]').click();
        cy.get('mat-option').contains('Constructie').click();
        cy.get('[data-cy=newProjectTemplateProductTemplates]').click();
        cy.get('mat-option').contains('Lijm').click();
        cy.get('mat-option').contains('Hout').click();



        cy.get('[data-cy=newProjectTemplateNameError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateDescriptionError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateImageError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateBudgetError]').should('be.visible');
        cy.get('[data-cy=newProjectTemplateMaxScoreError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateApplicationDomainError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateProductTemplatesError]').should('not.be.visible');

        cy.get('[data-cy=newProjectTemplateSubmit]').should('be.disabled');

    });

it('testvalidatie_ongeldigeMaxScore', function(){
        
        cy.get('[data-cy=newProjectTemplateName]').type('abcdef')
        cy.get('[data-cy=newProjectTemplateDescription]').type('Niet Te Kort')
        cy.get('[data-cy=newProjectTemplateImage]').type('https://tenor.com/view/we-got-him-we-got-him-ladies-and-gentlemen-gif-13874411')
        cy.get('[data-cy=newProjectTemplateBudget]').type('15')
        cy.get('[data-cy=newProjectTemplateMaxScore]').type('-5')
        cy.get('[data-cy=newProjectTemplateApplicationDomain]').click();
        cy.get('mat-option').contains('Constructie').click();
        cy.get('[data-cy=newProjectTemplateProductTemplates]').click();
        cy.get('mat-option').contains('Lijm').click();
        cy.get('mat-option').contains('Hout').click();



        cy.get('[data-cy=newProjectTemplateNameError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateDescriptionError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateImageError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateBudgetError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateMaxScoreError]').should('be.visible');
        cy.get('[data-cy=newProjectTemplateApplicationDomainError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateProductTemplatesError]').should('not.be.visible');

        cy.get('[data-cy=newProjectTemplateSubmit]').should('be.disabled');

    });


    it('testvalidatie_niksIngevuld', function(){
        cy.get('[data-cy=newProjectTemplateNameError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateDescriptionError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateImageError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateDescriptionError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateImageError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateBudgetError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateMaxScoreError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateApplicationDomainError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateProductTemplatesError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateSubmit]').should('be.disabled');

    });

    it('testvalidatie_allesIngevuld', function(){
      cy.fillProjectTemplate();

      cy.get('[data-cy=newProjectTemplateNameError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateDescriptionError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateImageError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateDescriptionError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateImageError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateBudgetError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateMaxScoreError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateApplicationDomainError]').should('not.be.visible');
        cy.get('[data-cy=newProjectTemplateProductTemplatesError]').should('not.be.visible');

        cy.get('[data-cy=newProjectTemplateSubmit]').should('not.be.disabled');
    });

    it('testvalicatie_pressCancel', function() {
      cy.server();
      cy.route({
        method: 'GET',
        url: '/api/ProjectTemplate/projecttemplates/1',
        status: 200,
        response: 'fixture:projecttemplates.json'
    });

      cy.fillProjectTemplate();
      cy.get('[data-cy=newProjectTemplateCancel]').click({ force: true });
      cy.get('[data-cy=projectTemplateListItem]').should('have.length', 3);

    });
})
