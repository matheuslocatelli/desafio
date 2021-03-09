class home {
    inicio(){
        return cy.visit('http://automationpractice.com/')
    }
    search(){
        return cy.get('#search_query_top')
    }
    searchbutton(){
        return cy.get('#searchbox > .btn').click();
    }
    
}
export default home