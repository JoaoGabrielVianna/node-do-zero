import { randomUUID } from 'node:crypto';

/**
 * Classe para simulação de banco de dados em memória usando Map.
 * Esta classe fornece métodos para listar, criar, atualizar e excluir vídeos em memória.
 */
export class DatabaseMemory {
    // Map para armazenar os vídeos, usando o ID como chave e os dados do vídeo como valor.
    #vides = new Map();

    /**
     * Lista todos os vídeos ou filtra os vídeos pelo título se um termo de pesquisa for fornecido.
     * 
     * @param {string} [search] - Termo de pesquisa para filtrar os vídeos pelo título (opcional).
     * @returns {Array} Lista de vídeos.
     */
    list(search) {
        return Array.from(this.#vides.entries())
            .map((videoArray) => {
                const id = videoArray[0];
                const data = videoArray[1];

                return {
                    id,
                    ...data,
                };
            })
            .filter((video) => {
                // Se houver um termo de pesquisa, filtra os vídeos pelo título
                if (search) {
                    return video.title.includes(search);
                }
                return true;
            });
    }

    /**
     * Cria um novo vídeo e o adiciona ao banco de dados em memória.
     * 
     * @param {Object} video - Objeto contendo as informações do vídeo.
     * @param {string} video.title - Título do vídeo.
     * @param {string} video.description - Descrição do vídeo.
     * @param {number} video.duration - Duração do vídeo em minutos.
     * @returns {void}
     */
    create(video) {
        const videoId = randomUUID(); // Gera um ID único para o vídeo usando UUID.

        this.#vides.set(videoId, video); // Adiciona o vídeo no Map com o ID como chave.
    }

    /**
     * Atualiza as informações de um vídeo existente no banco de dados em memória.
     * 
     * @param {string} id - ID do vídeo a ser atualizado.
     * @param {Object} video - Objeto contendo as novas informações do vídeo.
     * @param {string} video.title - Novo título do vídeo.
     * @param {string} video.description - Nova descrição do vídeo.
     * @param {number} video.duration - Nova duração do vídeo em minutos.
     * @returns {void}
     */
    update(id, video) {
        // Atualiza o vídeo no Map usando o ID fornecido.
        this.#vides.set(id, video);
    }

    /**
     * Exclui um vídeo do banco de dados em memória.
     * 
     * @param {string} id - ID do vídeo a ser excluído.
     * @returns {void}
     */
    delete(id) {
        // Exclui o vídeo do Map usando o ID fornecido.
        this.#vides.delete(id);
    }
}
