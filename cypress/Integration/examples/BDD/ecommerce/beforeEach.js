beforeEach(function()
{
    cy.fixture('example').then(function()
    {
     this.data=this.data   
    })
})
