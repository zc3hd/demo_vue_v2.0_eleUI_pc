import Home from './components/Home.vue'
import Undone from './components/Undone.vue'
import Users from './components/Users.vue'
import Moniter from './components/Moniter.vue'

export default [
  {path:'/user', component:Users},
  {path:'/home', component:Home},
  {path:'/moniter', component:Moniter},
  {path:'/undone', component:Undone},
  // 自动匹配到
  {path:'*', redirect:'/user'}
]