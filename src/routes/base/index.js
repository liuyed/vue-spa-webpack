/**
 * Created by zhangyanling on 17/8/11.
 */
const PageNo = r => require.ensure([], () => r(require('@/pages/base/404.vue')), '404');
const PageError = r => require.ensure([], () => r(require('@/pages/base/error.vue')), 'error');

const arr = [
  {
    path: '/404',
    name: '404',
    component: PageNo,
    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },
  {
    path: '/error',
    name: 'error',
    component: PageError,
    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },
];
// Home
export default arr;
