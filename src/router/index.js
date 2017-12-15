import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import MyAppoint from '@/components/myAppoint'
import Appoint1 from '@/components/appoint1'
import Appoint2 from '@/components/appoint2'
import Appoint3 from '@/components/appoint3'
import Detail from '@/components/detail'
import AppointFail from '@/components/appointFail'
import AppointSuccess from '@/components/appointSuccess'
import VehicleInfo from '@/components/vehicleInfo'
import ChangeInfo from '@/components/changeInfo'
import LineInfo from '@/components/lineInfo'
import AppointInfo from '@/components/appointInfo'
import BasicInfo from '@/components/basicInfo'
import Message from '@/components/message'
import PayRecord from '@/components/payRecord'
import PayFinish from '@/components/payFinish'
import PayType from '@/components/payType'
import Evaluate from '@/components/evaluate'
import Register from '@/components/register'
import RegSuccess from '@/components/regSuccess'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
//mode: 'history',
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
