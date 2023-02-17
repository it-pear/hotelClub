
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/IndexPage.vue'),
        meta: {
          auth: ['admin']
        },
      },
      { 
        path: '/catalog', 
        component: () => import('pages/CatalogPage.vue'),
        meta: {
          auth: ['admin']
        },
      },
      { 
        path: '/single/:id', 
        component: () => import('pages/SinglePage.vue'),
        meta: {
          auth: ['admin']
        },
      },
      { 
        path: '/services', 
        component: () => import('pages/ServicesPage.vue'),
        meta: {
          auth: ['admin']
        },
      },
      { 
        path: '/about', 
        component: () => import('pages/AboutPage.vue'),
        meta: {
          auth: ['admin']
        },
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
        component: () => import('src/pages/admin/catalog/CatalogPage.vue') 
      },
      { 
        path: 'catalog/:id', 
        component: () => import('src/pages/admin/catalog/IdPage.vue') 
      },
      { 
        path: 'catalog/create', 
        component: () => import('src/pages/admin/catalog/IdPage.vue') 
      },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
