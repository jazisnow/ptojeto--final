# backEnd-labedit

O Projeto Labeddit consiste em uma plataforma de API para publicações, permitindo a criação e autenticação de contas para que os usuários possam interagir através de posts, curtidas e comentários. Além disso, o projeto foi concebido para servir como uma base sólida para o desenvolvimento do front-end, onde ele é implementado no programa. Anexo: clique aqui para acessar mais detalhes!

Os principais tópicos abordados no projeto são:

Introdução ao TypeScript.
Criação de uma API.
Implementação dos principais métodos: GET, POST, PUT e DELETE.
Organização em arquitetura em camadas.
Aplicação de conceitos de Programação Orientada a Objetos.
Autenticação de usuários.
STATUS: Projeto concluído.

📄 Concepção do Projeto
Instalação

Instalação das dependências
npm install

Execução do projeto
npm run dev e npm run start.

Funcionalidades
. Requisições:

SignUp: Criação de uma conta de usuário na API através do método POST.

Login: Realiza o login do usuário na API através do método POST.

GetPosts: Recupera todos os posts da API, mas apenas se o token gerado no login ou signup for informado, utilizando o método GET.

GetPostById: Obtém um post específico com o ID informado, mas apenas se o token gerado no login ou signup for informado, utilizando o método GET.

CreatePost: Permite a criação de um novo post na API, mas apenas se o token gerado no login ou signup for informado, utilizando o método POST.

CreateComment: Possibilita a criação de um comentário na API, mas apenas se o token gerado no login ou signup for informado, utilizando o método POST.

LikeOrDislikePost: Mecânica de curtir ou descurtir um post da API, mas apenas se o token obtido no login ou signup e o ID do post a ser curtido forem informados. Além disso, será necessário informar no corpo (body) o valor "true" ou "false", onde "true" representa curtir e "false" representa descurtir.

LikeOrDislikeComment: Mecânica de curtir ou descurtir um comentário da API, mas apenas se o token obtido no login ou signup e o ID do comentário a ser curtido forem informados. Além disso, será necessário informar no corpo (body) o valor "true" ou "false", onde "true" representa curtir e "false" representa descurtir.

Bibliotecas Utilizadas

Dependências:
bcryptjs,
cors,
dotenv,
express,
jsonwebtoken,
knex,
sqlite3,
uuid,
zod

Dependências de desenvolvimento:
@types/bcryptjs,
@types/cors,
@types/express,
@types/jsonwebtoken,
@types/knex,
@types/node,
@types/uuid,
ts-node-dev,
typescript

💡 Programas utilizados:
VSCode
PostMan

💻 Tecnologias
TypeScript
Express
Git

📫 Contato
Email: jaziburysantos@gmail.com

