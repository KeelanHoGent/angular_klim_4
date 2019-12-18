context('Actions', () => {
    beforeEach(() => {
      cy.login();
        cy.visit('/add-project-template');
    })
    it('testvalidatie_nameTeKort', function(){
        cy.get('[data-cy=newprojecttemplatename]').type('abcde')
        cy.get('[data-cy=newprojecttemplatedescription]').type('Niet Te Kort')
        cy.get('[data-cy=newprojecttemplateimage]').type('https://tenor.com/view/we-got-him-we-got-him-ladies-and-gentlemen-gif-13874411')
        cy.get('[data-cy=newprojecttemplatenameerror]').should('be.visible');
        cy.get('[data-cy=newprojecttemplatedescriptionerror]').should('not.be.visible');
        cy.get('[data-cy=newprojecttemplateimageerror]').should('not.be.visible');
        cy.get('[data-cy=newprojecttemplatesubmit]').should('be.disabled');

    });
    it('testvalidatie_descriptionTeKort', function(){
        cy.get('[data-cy=newprojecttemplatename]').type('Niet Te Kort')
        cy.get('[data-cy=newprojecttemplatedescription]').type('abcde')
        cy.get('[data-cy=newprojecttemplateimage]').type('https://tenor.com/view/we-got-him-we-got-him-ladies-and-gentlemen-gif-13874411')
        cy.get('[data-cy=newprojecttemplatenameerror]').should('not.be.visible');
        cy.get('[data-cy=newprojecttemplatedescriptionerror]').should('be.visible');
        cy.get('[data-cy=newprojecttemplateimageerror]').should('not.be.visible');
        cy.get('[data-cy=newprojecttemplatesubmit]').should('be.disabled');

    });
    it('testvalidatie_imageNietIngevuld', function(){
        cy.get('[data-cy=newprojecttemplateimage]').click()
        cy.get('[data-cy=newprojecttemplatename]').type('Niet Te Kort')
        cy.get('[data-cy=newprojecttemplatedescription]').type('Niet Te Kort')
        cy.get('[data-cy=newprojecttemplatenameerror]').should('not.be.visible');
        cy.get('[data-cy=newprojecttemplatedescriptionerror]').should('not.be.visible');
        cy.get('[data-cy=newprojecttemplateimageerror]').should('be.visible');
        cy.get('[data-cy=newprojecttemplatesubmit]').should('be.disabled');

    });
    it('testvalidatie_niksIngevuld', function(){
        cy.get('[data-cy=newprojecttemplatenameerror]').should('not.be.visible');
        cy.get('[data-cy=newprojecttemplatedescriptionerror]').should('not.be.visible');
        cy.get('[data-cy=newprojecttemplateimageerror]').should('not.be.visible');
        cy.get('[data-cy=newprojecttemplatesubmit]').should('be.disabled');

    });
})
