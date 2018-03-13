import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import Overview from '@/components/Overview'
import Account from '@/components/account'
import Management from '@/components/Management'
import Profil from '@/components/profil'
import Changelog from '@/components/changelog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Profil',
      name: 'Profil',
      component: Profil
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/login',
      name: 'Account',
      component: Account
    },
    {
      path: '/management',
      name: 'Management',
      component: Management
    },
    {
      path: '/changelog',
      name: 'Changelog',
      component: Changelog
    }
  ]
})
