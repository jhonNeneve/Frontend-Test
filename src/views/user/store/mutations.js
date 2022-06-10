import * as types from "./mutation-types";

/**
 * As mutations que fazem as modificações nas variaves do state.
 */
export default {
  [types.SET_USER](state, payload) {
    state.user = payload;
  },
};