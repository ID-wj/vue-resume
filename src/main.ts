import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/mian.scss'
import { create, NButton, NLayout, NLayoutHeader, NLayoutContent, NInput } from 'naive-ui'

const naive = create({
    components: [NButton, NLayout, NLayoutContent, NLayoutHeader, NInput]
})

const app = createApp(App)
app.use(naive)
app.mount('#app')
