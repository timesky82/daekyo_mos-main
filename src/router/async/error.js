import Layout from '@/layouts/MainLayout.vue'

export default {
  path: '/error',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ErrorPages',
  hidden: true,
  meta: {
    title: 'Error Pages',
    icon: '404'
  },
  children: [
    {
      path: '401',
      component: () => import('pages/error-page/401.vue'),
      name: 'Page401',
      meta: { title: '401', noCache: true }
    },
    {
      path: '404',
      component: () => import('pages/error-page/404.vue'),
      name: 'Page404',
      meta: { title: '404', noCache: true }
    }
  ]
}
