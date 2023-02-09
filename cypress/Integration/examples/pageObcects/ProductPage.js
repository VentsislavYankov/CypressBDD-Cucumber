class ProductPage
{

getEditbox()
{
    return cy.get('input[name="name"]:nth-child(2)')
}  

getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}

getGender()
{
    return cy.get('select')
}    

getEntreprenaur()
{
    return cy.get('#inlineRadio3')
}

getShopTab()
{
    cy.get(':nth-child(4) > .card > .card-body > .card-title > a')
}

}

export default ProductPage;