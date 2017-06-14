import Home from './components/Home.vue'
import News from './components/News.vue'

export default [
  {path:'/home', component:Home},
  {path:'/news', component:News},
  {path:'*', redirect:'/news'}
]