import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth'
import Create from '../views/CreateEvent'
import MosaicView from '../views/MosaicView'
import ExpandedView from '../views/ExpandedView'
import Organizer from '../views/Organizer'
import Edit from '../views/EditEvent'
import UserProfile from '../views/Profile'
import OrganizerProfile from '../views/OrganizerProfile'
import Wishes from '../views/Wishes'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Auth',
  meta: {
    layout: 'no-navbar'
  },
  component: Auth
},
{
  path: '/create',
  name: 'Create',
  component: Create
},
{
  path: '/events',
  name: 'Events',
  meta: {
    appBarVisible: true
  },
  component: MosaicView
},
{
  path: '/expanded',
  name: 'Expanded',
  meta: {
    appBarVisible: true
  },
  component: ExpandedView
},
{
  path: '/organizer',
  name: 'Organizer',
  component: Organizer
},
{
  path: '/edit',
  name: 'Edit',
  component: Edit
},
{
  path: '/profile',
  name: 'Profile',
  component: UserProfile
},
{
  path: '/organizerprofile',
  name: 'OrganizerProfile',
  component: OrganizerProfile
},
{
  path: '/wishes',
  name: 'Wishes',
  component: Wishes
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
