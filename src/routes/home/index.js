const Home = r => require.ensure([], () => r(require('@/pages/home/index.vue')), 'home');
const arr = [
  {
    path: '',
    name: 'home',
    component: Home,
    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },
];
// Home
export default arr;
