import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import BlogPage from '../views/BlogPage.vue'
import BlogDetailsPage from '../views/BlogDetailsPage.vue'
import ProjectPage from '../views/ProjectPage.vue'
import ProjectDetailsPage from '../views/ProjectDetailsPage.vue'
import NotFountPage from '../views/NotFountPage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Blog/:pageNumber?',
    name: 'Blog',
    component: BlogPage
  },
  {
    path: '/BlogDetails',
    name: 'BlogDetails',
    component: BlogDetailsPage
  },
  {
    path: '/Project/:pageNumber?',
    name: 'Project',
    component: ProjectPage
  },
  {
    path: '/ProjectDetails',
    name: 'ProjectDetails',
    component: ProjectDetailsPage
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: NotFountPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    }
  }
})

export default router
