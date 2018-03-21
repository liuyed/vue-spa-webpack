/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';
import * as App from './app.vue';

require('./app.js');

const app = new Vue(App).$mount('#app');

export default app;
