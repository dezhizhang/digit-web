export default [
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: '用户列表',
    icon: 'table',
    path: '/list',
    component: '@/pages/user/list',
  },
  {
    path: '/supplier',
    name: '供应商',
    icon: 'table',
    component: './supplier/list'
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
