console.log("loaded");

if (JSON.parse(localStorage.getItem("users")) == null) {
  localStorage.setItem("users", JSON.stringify([]));
}

if (JSON.parse(localStorage.getItem("groceryList")) == null) {
  localStorage.setItem("groceryList", JSON.stringify([]));
}

function checkExistUser() {
  let userFound = false;
  let existingUsers = JSON.parse(localStorage.getItem("users"));

  for (let index = 0; index < existingUsers.length; ++index) {
    if (existingUsers[index].userName == document.getElementById("username").value) {
      localStorage.setItem("loginUser", JSON.stringify(document.getElementById("username").value));
      alert("Your grocery list");
      userFound = true;
      break;
    }
  }

  alert(userFound);
  if (userFound == false) createUser();
  else{
    renderTodos(existingGroceryList);
  }
}

function createUser() {
  console.log("in create user");
  if (typeof Storage !== "undefined") {
    // Store
    let newUser = { userName: document.getElementById("username").value };

    let existingUsers = JSON.parse(localStorage.getItem("users"));
    existingUsers = checkUserlimit(newUser);

    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("loginUser", JSON.stringify(document.getElementById("username").value));
  }
}

function checkUserlimit(newUser) {
  let userLimit = 3;
  let existingUsers = JSON.parse(localStorage.getItem("users"));
  if (existingUsers.length >= userLimit) {
    existingUsers.shift();
  }
  existingUsers.unshift(newUser);
  return existingUsers;
}

function stoppedTyping() {
  if (document.getElementById("username").value === "") {
    document.getElementById("submitButton").disabled = true;
  } else {
    document.getElementById("submitButton").disabled = false;
  }
}
