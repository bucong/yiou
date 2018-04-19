import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/views/home'
//import MyAppoint from '@/views/myAppoint'
//import Appoint1 from '@/views/appoint1'
//import Appoint2 from '@/views/appoint2'
//import Appoint3 from '@/views/appoint3'
// import Detail from '@/views/detail'
// import AppointFail from '@/views/appointFail'
// import AppointSuccess from '@/views/appointSuccess'
// import VehicleInfo from '@/views/vehicleInfo'
// import ChangeInfo from '@/views/changeInfo'
// import LineInfo from '@/views/lineInfo'
// import AppointInfo from '@/views/appointInfo'
// import BasicInfo from '@/views/basicInfo'
// import Message from '@/views/message'
// import PayRecord from '@/views/payRecord'
// import PayFinish from '@/views/payFinish'
// import PayType from '@/views/payType'
// import Evaluate from '@/views/evaluate'
// import Register from '@/views/register'
// import RegSuccess from '@/views/regSuccess'
// import Error from '@/views/error'
const Home = () => import('@/views/home')
const MyAppoint = () => import('@/views/myAppoint')
const Appoint1 = () => import('@/views/appoint1')
const Appoint2 = () => import('@/views/appoint2')
const Appoint3 = () => import('@/views/appoint3')
const Detail = () => import('@/views/detail')
const AppointFail = () => import('@/views/appointFail')
const AppointSuccess = () => import('@/views/appointSuccess')
const VehicleInfo = () => import('@/views/vehicleInfo')
const ChangeInfo = () => import('@/views/changeInfo')
const LineInfo = () => import('@/views/lineInfo')
const AppointInfo = () => import('@/views/appointInfo')
const BasicInfo = () => import('@/views/basicInfo')
const Message = () => import('@/views/message')
const PayRecord = () => import('@/views/payRecord')
const PayFinish = () => import('@/views/payFinish')
const PayType = () => import('@/views/payType')
const Evaluate = () => import('@/views/evaluate')
const Register = () => import('@/views/register')
const RegSuccess = () => import('@/views/regSuccess')
const Error = () => import('@/views/error')
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/myAppoint',
      name: 'myAppoint',
      component: MyAppoint
    },{
      path: '/appoint1',
      name: 'appoint1',
      component: Appoint1
    },{
      path: '/appoint2',
      name: 'appoint2',
      component: Appoint2
    },{
      path: '/appoint3',
      name: 'appoint3',
      component: Appoint3
    },{
      path: '/detail',
      name: 'detail',
      component: Detail
    },{
      path: '/vehicleInfo',
      name: 'vehicleInfo',
      component: VehicleInfo
    },{
      path: '/basicInfo',
      name: 'basicInfo',
      component: BasicInfo
    },{
      path: '/payRecord',
      name: 'payRecord',
      component: PayRecord
    },{
      path: '/payFinish',
      name: 'payFinish',
      component: PayFinish
    },{
      path: '/payType',
      name: 'payType',
      component: PayType
    },{
      path: '/lineInfo',
      name: 'lineInfo',
      component: LineInfo
    },{
      path: '/message',
      name: 'message',
      component: Message
    },{
      path: '/evaluate',
      name: 'evaluate',
      component: Evaluate
    },{
      path: '/appointFail',
      name: 'appointFail',
      component: AppointFail
    },{
      path: '/appointSuccess',
      name: 'appointSuccess',
      component: AppointSuccess
    },{
      path: '/appointInfo',
      name: 'appointInfo',
      component: AppointInfo
    },{
      path: '/changeInfo',
      name: 'changeInfo',
      component: ChangeInfo
    },{
      path: '/register',
      name: 'register',
      component: Register
    },{
      path: '/regSuccess',
      name: 'regSuccess',
      component: RegSuccess
    },{
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
