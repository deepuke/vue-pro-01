import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import './custom.scss'


Vue.config.productionTip = false

new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app')