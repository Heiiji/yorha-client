/* eslint-disable */
import Vue        from 'vue'
import Router     from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewPost    from '@/components/NewPost'
import EditPost   from '@/components/EditPost'
import Overview   from '@/components/Overview'
import Management from '@/components/Management'
const Changelog   = () => import('@/components/changelog')
const Home        = () => import('@/components/home')
const Mattermost  = () => import('@/components/mattermost')
const Departments = () => import('@/components/departments')
import Inventory  from '@/components/inventaire'
import Annonce    from '@/components/annonce'
import YTShadowLive   from '@/components/YTShadowLive'
import Timeline   from '@/components/timeline'
// versions
import Displayer  from '@/components/versions/displayer'
import Downloads  from '@/components/versions/downloads'
const Posts       = () => import('@/components/versions/Posts')
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
      path: '/department',
      name: 'Department',
      component: Departments
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
      path: '/annonces/id/:id',
      name: 'Annonce',
      component: Annonce
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
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
      path: '/document/YTShadowLive/:id',
      name: 'YTShadowLive',
      component: YTShadowLive
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
      path: '/inventaire',
      name: 'Inventory',
      component: Inventory
    },
    {
      path: '/changelog',
      name: 'Changelog',
      component: Changelog
    },
    {
      path: '/mattermost',
      name: 'mattermost',
      component: Mattermost
    }
  ]
})
