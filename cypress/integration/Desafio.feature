Feature: Pesquisar produto

Eu como visitante do site Quero realizar uma pesquisa e adicionar o primeiro produto comprável a partir dos resultados Para poder fazer checkout

@desafio
Scenario: Adicionar produto ao carrinho  com sucesso
Given que estou acessando o site da loja
When eu fizer uma busca por "Faded Short Sleeve"
And o produto estiver disponível
And o produto for adicionado ao carrinho
Then devo ter certeza que "Faded Short Sleeve" foi adicionado ao carrinho