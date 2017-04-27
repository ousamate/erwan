import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/Reg';
import Login from '@/components/Login';
import Student from '@/components/student/Student';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/reg',
      component: Reg
  },
  {
    path: '/login',
    component: Login
  },
  {
  	path: '/Student',
    component: Student
  }
  ]
})
