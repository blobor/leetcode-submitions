/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let sign = x >= 0 ? 1 : -1
  let result = 0
  x = Math.abs(x)

  while(x > 0) {
    if (result > 0) {
      result *= 10
    }
    result += x % 10
    x = Math.trunc(x / 10)
  }

  // check if reversed integer overflows
  if (result > ~(1<<31)) {
    return 0
  }

  return result * sign
};