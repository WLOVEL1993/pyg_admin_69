import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      redirect:'/welcome',
      component: Home,
      children:[
        {path:'/welcome',name:'welcome',component:Welcome}
      ]
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.path=='/login') return next();
  if(!sessionStorage.getItem('token')) return next('/login');
  next();
})


export default  router