import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'

import App from './App.vue'

import './assets/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)

app.mount('#app')
