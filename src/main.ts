import './assets/main.css'
import { createApp, h, provide } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './api/config'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import router from './router'

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);


const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

app.use(router)
app.component('VIcons', OhVueIcon)
app.mount('#app')
