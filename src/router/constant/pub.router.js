export default [
  {
    path: '/pub',
    children: [
      {
        path: '',
        component: () => import('src/pub/ialist/PubGuide.vue'),
        name: 'PubGuide',
      },
      {
        path: 'test',
        component: () => import('src/pub/ialist/Test.vue'),
        name: '테스트',
      },
      {
        path: 'ma01',
        component: () => import('src/pub/ialist/Ma01.vue'),
        name: 'ma01',
      },
      {
        path: 'ma02',
        component: () => import('src/pub/ialist/Ma02.vue'),
        name: 'ma02',
      },
      {
        path: 'sample',
        component: () => import('src/pub/ialist/sample.vue'),
        name: 'sample',
      },
    ],
  },
];
