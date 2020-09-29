
exports.min = function min(array) {
  let result = 0
  if (arguments.length != 0) {
    if (array.length != 0) {
      result = array.sort((a, b) => a - b)[0]
    }
  }
  return result;
}

exports.max = function max(array) {
  let result = 0
  if (arguments.length != 0) {
    if (array.length != 0) {
      result = array.sort((a, b) => b - a)[0]
    }
  }
  return result;
}

exports.avg = function avg(array) {
  let result = 0
  let sum = 0
  if (arguments.length != 0) {
    if (array.length != 0) {
      for (let i = 0; i < array.length; i++) {
        sum += array[i]
        result = sum / array.length
      }
    }
  }
  return result;
}

