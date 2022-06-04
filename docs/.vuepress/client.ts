import { defineClientConfig } from '@vuepress/client'
// 增加全局UI组件
// Element Plus
// 图标和组件需要分开引入

export default defineClientConfig({
  enhance({ router }) {
    // 加导航钩子
    router.beforeEach((to) => {
      console.log('before navigation')
    })

    router.afterEach((to) => {
      console.log('after navigation')
    })
  },
  setup() {},
  rootComponents: [],
})
