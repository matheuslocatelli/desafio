import homePage from '../pageObjects/homePage'
const home = new homePage();


Given ('que estou acessando o site da loja', () => {
    home.inicio();
});
When ('eu fizer uma busca por {string}', (content) => {
    home.search().type(content);
    home.searchbutton();
})
And ('o produto estiver disponível', () =>{
    cy.get('.available-now').should('be.visible')
})
And ('o produto for adicionado ao carrinho', () => {
    cy.get('[title="Add to cart"]').should('be.visible').click()
});
Then ('devo ter certeza que {string} foi adicionado ao carrinho', (content) => {
    cy.get('.layer_cart_product > h2').should('contain','Product successfully added to your shopping cart');
    cy.get('.button-container > .button-medium > span').click();
    cy.get('#product_1_1_0_0 > .cart_description').should('contain',content)
});