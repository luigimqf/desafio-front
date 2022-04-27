# Instruções do projeto

Este teste prático foi desenvolvido por mim com a intenção de mostrar meu conhecimento e minhas dificuldades dentro da programação.

## **Instruções**

O projeto conta com perfis pré-criados que ainda não possuem informações cadastradas. Os logins estão na pasta de config porém estarei deixando mais a baixo eles também.

Em primeira instancia quando você entra no site deve-se logar usando uma das contas, após essa primeira interação o id do perfil é armazenado dentro do localstorage para evitar o usuário ficar tendo que logar toda vez que entra.

O projeto conta com proteção de rota simples que impede usuários sem login de acessarem o profile ou o cadastro de dados.

Ao entrar você passara por um cadastro em três etapas que iram coletar suas informações, sendo eles:

> Etapa 1: Coleta de Nome, Telefone e Nacionalidade.
> Etapa 2: Informações residenciais.
> Etapa 3: Informações pessoais como gênero e estado civil.

Durante a etapa de informações residenciais foi usada a Api ViaCEP para preenchimento automático dos campos.

No decorrer das etapas pode-se ver uma barra de progressão em cima que pode ser usado para retornar a etapas passadas para correção de dados.

Por fim, após a finalização das etapas iniciara uma animação rápida de conclusão te redirecionando para o profile logo em seguida, lá você poderá visualizar todas as suas informações e alterar o que for necessário

## **Logins pré-definidos**

Os logins pré-definidos podem ter sido equivocados, podem foi a forma como interpretei o teste prático e espero que não tenha sido um problema.

> Email: testefront@gmail.com - Senha: testando123

> Email: testefront2@gmail.com - Senha: testando1234

## **Bibliotecas Usadas**

- styled-components(estilização)
- react-router-dom(rotas)
- toastify(notificações)
- axios(API request)
- react-icons(estilização)

## **Informações adicionais**

O pattern do projeto conta com uma pasta Pages que carregas as páginas principais, ela é composta por componentes vindos da pasta componentes que estão separados por blocos para cada página.

Pasta auxiliares como services - utils - config contém informações e serviços usados durante a aplicação para validação, requisição e integração de tipagem.

## **Para rodar o projeto**

1- Clone o projeto.
2- Use o comando yarn install ou npm install.
3- yarn start para iniciar o projeto.
4- acesse a URL : localhost:3000.
