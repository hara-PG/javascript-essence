// fetch("users.json")
//   .then(function (response) {
//     // console.log(response);
//     return response.json();
//   })
//   .then(function (json) {
//     // console.log(json);
//     for (let user of json) {
//       console.log(`I'm ${user.name}, ${user.age}`);
//     }
//   });

async function fetchUsers() {
  let response = await fetch("users.json");
  let json = await response.json();
  for (let user of json) {
    console.log(`I'm ${user.name}, ${user.age}`);
  }
}

fetchUsers();
