import type { App } from "vue";
import { createPinia } from 'pinia'

export default function (app: App) {
  console.log('pinia configured')
  const pinia = createPinia()
  app.use(pinia)
  return app
}