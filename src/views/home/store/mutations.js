import * as types from "./mutation-types";

/**
 * As mutations que fazem as modificações nas variaves do state.
 */
export default {
  [types.SET_CART](state, payload) {
    state.cart = payload;
  },
  [types.SET_SEARCH](state, payload) {
    state.search = payload;
  },
  [types.SET_USERS](state, payload) {
    state.users = payload;
  },
  [types.SET_CARTS](state, payload) {
    state.carts = payload;
  },
  [types.SET_PRODUCTS](state, payload) {
    state.products = payload;
  },
  [types.SET_RECOMMENDEDS](state, payload) {
    state.recommendeds = payload;
  },
};