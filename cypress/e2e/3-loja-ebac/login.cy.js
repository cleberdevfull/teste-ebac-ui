
/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    afterEach(() => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('cleber.santos.almeida@gmail.com')
        cy.get('#password').type('@12345567890')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, cleber.santos.almeida (não é cleber.santos.almeida? Sair)')
    }) 

        it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
        cy.get('#username').type('cleber2.santos.almeida@gmail.com')
        cy.get('#password').type('@12345567890')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido.')

    }) 

        it('Deve exibir uma mensagem de erro ao inserir senha inválida  ', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('cleber.santos.almeida@gmail.com')
        cy.get('#password').type('@123455678')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
        
    });
})