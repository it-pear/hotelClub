
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
        children: [
          {
            path: '',
            component: () => import('src/pages/admin/catalog/CatalogPage.vue')
          },
          {
            path: 'create',
            component: () => import('src/pages/admin/catalog/IdPage.vue')
          },
          {
            path: ':id',
            component: () => import('src/pages/admin/catalog/IdPage.vue')
          }
        ]
      },
      {
        path: 'services',
        children: [
          {
            path: '',
            component: () => import('src/pages/admin/services/CatalogServices.vue')
          },
          {
            path: 'create',
            component: () => import('src/pages/admin/services/CreateService.vue')
          },
          {
            path: ':id',
            component: () => import('src/pages/admin/services/IdService.vue')
          }
        ]
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            component: () => import('src/pages/admin/users/CatalogUsers.vue')
          },
          {
            path: ':id',
            component: () => import('src/pages/admin/users/IdUser.vue')
          },
        ]
      },
      {
        path: 'params',
        children: [
          {
            path: '',
            component: () => import('src/pages/admin/params/Index.vue')
          },
        ]
      },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
