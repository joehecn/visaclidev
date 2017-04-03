'use strict'

const Q_A = ['cty', 'vt', 'cg', 'dl']

export function formatPrice (price) {
  return `${price}.00`
}

export function getWhere (query) {
  let where = ''
  let arr = []
  for (let i = 0; i < 4; i++) {
    let item = Q_A[i]
    if (query[item]) {
      arr.push(`${item}=${encodeURI(query[item])}`)
    }
  }
  if (arr.length > 0) {
    where = `?${arr.join('&')}`
  }
  return where
}
