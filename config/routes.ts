export default [
  {
    path: '/user/login',
    component: './user/login',
  },
  {
    path: '/user/register',
    component: './user/',
  },
  {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      {
        name: '用户列表',
        icon: 'table',
        path: '/user/list',
        component: '@/pages/user/list',
      },
      {
        path: '/supplier',
        name: '供应商',
        icon: 'table',
        component: './supplier/list',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
