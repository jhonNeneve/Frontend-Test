import * as types from "./mutation-types";
import serviceGenerator from "@/services/generator";

/* INI SETTERS */
/**
 * Função que armazena os usuários.
 * 
 * @param {Function} commit Função para armazenar no state.
 * @param {Array} payload Array com os usuários.
 */
 export const ActionsSetUsers = ({ commit }, payload) => {
  commit(types.SET_USERS, payload);
};
/**
 * Função que armazena os carrinhos.
 * 
 * @param {Function} commit Função para armazenar no state.
 * @param {Array} payload Array com os carrinhos.
 */
 export const ActionsSetCarts = ({ commit }, payload) => {
  commit(types.SET_CARTS, payload);
};
/**
 * Função que armazena os produtos.
 * 
 * @param {Function} commit Função para armazenar no state.
 * @param {Array} payload Array com os produtos.
 */
 export const ActionsSetProducts = ({ commit }, payload) => {
  commit(types.SET_PRODUCTS, payload);
};
/**
 * Função que armazena os recomendados.
 * 
 * @param {Function} commit Função para armazenar no state.
 * @param {Array} payload Array com os recomendados.
 */
 export const ActionsSetRecommendeds = ({ commit }, payload) => {
  commit(types.SET_RECOMMENDEDS, payload);
};
/**
 * Função que armazena o texto pesquisado.
 * 
 * @param {Function} commit Função para armazenar no state.
 * @param {String} payload Texto pesquisado.
 */
 export const ActionsSetSearch = ({ commit }, payload) => {
  commit(types.SET_SEARCH, payload);
};
/**
 * Função que armazena o texto pesquisado.
 * 
 * @param {Function} commit Função para armazenar no state.
 * @param {String} payload Texto pesquisado.
 */
 export const ActionsSetCart = ({ commit }, payload) => {
  commit(types.SET_CART, payload);
};
/* FIM SETTERS */

/* INI ACTIONS */
/**
 * Função que carrega todos os dados.
 * 
 * @param {Function} dispatch Função para executar uma Action.
 * @return Retorna um objeto com todos os dados.
 */
 export const ActionsGetData = ({ dispatch }) => {
  return new Promise((resolve) => resolve(serviceGenerator.getData())).then(resp =>{
    dispatch("ActionsSetUsers", resp.users);
    dispatch("ActionsSetCarts", resp.carts);
    dispatch("ActionsSetProducts", resp.products);
    dispatch("ActionsSetRecommendeds", resp.recommendeds);
    return resp;
  }).catch((e) => {
    console.error(e);
  });
};
/* FIM ACTIONS */0