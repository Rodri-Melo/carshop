# Carshop

## Descrição

Esse é um projeto de uma API com crud feito em typescript com os principios de Programação Orientada a Objetos e arquitetura MSC para gerenciar uma concessionária de veiculos, utilizando o banco de dados MongoDB e com auxilio de Mongoose e Docker.

Um projeto feito no curso de Desenvolvimento full-stack na trybe, mostra uma solução organizada e escalavel, utiliza Template Method que define a estrutura de um algoritmo em uma classe base, permitindo que subclasses forneçam implementações específicas para partes desse algoritmo.



## Tecnologias e Ferramentas

Typescript, POO, Docker, MongoDB e Mongoose.

Mocha,Chai e Sinon para fazer testes.

## Instalação

Clone o projeto em sua máquina, Para iniciar a aplicação, execute o comando para subir os contêineres:  docker compose up -d

isso ira  inicializar um container chamado car_shop e outro chamado car_shop_db.

A partir daqui você pode rodar o container car_shop via CLI ou abri-lo no VS Code,

O comando docker exec -it car_shop bash te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
