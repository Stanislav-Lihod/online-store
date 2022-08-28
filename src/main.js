import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import store from './store'
import components from './components/ui/index'

const app = createApp(App)

components.forEach(component=>{
  app.component(component.name, component)
})

app
  .use(routes)
  .use(store)
  .mount('#app')
