import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

let app = createApp(App)
// app.config.globalProperties.$glob = reactive('prova1')
app.mount('#app')