function strangeCode(s, e) {
  let str = ''

  while (s < e - 1) {
    s += 1
    e -= 1
    if (str === '' || str.slice(-1) === 'b') {
      str += 'a'
    } else {
      str += 'b'
    }
  }
  return str
}
