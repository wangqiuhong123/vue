import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import VForm from 'vform-builds' // 引入VForm库
import 'element-ui/lib/theme-chalk/index.css'
import 'vform-builds/dist/VFormDesigner.css' // 引入VForm样式
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import '@/icons'
// 挂载插件
import plugins from './plugins'
Vue.use(plugins)

// 全局方法挂载
import { resetForm, parseTime } from '@/utils/utils'
Vue.prototype.resetForm = resetForm
Vue.prototype.parseTime = parseTime

// 全局组件注册
// 分页组件
import Pagination from '@/components/Pagination'
// 自定义表格工具组件
import RightToolbar from '@/components/RightToolbar'
Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)

// 中文版 element-ui
Vue.use(ElementUI)
Vue.use(VForm) // 全局注册VForm(同时注册了v-form-designe、v-form-render等组件)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
