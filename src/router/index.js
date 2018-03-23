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
import Downloads from '@/components/downloads'
import Home from '@/components/home'
import Displayer from '@/components/displayer'
import Benchmark from '@/components/Benchmark'
import SearchUser from '@/components/SearchUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Profil',
      name: 'Profil',
      component: Profil
    },
    {
      path: '/SearchUser',
      name: 'SearchUser',
      component: SearchUser
    },
    {
      path: '/version/id/:id',
      name: 'Displayer',
      component: Displayer
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
      path: '/downloads',
      name: 'Downloads',
      component: Downloads
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
    },
    {
      path: '/benchmark',
      name: 'Benchmark',
      component: Benchmark
    }
  ]
})
