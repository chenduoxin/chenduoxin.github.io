import Mock from 'mockjs'
import permissionApi from './mockServeData/permission.js'


Mock.mock(/permission\/getMenu/, 'post', permissionApi.getMenu)