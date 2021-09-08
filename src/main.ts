import { createApp } from 'vue'
import App from './App.vue'
import { create, NButton, NLayout, NLayoutHeader, NLayoutContent } from 'naive-ui'

const naive = create({
    components: [NButton, NLayout, NLayoutContent, NLayoutHeader]
})

const app = createApp(App)
app.use(naive)
app.mount('#app')
