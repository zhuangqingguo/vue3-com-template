import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '../dist/style.css'
import hhzkProject from '../dist/vue3-com-template.es.js'

const app = createApp(App)
app.use(hhzkProject)

app.mount('#app')
