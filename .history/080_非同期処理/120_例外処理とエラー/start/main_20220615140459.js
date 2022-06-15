async function fetchUsers() {
  const response = await fetch("users.json");
  if (response.ok) {
    const json = await response.json();
    if (!json.length) {
      throw new Error("no data found");
    }
    return json;
  }
}

async function init() {
  try {
    const users = await fetchUsers();
    for (let user of users) {
      console.log(`Im ${user.name}, ${user.age} years old`);
    }
  } catch (e) {
    // console.error(e);
  } finally {
    console.log("bye");
  }
}

init();

// try {
//   console.log("start");
//   throw new Error();
//   console.log("end");
// } catch (e) {
//   console.log(e);
// } finally {
//   console.log("bye");
// }
