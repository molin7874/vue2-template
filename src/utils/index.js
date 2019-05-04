import Vue from 'vue'
// 引用px 转 rem
// import '@/utils/setHtmlFontSize'
import lodash from 'lodash'
import { apis } from './request.js'
const allUtils = Object.assign({}, apis, {lodash})
// 添加$ 标识符指令
Object.keys(allUtils).forEach(k => {
  Vue.prototype['$' + k] = allUtils[k]
})

export default allUtils
