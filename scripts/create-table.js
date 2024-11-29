import { sql } from '../config/db.js';

/**
 * Criação da tabela 'videos' no banco de dados.
 * A tabela armazenará informações sobre vídeos, incluindo:
 * - id: um identificador único (chave primária) para cada vídeo.
 * - title: o título do vídeo.
 * - description: a descrição do vídeo.
 * - duration: a duração do vídeo em minutos.
 *
 * O comando SQL será executado utilizando a biblioteca 'sql' para interação com o banco de dados.
 * 
 * @function
 * @async
 * @returns {Promise<void>} - Retorna uma Promise. Em caso de sucesso, a tabela será criada.
 *                            Caso haja um erro, uma mensagem será exibida no console.
 */
sql`
CREATE TABLE videos(
    id              TEXT PRIMARY KEY,
    title           TEXT,
    description     TEXT,
    duration        INTEGER
);
`.then(() => {
    console.log('Tabela Criada!');
}).catch((err) => {
    console.error('Erro ao criar tabela:', err.message);
});
