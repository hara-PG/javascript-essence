function sleep(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then((data) => {
  console.log(data);
});
