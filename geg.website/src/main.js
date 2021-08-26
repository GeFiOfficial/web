import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import { Toast, Popup, RadioGroup, Radio } from 'vant'
import 'vant/lib/toast/style'
import '@/assets/css/global.scss'
import Tools from '@/assets/js/tools.js'
import BigNumber from 'bignumber.js'
import '@/web3/index.js'
import walletFuc from '@/web3/walletFuc.js'

Vue.prototype.$BigNumber = BigNumber
Vue.prototype.$walletFuc = walletFuc

Vue.use(VueI18n)
Vue.use(Toast)
Vue.use(Tools)
Vue.use(Popup)
Vue.use(RadioGroup)
Vue.use(Radio)

// 将所有 Toast 的展示时长设置为 2000 毫秒
Toast.setDefaultOptions({ duration: 2000, overlay: true })
// 将所有 loading Toast 设置为背景不可点击
Toast.setDefaultOptions('loading', { forbidClick: true, loadingType: 'spinner' })

const lang = localStorage.getItem('lang') || 'en'
const i18n = new VueI18n({
  locale: lang,  // 语言标识
  messages: {
    'zh': require('./i18n/zh.js'),
    'en': require('./i18n/en.js')
  }
})

Vue.prototype.$myI18n = i18n

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
