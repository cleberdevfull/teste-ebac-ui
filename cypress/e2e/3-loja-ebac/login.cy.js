
/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('cleber.santos.almeida@gmail.com')
        cy.get('#password').type('@12345567890')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, cleber.santos.almeida (não é cleber.santos.almeida? Sair)')
    }) 

})