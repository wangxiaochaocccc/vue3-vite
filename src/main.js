import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import request from './utils/request.js'
import ElementPlus from 'element-plus'
import storage from './utils/storage.js'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.config.globalProperties.$request = request
app.config.globalProperties.$storage = storage
app.use(router).use(ElementPlus).mount('#app')
