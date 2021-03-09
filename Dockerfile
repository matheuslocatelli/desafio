# cria a imagem a ser utilizada
FROM cypress/base:12

# cria a pasta onde iremos trabalhar
WORKDIR /desafio

# instalar o cypress
RUN npm install cypress

# instalar dependencias node
RUN npm install 

# copiar as arquivos do teste
COPY ../desafio .

RUN npm run test

EXPOSE 3000