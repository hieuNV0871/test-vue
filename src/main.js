import { createApp } from 'vue'
import router from './routes/routes'
import './style.css'
import App from './App.vue'
import i18n from './locales/i18n'

createApp(App)
    .use(router)
    .use(i18n)

    .mount('#app')
