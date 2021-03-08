class home {
    inicio(){
        return cy.visit('http://automationpractice.com/')
    }
    search(){
        return cy.get('#search_query_top')
    }
    searchbutton(){
        cy.get('#searchbox > .btn').click()
    }
    
}
export default home