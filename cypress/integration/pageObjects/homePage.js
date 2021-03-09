//Criação do PageObject, o mesmo recebe o nome "home" por se tratar da home do site
class home {
    inicio(){
        //realiza a visita ao site
        return cy.visit('http://automationpractice.com/')
    }
    search(){
        //procura pelo campo de pesquisa
        return cy.get('#search_query_top')
    }
    searchbutton(){
        //procura pelo botão "pesquisar" e clica no mesmo
        return cy.get('#searchbox > .btn').click();
    }
}
export default home