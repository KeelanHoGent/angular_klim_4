// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  const username = 'leraar';

  cy.request({
    method: 'POST',
    url: '/api/account/login',
    body: {
      userName: username,
      password: 'P@ssword1'
    }
  }).then(res => localStorage.setItem('currentUser', res.body));
});

Cypress.Commands.add('fillProductTemplate', () => {
  cy.get('[data-cy=newProductTemplateName]').type('abcde');
  cy.get('[data-cy=newProductTemplateDescription]').type('Niet te kort');
  cy.get('[data-cy=newProductTemplateImage]').type('https://tenor.com/view/we-got-him-we-got-him-ladies-and-gentlemen-gif-13874411');
  cy.get('[data-cy=newProductTemplateScore]').type('5');
  cy.get('[data-cy=newProductTemplateCategories]').click();
  cy.get('mat-option').contains('default categorytemplate').click();
  cy.get('[data-cy=newProductTemplateGeneralVariation]').type('dit is een test');
});

Cypress.Commands.add('fillProjectTemplate', () => {
  cy.get('[data-cy=newProjectTemplateName]').type('abcdef');
  cy.get('[data-cy=newProjectTemplateDescription]').type('Niet te kort');
  cy.get('[data-cy=newProjectTemplateImage]').type('https://tenor.com/view/we-got-him-we-got-him-ladies-and-gentlemen-gif-13874411');
  cy.get('[data-cy=newProjectTemplateBudget]').type('15');
  cy.get('[data-cy=newProjectTemplateMaxScore]').type('5');
  cy.get('[data-cy=newProjectTemplateApplicationDomain]').click();
  cy.get('mat-option').contains('Constructie').click();
  cy.get('[data-cy=newProjectTemplateProductTemplates]').click();
  cy.get('mat-option').contains('Lijm').click();
  cy.get('mat-option').contains('Hout').click();
});