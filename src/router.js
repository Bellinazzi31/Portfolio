import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import(/* webpackChunkName: "home" */ './pages/home')
const about = () => import(/* webpackChunkName: "about" */ './pages/about')
const projects = () => import(/* webpackChunkName: "projects" */ './pages/projects')
const contact = () => import(/* webpackChunkName: "contact" */ './pages/contact')

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '*', 
        redirect: '/',
      },
      {
        path: '/', 
        name: 'home', 
        component: home, 
        meta: { requiresAuth: true },
      },
      {
        path: '/about', 
        name: 'about', 
        component: about, 
        meta: { requiresAuth: true },
      },
      {
        path: '/projects', 
        name: 'projects', 
        component: projects, 
        meta: { requiresAuth: true },
      },
      {
        path: '/contact', 
        name: 'contact', 
        component: contact, 
        meta: { requiresAuth: true },
      },
    ]
  })
}
