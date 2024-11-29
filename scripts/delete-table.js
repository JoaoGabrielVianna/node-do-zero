import { sql } from '../config/db.js';

/**
 * Exclui a tabela 'VIDEOS' do banco de dados, caso ela exista.
 * O comando SQL é executado usando a biblioteca 'sql', que interage com o banco de dados.
 * 
 * - Se a tabela existir, ela será excluída.
 * - Se a tabela não existir, nada ocorrerá (graças ao `IF EXISTS`).
 * 
 * O método executa a remoção da tabela de maneira segura, sem lançar erros se a tabela não for encontrada.
 * 
 * @function
 * @async
 * @returns {Promise<void>} - Retorna uma Promise. Caso a tabela seja excluída com sucesso, a mensagem 'Tabela Apagada!' será exibida no console.
 *                            Se ocorrer um erro, ele será tratado automaticamente e nenhuma mensagem adicional será mostrada.
 */
sql`DROP TABLE IF EXISTS VIDEOS;`.then(() => {
    console.log('Tabela Apagada!');  // Mensagem exibida após a exclusão bem-sucedida da tabela.
}).catch((err) => {
    console.error('Erro ao apagar tabela:', err.message);  // Em caso de erro, exibe uma mensagem de erro.
});
