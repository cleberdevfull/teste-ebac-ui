/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

});
    it('Deve selecionar um produti da lista', () => {
        cy.get('.product-block')
            //.last()
            //.click()
            //.eq(2)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

        cy.get('#tab-title-description > a').should('contain' , 'Descrição')

    });

})