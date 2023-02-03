
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/IndexPage.vue') 
      },
      { 
        path: '/catalog', 
        component: () => import('pages/CatalogPage.vue') 
      },
    ]
  },
  {
    path: '/auth/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/auth/AuthPage.vue') 
      },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/admin/HomePage.vue') 
      },
      { 
        path: 'catalog', 
        component: () => import('pages/admin/CatalogPage.vue') 
      },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
