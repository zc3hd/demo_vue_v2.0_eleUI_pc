import Home from './components/Home.vue'
import News from './components/News.vue'
import Users from './components/Users.vue'

export default [
  {path:'/user', component:Users},
  {path:'/home', component:Home},
  {path:'/news', component:News},
  {path:'*', redirect:'/news'}
]