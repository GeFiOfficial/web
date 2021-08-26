import Contract from 'web3-eth-contract'
import Vue from 'vue'
import abierc from './abierc.json'
// import Web3 from 'web3'
const Web3 = window.Web3

// let provider = 'https://http-mainnet.hecochain.com' // 火币
let provider = 'https://bsc-dataseed1.binance.org' // 币安
// if (process.env.NODE_ENV === 'development') { // 开发环境取测试网
//   provider = 'https://http-testnet.hecochain.com'
// }

let web3
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider)
} else {
  // 测试网
  web3 = new Web3(new Web3.providers.HttpProvider(provider))
  Contract.setProvider(provider)
}

Vue.prototype.$web3 = web3
Vue.prototype.$contract = (abi, addresses) => {
  return new Contract(abi, addresses)
}

Vue.prototype.$abierc = abierc

Vue.prototype.$gasLimit = 1.05
Vue.prototype.$usd = 6.77 // 汇率
Vue.prototype.$timer = 10000
