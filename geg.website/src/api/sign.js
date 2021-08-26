import md5 from 'md5'

const arrSort = (arr) => {
  return arr.sort((s, t) => {
    if (s < t) return -1
    if (s > t) return 1
    return 0
  })
}

function sign (signStr) { // 获取签名
  const arr = []
  Object.keys(signStr).forEach(key => {
    arr.push(`${key}=${signStr[key]}`)
  })
  let str = arrSort(arr).join('&')
  const key = '034134742b946c02cd2a37fb926f1e563750e27fd18aa74d0b5ab2f384d6ccd584'
  str = md5(str)
  str = str + key
  str = md5(str)
  return str
}

export default sign