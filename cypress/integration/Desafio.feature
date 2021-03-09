#Caso de teste no formato BDD
Feature: Pesquisar produto

Eu como visitante do site Quero realizar uma pesquisa e adicionar o primeiro produto comprável a partir dos resultados Para poder fazer checkout

#a tag @desafio possibilita a execução de testes em grupos, possibilitando que vários testes contendo a mesma tag sejam executados com apenas 1 comando
@desafio
Scenario: Adicionar produto ao carrinho  com sucesso
Given que estou acessando o site da loja
When eu fizer uma busca por "Faded Short Sleeve"
And o produto estiver disponível
And o produto for adicionado ao carrinho
Then devo ter certeza que "Faded Short Sleeve" foi adicionado ao carrinho