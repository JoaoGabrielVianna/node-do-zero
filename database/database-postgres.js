import { randomUUID } from "node:crypto";
import { sql } from "../config/db.js";

/**
 * Classe para interagir com o banco de dados PostgreSQL.
 * Esta classe fornece métodos para listar, criar, atualizar e excluir vídeos.
 */
export class DatabasePostgres {
    /**
     * Lista todos os vídeos ou filtra os vídeos pelo título se um termo de pesquisa for fornecido.
     * 
     * @param {string} search - Termo de pesquisa para filtrar os vídeos pelo título (opcional).
     * @returns {Promise<Array>} Lista de vídeos.
     */
    async list(search) {
        let videos;

        if (search) {
            // Filtra vídeos pelo título usando 'ilike' para busca insensível a maiúsculas/minúsculas
            videos = await sql`SELECT * FROM VIDEOS WHERE title ilike '%' || ${search} || '%'`;
        } else {
            // Retorna todos os vídeos se não houver pesquisa
            videos = await sql`SELECT * FROM VIDEOS`;
        }

        return videos;
    }

    /**
     * Cria um novo vídeo no banco de dados.
     * 
     * @param {Object} video - Objeto contendo as informações do vídeo.
     * @param {string} video.title - Título do vídeo.
     * @param {string} video.description - Descrição do vídeo.
     * @param {number} video.duration - Duração do vídeo em minutos.
     * @returns {Promise<void>}
     */
    async create(video) {
        // Gera um ID único para o vídeo
        const videoId = randomUUID();

        const { title, description, duration } = video;

        // Insere o novo vídeo no banco de dados
        await sql`INSERT INTO VIDEOS (id, title, description, duration) VALUES(${videoId}, ${title}, ${description}, ${duration})`;
    }

    /**
     * Atualiza um vídeo existente no banco de dados.
     * 
     * @param {string} id - ID único do vídeo a ser atualizado.
     * @param {Object} video - Objeto contendo as novas informações do vídeo.
     * @param {string} video.title - Novo título do vídeo.
     * @param {string} video.description - Nova descrição do vídeo.
     * @param {number} video.duration - Nova duração do vídeo em minutos.
     * @returns {Promise<void>}
     */
    async update(id, video) {
        const { title, description, duration } = video;

        // Atualiza as informações do vídeo com o ID correspondente
        await sql`UPDATE VIDEOS SET title = ${title}, description = ${description}, duration = ${duration} WHERE ID = ${id}`;
    }

    /**
     * Exclui um vídeo do banco de dados.
     * 
     * @param {string} id - ID único do vídeo a ser excluído.
     * @returns {Promise<void>}
     */
    async delete(id) {
        // Deleta o vídeo com o ID correspondente
        await sql`DELETE FROM VIDEOS WHERE ID = ${id}`;
    }
}