function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function findIndex(array, callback) {
  var isTruthy;
  for (var i = 0; i < array.length; i++) {
    isTruthy = callback(array[i], i, array);
    if (isTruthy) {
      return i;
    }
  }
  return -1;
}

function countDown(seconds) {
  var countDown = seconds - 1;
  var intervalId = setInterval(function() {
    if (countDown > 0) {
      console.log("Timer: " + countDown);
      countDown--;
    } else {
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, (1000));
}
