const sum  = (num) => {
  if (num === 0) {
    return num
  }
  else {
    result = num + sum(num - 1)
  }
  return result
}
console.log(sum(4))
console.log(sum(10))

// sum(4) => 4+3+2+1 = 10
