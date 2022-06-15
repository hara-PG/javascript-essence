async function fetchUsers() {
  const response = await fetch("users.json");
  if (response.ok) {
    const json = await response.json();
    if (!json.length) {
      throw new NoDataError("no data found");
    }
    return json;
  }
}

class NoDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "NoDataError";
  }
}
async function init() {
  try {
    const users = await fetchUsers();
    for (let user of users) {
      console.log(`Im ${user.name}, ${user.age} years old`);
    }
  } catch (e) {
    if (e instanceof NoDataError) {
      console.error(e);
    } else {
      console.error("ERROR OK");
    }
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
