/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Window {
  Vue: any
}

declare global {
  interface ImportMeta {
    env: Record<string, unknown>
  }
}
