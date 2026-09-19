# Sistema de Cadastro de Usuários

Sistema de cadastro de usuários desenvolvido como projeto de estudo em desenvolvimento web Full Stack.

O projeto começou como um formulário de cadastro utilizando HTML, CSS e JavaScript e evoluiu para uma aplicação com backend, API, banco de dados PostgreSQL e proteção de senhas.

## 🚀 Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Node.js
* Express
* PostgreSQL
* bcrypt
* dotenv
* CORS

## 📋 Funcionalidades

* Cadastro de usuários
* Validação dos campos do formulário
* Validação de e-mail
* Validação de senha
* Comunicação entre frontend e backend através de API
* Armazenamento dos usuários no PostgreSQL
* Criptografia das senhas utilizando bcrypt
* Gerenciamento de variáveis de ambiente com dotenv

## 🗂️ Estrutura do projeto

```text
sistema-cadastro-usuarios/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/123456789-jK/sistema-cadastro-usuarios.git
```

### 2. Entre na pasta

```bash
cd sistema-cadastro-usuarios
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o banco de dados

Crie um banco de dados PostgreSQL chamado `cadastro`.

Depois, crie a tabela:

```sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    senha VARCHAR(255) NOT NULL
);
```

### 5. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=cadastro
DB_PASSWORD=SUA_SENHA
DB_PORT=5432
```

> O arquivo `.env` não deve ser enviado para o GitHub, pois contém informações sensíveis.

### 6. Inicie o servidor

```bash
node server.js
```

O servidor será iniciado em:

```text
http://localhost:3000
```

## 🔐 Segurança

As senhas não são armazenadas diretamente no banco de dados.

Antes de serem salvas, elas passam pelo `bcrypt`, que gera um hash da senha.

O projeto também utiliza o `dotenv` para manter informações de configuração, como a senha do banco de dados, fora do código-fonte.

## 📚 O que aprendi com este projeto

Este projeto me ajudou a entender, na prática, como diferentes partes de uma aplicação web se comunicam.

Durante o desenvolvimento, pratiquei:

* Criação de páginas com HTML e CSS
* Manipulação do DOM com JavaScript
* Validação de formulários
* Criação de APIs com Node.js e Express
* Requisições HTTP utilizando `fetch`
* Integração com PostgreSQL
* Consultas SQL
* Hash de senhas com bcrypt
* Uso de variáveis de ambiente
* Controle de versão com Git
* Publicação de projetos no GitHub

## 🎯 Próximos passos

Algumas funcionalidades que podem ser adicionadas futuramente:

* Sistema de login
* Autenticação de usuários
* Validação de e-mail duplicado
* CRUD completo de usuários
* Melhorias na interface
* Deploy da aplicação

---

Projeto desenvolvido para fins de estudo e prática em desenvolvimento Full Stack.

