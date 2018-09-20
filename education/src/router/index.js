import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/topBar/About'
import Contact from '@/components/topBar/Contact'
import Job from '@/components/topBar/Job'
import Teachers from '@/components/topBar/Teachers'
import Service from '@/components/service/Service'
import Banner from '@/components/common/Banner'
import Mall from '@/components/community/Mall'
import Community from '@/components/community/Community'
import Informations from '@/components/service/Informations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/teachers',
      name: 'Teachers',
      component: Teachers
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/mall',
      name: 'Mall',
      component: Mall
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/information',
      name: 'Informations',
      component: Informations
    }
  ]
})
