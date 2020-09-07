// profile
// import profilePage from '../pages/profile/ProfilePage.vue'
// import profilePostsPage from '../pages/profile/ProfilePostsPage.vue'

// single pages
import homePage from '../pages/Home.vue'
import notFoundPage from '../pages/NotFound.vue'
// import newsPage from '../pages/news/NewsPage.vue'
import loginPage from '../pages/Login.vue'
import registerPage from '../pages/Register.vue'
import InboxPage from '../pages/Inbox.vue'


// import { routePropResolver } from './util'
import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/inbox',
    name: 'inbox',
    component: InboxPage,
    meta: { title: `${DOMAIN_TITLE} | inbox`, requiresAuth: true }
  },
  // {
  //   path: '/news',
  //   name: 'news',
  //   component: newsPage,
  //   meta: { title: `${DOMAIN_TITLE} | news` },
  //   props: routePropResolver
  // },
  // {
  //   path: '/profile',
  //   component: profilePage,
  //   meta: { isAuth: true, title: `${DOMAIN_TITLE} | profile` },
  //   children: [
  //     {
  //       path: '',
  //       name: 'profile',
  //       component: profilePostsPage
  //     }
  //   ]
  // },
  {
    path: '/register',
    name: 'register',
    component: registerPage,
    meta: { title: `${DOMAIN_TITLE} | login` }
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage,
    meta: { title: `${DOMAIN_TITLE} | login` }
  },
  {
    path: '/',
    name: 'home',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | login`, requiresAuth: true }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
]
