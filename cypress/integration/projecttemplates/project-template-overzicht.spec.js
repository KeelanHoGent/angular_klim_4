context('Actions', () => {
    beforeEach(() => {
        cy.visit('/projecttemplates');
    })
    it('testvalidatie_nameTeKort', function(){
        cy.get('[projectemplatesoverzichtname]').should('have.length', 7);

    });
})