/**
 * Função para pegar os usuários.
 * 
 * @param {Array} users Usuários.
 * @return Array de usuários.
 */
 export const getUsers = ({ users }) => { return users };

 /**
 * Função para pegar os carrinhos.
 * 
 * @param {Array} carts Carrinhos.
 * @return Array de carrinhos.
 */
export const getCarts = ({ carts }) => { return carts };

/**
 * Função para pegar os produtos.
 * 
 * @param {Array} products Produtos.
 * @return Array de produtos.
 */
 export const getProducts = ({ products }) => { return products };

 /**
 * Função para pegar os recomendados.
 * 
 * @param {Array} recommendeds Recomendados.
 * @return Array de recomendados.
 */
export const getRecommendeds = ({ recommendeds }) => { return recommendeds };

/**
* Função para pegar o texto pesquisado.
* 
* @param {String} search Pesquisa.
* @return Texto pesquisado.
*/
export const getSearch = ({ search }) => { return search };

/**
* Função para pegar os itens do carrinho.
* 
* @param {String} cart Carrinho.
* @return Itens do carrinho.
*/
export const getCart = ({ cart }) => { return cart };