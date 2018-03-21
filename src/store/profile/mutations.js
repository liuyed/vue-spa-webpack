/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import * as types from '../types';

export default {
  [types.SET_ACCOUNT](state, account) {
    state.account = account;
  },
};
