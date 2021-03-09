//importar PageObjects
import homePage from '../pageObjects/homePage'
//cria uma variável para receber o PageObject
const home = new homePage();


Given ('que estou acessando o site da loja', () => {
//navega para a home do site
    home.inicio();
});
When ('eu fizer uma busca por {string}', (content) => {
    //procura o campo de pesquisa e informa o produto informado no arquivo "Desafio.feature"
    home.search().type(content);
    //clica no botão de pesquisar
    home.searchbutton();
})
And ('o produto estiver disponível', () =>{
    //verifica se o produto está disponível
    cy.get('.available-now').should('be.visible')
})
And ('o produto for adicionado ao carrinho', () => {
    //procura pelo botão "Add to cart" e clica nele
    cy.get('[title="Add to cart"]').should('be.visible').click()
});
Then ('devo ter certeza que {string} foi adicionado ao carrinho', (content) => {
    //verifica se o site apresenta a mensagem informando que o produto foi adicionado ao carrinho
    cy.get('.layer_cart_product > h2').should('contain','Product successfully added to your shopping cart');
    //clica no botão de checkout
    cy.get('.button-container > .button-medium > span').click();
    //verifica se o produto consta na lista de produtos para checkout
    cy.get('#product_1_1_0_0 > .cart_description').should('contain',content)
});