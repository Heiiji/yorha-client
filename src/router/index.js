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
import Inventory  from '@/components/inventaire'
import Annonce    from '@/components/annonce'
import YTShadowLive   from '@/components/YTShadowLive'
import Timeline   from '@/components/timeline'
// departments
const Departments = () => import('@/components/departments')
const DTest = () => import('@/components/departments/test')
const DRetD = () => import('@/components/departments/R&D')
const DDev = () => import('@/components/departments/Dev')
const DMarketing = () => import('@/components/departments/Marketing')
const DSupport = () => import('@/components/departments/Support')
const DVirt = () => import('@/components/departments/Virtualisation')
const DRH = () => import('@/components/departments/RH')
const DInfra = () => import('@/components/departments/Infra')
const DWeb = () => import('@/components/departments/Web')
const DLima = () => import('@/components/departments/LIMA')
const DAdministration = () => import('@/components/departments/Administration')
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
      path: '/department/test',
      name: 'Test',
      component: DTest
    },
    {
      path: '/department/R&D',
      name: 'R&D',
      component: DRetD
    },
    {
      path: '/department/Dev',
      name: 'Dev',
      component: DDev
    },
    {
      path: '/department/Marketing',
      name: 'Marketing',
      component: DMarketing
    },
    {
      path: '/department/Support',
      name: 'Support',
      component: DSupport
    },
    {
      path: '/department/Virtualisation',
      name: 'Virtualisation',
      component: DVirt
    },
    {
      path: '/department/Administration',
      name: 'Administration',
      component: DAdministration
    },
    {
      path: '/department/Web',
      name: 'Web',
      component: DWeb
    },
    {
      path: '/department/Infra',
      name: 'Infra',
      component: DInfra
    },
    {
      path: '/department/rh',
      name: 'RH',
      component: DRH
    },
    {
      path: '/department/lima',
      name: 'Lima',
      component: DLima
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
