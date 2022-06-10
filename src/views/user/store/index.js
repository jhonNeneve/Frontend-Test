import state from "./state";
import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

/**
 * Exporta todo o store de uma vez.
 */
export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
};