export default {
  install (Vue) {
    Vue.prototype.$openPage = (item) => { // 跳转外部链接
      window.open(item)
    }
    Vue.prototype.$toFixed = (num, numLength = 6, abs = false) => { // 数字取几位数
      if (isNaN(Number(num))) {
        return Number(0).toFixed(numLength)
      } else {
        const numLength2 = Math.pow(10, numLength) // 取6位
        num = Vue.prototype.$BigNumber(parseInt(Vue.prototype.$BigNumber(num).multipliedBy(numLength2))).dividedBy(numLength2)
        num = abs ? Math.abs(num) : num
        num = isNaN(num) ? Number(0).toFixed(numLength) : num.toFixed(numLength)
        return num
      }
    }
    Vue.prototype.$subString = (str, length = 9) => { // 切割字符串
      str += ''
      return str.substr(0, length) + '***' + str.substring(str.length - length)
    }
    Vue.prototype.$allSettled = (funcArr) => { // 增加Promise.allSettled功能
      return new Promise((resolve) => {
        let sttled = 0
        let result = []
        for (let index = 0; index < funcArr.length; index++) {
          const element = funcArr[index]
          element.then(res => {
            result[index] = {
              status: 'fulfilled',
              value: res
            }
          }).catch(err => {
            result[index] = {
              status: 'rejected',
              reason: err
            }
          }).finally(() => { ++sttled === funcArr.length && resolve(result) })
        }
      })
    }
    Vue.prototype.$openMailbox = (href) => {
      const aTag = document.createElement('a')
      aTag.target = '_blank'
      aTag.href = 'mailto:' + href
      console.log(aTag)
      aTag.click()
    }
  }
}