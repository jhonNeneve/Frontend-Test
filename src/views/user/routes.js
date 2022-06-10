export default [
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ './pages/Profile'),
    props: true,
    meta: {
      title: "Perfil",
    },
  },
];