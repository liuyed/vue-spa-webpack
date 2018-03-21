
/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 *
 * http://rc.vuejs.org/guide/
 */
import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-Router and vuex store in sync.
 *
 * https://github.com/vuejs/vuex-router-sync/blob/master/README.md
 */
import VuexRouterSync from 'vuex-router-sync';
import store from './store';
import router from './routes';

VuexRouterSync.sync(store, router);

import 'babel-polyfill';// 加入垫片
/* ============
 * Vue i18n
 * ============
 *
 * Internationalization plugin of Vue.js.
 *
 * https://kazupon.github.io/vue-i18n/
 */
// import VueI18n from 'vue-i18n';
// import messages from './locale';

// Vue.use(VueI18n);

// export const i18n = new VueI18n({
//   locale: 'en',
//   fallbackLocale: 'en',
//   messages,
// });


/* ============
 * jQuery
 * ============
 *
 * Require jQuery
 *
 * http://jquery.com/
 */
// import jQuery from 'jquery';

// window.$ = window.jQuery = jQuery;

// 引入公共样式
import '@/styles/index.less';
