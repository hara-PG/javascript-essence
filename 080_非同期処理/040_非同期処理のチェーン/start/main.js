function sleep(callback, val) {
  setTimeout(() => {
    console.log(val++);
    callback(val);
  }, 1000);
}

sleep(function (val) {
  sleep(function (val) {
    sleep(function (val) {}, val);
  }, val);
}, 0);
