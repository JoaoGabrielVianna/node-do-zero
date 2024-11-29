
# NODE DO ZERO

> Este projeto foi desenvolvido com base no vídeo [Node Do Zero](https://www.youtube.com/watch?v=hHM-hr9q4mo&t=3351s), onde o Diego, da Rocketseat, ensina conceitos de Node.js para iniciantes.

### Ajustes e melhorias
Este projeto é voltado para iniciantes, por isso seu conteúdo é básico e visa proporcionar uma introdução ao Node.js. Algumas melhorias e ajustes foram feitos.

## 💻 Pré-requisitos

Antes de começar a rodar o projeto, você precisará ter algumas ferramentas instaladas:

- **Node.js**: Baixe e instale o Node.js através do [site oficial](https://nodejs.org/).
- **NPM**: O NPM geralmente é instalado junto com o Node.js, mas você pode verificar sua instalação rodando o comando:
  ```bash
  npm --version
  ```
- **Fastify**: Um framework web rápido e flexível para Node.js.
- **PostgreSQL**: Banco de dados relacional utilizado no projeto. Instale o PostgreSQL através do [site oficial](https://www.postgresql.org/).

## 🚀 Instalação

Para instalar as dependências necessárias, siga os passos abaixo:

1. **Instalar o Fastify**:
   ```bash
   npm install fastify
   ```

2. **Instalar o PostgreSQL**:
   ```bash
   npm install postgreSQL
   ```

## 📦 Endpoints

Este projeto utiliza os seguintes métodos HTTP:

- **GET**: Buscar informações.
- **POST**: Adicionar informações.
- **PUT**: Alterar informações.
- **DELETE**: Deletar informações.
- **PATCH**: Alterar uma informação específica.

### Exemplos de uso dos endpoints
> Para usar, acesse o arquivo [routes](./routes/routes.http)

#### Criar um vídeo

```http
POST http://localhost:3333/videos
Content-Type: application/json

{
    "title": "Video node",
    "description": "Esse é o primeiro video",
    "duration": 100
}
```

#### Listar vídeos

```http
GET http://localhost:3333/videos
```

```http
GET http://localhost:3333/videos?search=node
```

#### Alterar um vídeo

```http
PUT http://localhost:3333/videos/c607d533-35d2-4545-bd7c-45b0826ac47f
Content-Type: application/json

{
    "title": "Video 01",
    "description": "Esse é o segundo video",
    "duration": 100
}
```

#### Deletar um vídeo

```http
DELETE http://localhost:3333/videos/c607d533-35d2-4545-bd7c-45b0826ac47f
```

## ⚠️ Considerações

Esse projeto é uma introdução ao desenvolvimento com Node.js e ao uso de bancos de dados relacionais, como o PostgreSQL. Embora seja simples, ele serve como uma boa base para quem está começando e quer entender os conceitos principais do backend.

> "Gostei muito dos ensinamentos dessa aula, então resolvi criar esse repositório para compartilhar minha experiência e documentar minha evolução ao longo do processo."

## 📝 Licença

Este projeto está sem licença definida. Fique à vontade para usar e modificar, mas sem garantia de suporte.
