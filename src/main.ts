import Vue from 'vue'
import App from './App.vue'

// import Category from './model/CateEnum'
// import ItemData from './model/ItemData'
import ActionHelper from './store/ActionHelper'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// let item1 = new ItemData(1, Category.Study, '学习前端很有趣', '可以和我一起学习前端吧',)

// console.log(item1)

let ah = new ActionHelper()
console.log(ah.memoList)