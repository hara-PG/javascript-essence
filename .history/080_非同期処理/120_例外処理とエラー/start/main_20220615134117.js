async function fetchUsers() {
  const response = await fetch("users.json");
  const json = await response.json();
  return json;
}

for (let user of json) {
  console.log(`Im ${user.name}, ${user.age} years old`);
}

fetchUsers();

// try {
//   console.log("start");
//   throw new Error();
//   console.log("end");
// } catch (e) {
//   console.log(e);
// } finally {
//   console.log("bye");
// }
