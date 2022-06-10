import * as types from "./mutation-types";

/* INI SETTERS */
/**
 * Função que armazena os dados do usuário.
 * 
 * @param {Function} commit Função para armazenar no state.
 * @param {Object} payload Objeto com os dados do usuário.
 */
 export const ActionsSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload);
};
/* FIM SETTERS */

/* INI ACTIONS */
/* FIM ACTIONS */