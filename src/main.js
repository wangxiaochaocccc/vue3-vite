import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import config from './config'

console.log(import.meta.env)
axios.get(config.mockApi + '/login').then((res) => {
  console.log(res)
})
const app = createApp(App)

app.use(router).mount('#app')
