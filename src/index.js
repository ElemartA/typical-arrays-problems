
exports.min = function min(array) {
  if (array != null && array.length != 0) {
    let minNumber = Math.min(...array);
    return minNumber;
  } else {
    return 0;
  }
}

exports.max = function max(array) {
  if (array != null && array.length != 0) {
    let maxNumber = Math.max(...array);
    return maxNumber;
  } else {
    return 0;
  }
}

exports.avg = function avg(array) {
  if (array != null && array.length != 0) {
    let sumElements = 0;
    let average;
    for (let i = 0; i < array.length; i++) {
      sumElements += array[i];
    }
    average = sumElements / array.length;
    return average;
  } else {
    return 0;
  }
}
