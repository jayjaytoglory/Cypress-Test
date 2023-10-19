export default new class auth {
    
    login_session(username, password){
            cy.get('[type="text"]').should('be.visible').clear().type(username)
            cy.get('[type="password"]').should('be.visible').clear().type(password)
            cy.get('[type="button"]').contains('Login').click()
    }
}