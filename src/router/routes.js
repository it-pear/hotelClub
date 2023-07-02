
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        meta: {
          requireAuth: false,
        },
        component: () => import('pages/IndexPage.vue'),
        meta: {
          auth: ['admin']
        },
      },
      { 
        path: '/catalog', 
        meta: {
          requireAuth: false,
        },
        component: () => import('pages/CatalogPage.vue'),
        meta: {
          auth: ['admin']
        },
      },
      { 
        path: '/single/:id', 
        meta: {
          requireAuth: false,
        },
        component: () => import('pages/SinglePage.vue'),
        meta: {
          auth: ['admin']
        },
      },
      { 
        path: '/services', 
        meta: {
          requireAuth: false,
        },
        component: () => import('pages/ServicesPage.vue'),
        meta: {
          auth: ['admin']
        },
      },
      { 
        path: '/about', 
        meta: {
          requireAuth: false,
        },
        component: () => import('pages/AboutPage.vue'),
        meta: {
          auth: ['admin']
        },
      },
    ]
  },

  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { 
        path: '/register', 
        meta: {
          requireAuth: false,
        },
        component: () => import('pages/auth/AuthRegister.vue') 
      },
      { 
        path: '/login', 
        name: 'login',
        meta: {
          requireAuth: false,
        },
        component: () => import('pages/auth/AuthLogin.vue') 
      },
    ]
  },

  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { 
        path: '', 
        meta: {
          requireAuth: true,
        },
        component: () => import('pages/admin/HomePage.vue'), 
      },
      {
        path: 'catalog',
        meta: {
          requireAuth: true,
        },
        children: [
          {
            path: '',
            component: () => import('src/pages/admin/catalog/CatalogPage.vue'),
          },
          {
            path: 'create',
            component: () => import('src/pages/admin/catalog/IdPage.vue'),
          },
          {
            path: ':id',
            component: () => import('src/pages/admin/catalog/IdPage.vue'),
          }
        ]
      },
      {
        path: 'services',
        meta: {
          requireAuth: true,
        },
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
        meta: {
          requireAuth: true,
        },
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
        meta: {
          requireAuth: true,
        },
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
