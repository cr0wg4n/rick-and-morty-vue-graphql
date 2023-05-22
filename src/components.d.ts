import OhVueIcon from 'oh-vue-icons'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VIcons: typeof OhVueIcon
  }
}

export {}