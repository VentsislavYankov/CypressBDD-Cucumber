import { should } from "chai"
import HomePage from "./pageObcects/HomePage"
import ProductPage from "./pageObcects/ProductPage"


describe('My Fourth Test Suite', function() 
{
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
this.data=data
        })
    })
    it('My FourthTest case', function() {
        
        const homePage=new HomePage()
        const productPage = new ProductPage()

        cy.visit(Cypress.env('url')+"/angularpractice/")

    
        homePage.getEditbox().type(this.data.name)
        //homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditbox().should('have.attr', 'minlength', '2')
        homePage.getEntreprenaur().should('be.disabled')
        //cy.pause()
        //homePage.getEntreprenaur().click()
        cy.get('li.nav-item:nth-child(2) > a:nth-child(1)').click()
        //cy.get('app-card.col-lg-3:nth-child(4) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)').eq(index).click()
        cy.get('app-card.col-lg-3:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)').click()
        cy.get('app-card.col-lg-3:nth-child(4) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)').click()
        cy.contains('Checkout').click()

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>{
            cy.log($el.text())
        })

        cy.get('.text-right > h3:nth-child(1) > strong:nth-child(1)').each(($el, index, $list)=>{
            cy.log($el.text())
        })

        cy.contains('Checkout').click()
        cy.get('#country').type('Bulgaria')
        Cypress.config('defaultCommandTimeout', 8000)
        //cy.get('.suggestion > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element)
        {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true

        })


        /*
        cy.get(':nth-child(4) > .card > .card-body > .card-title > a').each(($el, index, $list)=>{
            if($el.text().includes('Blackberry'))
            {
                cy.get('app-card.col-lg-3:nth-child(4) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)').eq(index).click()
            }
        })

        */
      
    })
})
