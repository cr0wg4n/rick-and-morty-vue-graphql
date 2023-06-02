import './assets/main.css'
import { createApp, h, provide } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './api/config'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import router from './router'
import configureErrorHandling from './setup/configureErrorHandling'
import configureStore from './setup/configureStore'

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})
// Global Error handling 
configureErrorHandling(app)
configureStore(app)

app.directive('fontsize',{
  created: (el, binding, vnode) => {
    console.log(binding.value, 'value')
    console.log(binding.arg, 'arg')
    console.log(binding.modifiers, 'modifiers')
    el.style.fontSize = binding.value + 'px'
  },
  updated: (el, binding, vnode) => {
    el.style.fontSize = binding.value + 'px'
  },
})


app.use(router)
app.component('VIcons', OhVueIcon)
app.mount('#app')
