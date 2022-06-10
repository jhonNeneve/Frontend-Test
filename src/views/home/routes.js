export default [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "negotiation" */ './pages/Home'),
    props: true,
    meta: {
      title: "Home",
    },
  },
];