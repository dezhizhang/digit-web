export default [
  {
    path: '/user',
    component: '@/layout/UserLayout',
    hideChildrenInMenu: true,
    wrappers: ['@/components/Wrappers/Auth'],
    routes: [
      {
        path: '/user',
        redirect: '/workbench',
      },
      {
        path: '/user/login',
        name: '登录页',
        component: '@/pages/user/login',
      },
      {
        path: '/user/register',
        name: '注册页',
        component: '@/pages/user/register'
      }
    ],
  },
  {
    path: '/',
    component: '@/layout/BaseLayout',
    wrappers: ['@/components/Wrappers/Auth'],
    routes: [
      {
        path: '/',
        redirect: '/workbench',
      },
      {
        path: '/workbench',
        name: '工作台',
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
      {
        component: './404',
      },
    ],
  },

];
