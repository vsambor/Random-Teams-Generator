import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Login from 'public/Login'
import Register from 'public/Register'
import MemberList from 'private/MemberList'
import TeamList from 'private/TeamList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/teams', name: 'Teams', component: TeamList },
    { path: '/members', name: 'Members', component: MemberList }
  ]
})
