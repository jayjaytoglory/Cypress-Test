import { account } from "../fixtures/test-data/data-auth";

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
            cy.get('[type="text"]').should('be.visible').clear().type(account.email)
            cy.get('[type="password"]').should('be.visible').clear().type(account.password)
            cy.get('[type="button"]').contains('Login').click()
        });
        it('Add primer to cart', () => {
            //cy.get('.card-title').contains('Primer')
            cy.get('.card-title').contains('Primer').siblings('[style*="display: flex;"]').children('button[class*="btn btn-outline-success btn-block"]').contains('Add to cart').click()
            //cy.get('.card-title').contains('Bronzer').siblings('[style*="display: flex;"]').children('button[class*="btn btn-outline-success btn-block"]').contains('Add to cart').click()
            //cy.get('[style*="display: flex;"]').children('button[class*="btn btn-outline-success btn-block"]').contains('Add to cart').click()
            cy.get('a[href*="/cart"]').click()
            //cy.get('a[class*="my-2 my-sm-0 mr-2 btn btn-primary active"]').click();
            //.parents('button[class="btn btn-outline-success btn-block"]').contains('Add to cart').click()
            
            
            // //expected or assertion
            cy.url().should('contain', 'cart')
            cy.get('.card').contains('Primer')
            
            //cy.get('[type="number"]')
            //cy.get('[style*="display: flex;"]').siblings('.card-title').contains('Primer').children('button[class*="btn btn-outline-success btn-block"]').contains('Add to cart').click()

        });
        // it('Logout', () => {
        //     cy.get('.dropdown-toggle.btn.btn-primary').click()
        //     cy.get('.dropdown-menu.show').contains('Sign Out').click();

        //     //expected or assertion
        //     cy.get('[type="button"]').contains('Sign In')
        // });
        
    });
    context('Negative Test', () => {
        it.skip('Login with invalid email', () => {
            
        });
    });
});