export default [
  {
    path: '/',
    name: 'bus',
    component: resolve => require(['@/views/bus'], resolve)
  },
  {
    path: '/detail',
    name: 'detail',
    meta: { title: '首页' },
    component: resolve => require(['@/views/detail'], resolve)
  }
]
