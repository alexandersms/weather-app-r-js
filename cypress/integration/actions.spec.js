context("Actions", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("Ville non trouvée", () => {
        cy.get('.input-search')
            .type('djhhjjhkdskkjd').should('have.value', 'djhhjjhkdskkjd')
        cy.contains('button', 'Rechercher').click()
        cy.wait(2500)
    });

    it("Ville obligatoire", () => {
        cy.get('.input-search')
        cy.contains('button', 'Rechercher').click()
        cy.wait(2500)
    });

    it("Afficher la météo de la ville", () => {
        cy.get('.input-search')
            .type('paris')
        cy.contains('button', 'Rechercher').click()
        cy.wait(2500)
        cy.contains('div', 'VEN').click()
        cy.wait(1000)
        cy.contains('div', 'SAM').click()
        cy.wait(1000)
        cy.contains('div', 'DIM').click()
        cy.wait(1000)
        cy.contains('div', 'LUN').click()
        cy.wait(1000)
        cy.contains('div', 'MAR').click()
        cy.wait(1000)
        cy.contains('div', 'MER').click()
        cy.wait(1000)
        cy.contains('div', 'JEU').click()
        cy.wait(1000)
    });

})