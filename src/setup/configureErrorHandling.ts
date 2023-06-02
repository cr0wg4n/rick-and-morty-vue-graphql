import type { App } from "vue";

export default function (app: App) {
  app.config.errorHandler = (error, node, info) => {
    console.log('error', error)
    console.log('node', node)
    console.log('info', info)
  }
  return app
}