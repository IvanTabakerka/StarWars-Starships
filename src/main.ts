import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import type {Component} from 'vue'

import uiComponents from '@/components/ui/index';

const app = createApp(App)

app.use(router)

uiComponents.forEach((component:Component) => {
    app.component(<string>component.name, component)
})

app.mount('#app')
