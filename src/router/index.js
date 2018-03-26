/* eslint-disable */
import Vue        from 'vue'
import Router     from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewPost    from '@/components/NewPost'
import EditPost   from '@/components/EditPost'
import Overview   from '@/components/Overview'
import Management from '@/components/Management'
import Changelog  from '@/components/changelog'
import Home       from '@/components/home'
import Benchmark  from '@/components/Benchmark'
// versions
import Displayer  from '@/components/versions/displayer'
import Downloads  from '@/components/versions/downloads'
import Posts      from '@/components/versions/Posts'
// users files
import SearchUser from '@/components/users/SearchUser'
import Viewer     from '@/components/users/viewer'
import Profil     from '@/components/users/profil'

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
      path: '/Profil/:id',
      name: 'Profil',
      component: Viewer
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
