describe('Login Authentication', {testIsolation: false}, () => {
    context('Positive Test', () => {
        it('Validate Sign In Button', () => {
            cy.visit('/')
            cy.get('[type="button"]').contains('Sign In').click()

            //expected or assertion
            cy.url().should('contain','login')
            cy.get('[type="text"]').should('be.visible')
            cy.get('[type="password"]').should('be.visible');
        });
        it('Login with valid email', () => {
            cy.get('[type="text"]').should('be.visible').clear().type('aldy2@gmail.com')
            cy.get('[type="password"]').should('be.visible').clear().type('12345678')
            cy.get('[type="button"]').contains('Login').click()
        });
        // it('Add primer to cart', () => {
        //     cy.get('[type="button"]').contains('Add to cart').click();

        //     cy.get('a[href*="/cart"]').click()

        //     //expected or assertion
        //     cy.url().should('contain', 'cart')
        // });
        it('Logout', () => {
            cy.get('.dropdown-toggle.btn.btn-primary').click()
            cy.get('.dropdown-menu.show').contains('Sign Out').click();

            //expected or assertion
            cy.get('[type="button"]').contains('Sign In')
        });
        
    });
    context('Negative Test', () => {
        it.skip('Login with invalid email', () => {
            
        });
    });
});