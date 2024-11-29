import { fastify } from 'fastify'
import { DatabasePostgres } from '../database/database-postgres.js';


/**
 * Criação do servidor Fastify.
 * O servidor lida com rotas para vídeos: criar, listar, atualizar e deletar.
 * A lógica de manipulação de dados é realizada através da classe DatabasePostgres.
 */
const server = fastify();

/**
 * Instância da classe DatabasePostgres para manipulação do banco de dados.
 * Esta instância será usada para interagir com os dados dos vídeos.
 */
const database = new DatabasePostgres();

/**
 * Rota para criar um novo vídeo.
 * Recebe o título, descrição e duração do vídeo, e salva no banco de dados.
 * 
 * @name POST /videos
 * @function
 * @async
 * @param {Object} request - O objeto de requisição contendo os dados do vídeo.
 * @param {Object} reply - O objeto de resposta para enviar o status de sucesso.
 * @returns {Object} - Retorna uma resposta com o status HTTP 201 (Criado).
 */
server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body;

    await database.create({
        title,
        description,
        duration,
    });

    return reply.status(201).send();
})

/**
 * Rota para listar vídeos no banco de dados.
 * Se um parâmetro de busca for fornecido, ele retorna vídeos que correspondem ao título.
 * 
 * @name GET /videos
 * @function
 * @async
 * @param {Object} request - O objeto de requisição contendo o parâmetro de busca.
 * @returns {Array} - Retorna uma lista de vídeos encontrados no banco de dados.
 */
server.get('/videos', async (request) => {
    const search = request.query.search;

    const videos = await database.list(search);

    return videos
})

/**
 * Rota para atualizar um vídeo existente no banco de dados.
 * Atualiza os campos de título, descrição e duração do vídeo especificado pelo ID.
 * 
 * @name PUT /videos/:id
 * @function
 * @async
 * @param {Object} request - O objeto de requisição contendo os dados do vídeo a ser atualizado e o ID na URL.
 * @param {Object} reply - O objeto de resposta para enviar o status de sucesso.
 * @returns {Object} - Retorna uma resposta com o status HTTP 204 (Sem Conteúdo), indicando que a atualização foi bem-sucedida.
 */
server.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body;

    await database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send();
})

/**
 * Rota para deletar um vídeo pelo ID.
 * Remove o vídeo do banco de dados com base no ID fornecido na URL.
 * 
 * @name DELETE /videos/:id
 * @function
 * @async
 * @param {Object} request - O objeto de requisição contendo o ID do vídeo a ser deletado.
 * @param {Object} reply - O objeto de resposta para enviar o status de sucesso.
 * @returns {Object} - Retorna uma resposta com o status HTTP 204 (Sem Conteúdo), indicando que a exclusão foi bem-sucedida.
 */
server.delete('/videos/:id', async (request, reply) => {
    const videoId = request.params.id

    await database.delete(videoId)

    return reply.status(204).send()
})

/**
 * Inicializa o servidor Fastify na porta 3333.
 * O servidor começa a escutar as requisições HTTP.
 * 
 * @name listen
 * @function
 * @async
 * @param {Object} options - As opções de configuração do servidor, incluindo a porta.
 * @returns {void}
 */
server.listen({
    port: process.env.PORT ?? 3333
});