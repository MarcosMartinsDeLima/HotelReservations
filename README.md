## Sobre 
Este projeto foi criado em Nestjs usando typescript e typeorm para uma API de reserva de hotel, onde um funcionario pode fazer uma reserva para um usuario, onde pode e deve se cadastrar no sistema, onde cada funcionario deve estar logado e tem acesso com JWT, pode fazer crud de funcionario, cadastar novos usuarios, quartos e fazer as reservas que contem o nome do consumidor,funcionario, data da emissao, data de entrada e saida, numero e andar do quarto

## Esquema

<img src="./src/img/esquema.png" alt="esquema" />

## Endpoints

`POST ` http://localhost:3000/funcionario/create

`GET ` http://localhost:3000/funcionario

`GET` http://localhost:3000/funcionario/:id

`PUT` http://localhost:3000/funcionario/update

`DELETE` http://localhost:3000/funcionario/delete/:id

`POST` http://localhost:3000/funcionario/login

`POST` http://localhost:3000/registro/create-consumer

`POST` http://localhost:3000/registro/create-quarto

`POST` http://localhost:3000/registro/create-reserva