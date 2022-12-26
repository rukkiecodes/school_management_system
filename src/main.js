/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import router from './router/index'
import store from './store'
import "v-calendar/dist/style.css";
import VCalendar from "v-calendar";

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.use(store)
app.use(VCalendar, {})
app.mount('#app')
