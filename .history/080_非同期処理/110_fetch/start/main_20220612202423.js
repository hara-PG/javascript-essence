fetch("users.json")
  .then(function (response) {
    console.log(response);
  })
  .then(function (json) {
    console.log(json);
  });
