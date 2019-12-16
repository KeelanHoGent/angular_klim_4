context('Actions', () => {
    beforeEach(() => {
      cy.login();
        cy.visit('/projecttemplates');
    })
    it('testvalidatie_nameTeKort', function(){
        cy.get('[projectemplatesoverzichtname]').should('have.length', 7);

    });
})
