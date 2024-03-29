import testButton from './src/index.vue' // 如果这里报红， 加一个env.d.ts，再去 tsconfig.json 里面这样配置："include": ["packages/**/*.ts", "packages/**/*.d.ts", "packages/**/*.tsx", "packages/**/*.vue", "./*.d.ts"],

// 一定要先给name赋值，这样后面的局部install和全局install方法才能读到同一个name
testButton.name = 'test-button'

// 为组件添加 install 方法，用于按需引入
// 如果想通过CDN方式引入，需要编写install函数
testButton.install = function (Vue: any) {
  // 注册组件
  Vue.component('test-button1', testButton)
}
export default testButton
