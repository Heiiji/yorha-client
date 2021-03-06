/* eslint-disable */
import Vue        from 'vue'
import Router     from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import EditPost   from '@/components/EditPost'
import Management from '@/components/Management'
import Trombi     from '@/components/trombi'
const Calendar  = () => import('@/components/calendar')
const DrHouse  = () => import('@/components/DrHouse')
const Chat  = () => import('@/components/chat')
const TaskManager  = () => import('@/components/TaskManager')
const WorkBoard  = () => import('@/components/WorkBoard')
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
const Displayer   = () => import('@/components/versions/displayer')
const EditV   = () => import('@/components/versions/Edit')
const HistoV   = () => import('@/components/versions/histo')
import Downloads  from '@/components/versions/downloads'
const Overview    = () => import('@/components/versions/Overview')
const Posts       = () => import('@/components/versions/Posts')
const Login       = () => import('@/components/landingPage')
// users files
const SearchUser = () => import('@/components/users/SearchUser')
const Viewer     = () => import('@/components/users/viewer')
const Profil     = () => import('@/components/users/profil')
const DashBoard  = () => import('@/components/users/DashBoard')
const trash      = () => import('@/components/trash')

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/trash',
      name: 'trash',
      component: trash
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/taskmanager/:team',
      name: 'TaskManager',
      component: TaskManager
    },
    {
      path: '/WorkBoard',
      name: 'WorkBoard',
      component: WorkBoard
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/chat/:conv',
      name: 'Chat',
      component: Chat
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
      path: '/DashBoard',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/drhouse',
      name: 'DrHouse',
      component: DrHouse
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
      path: '/version/viewer',
      name: 'Viewer',
      component: HistoV
    },
    {
      path: '/version/id/:id',
      name: 'Displayer',
      component: Displayer
    },
    {
      path: '/version/edit/id/:id',
      name: 'EditV',
      component: EditV
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
      path: '/trombi',
      name: 'Trombi',
      component: Trombi
    },
    {
      path: '/inventaire',
      name: 'Inventory',
      component: Inventory
    }
  ]
})

export default router
