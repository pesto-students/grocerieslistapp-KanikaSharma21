// select the todo-form
const groceryForm = document.querySelector(".add-grocery");
// select the input box
const groceryInput = document.querySelector(".grocery-input");
// select the <ul> with class="todo-items"
const groceryItemsList = document.querySelector(".grocery-items");

const loginUser = JSON.parse(localStorage.getItem("loginUser", JSON.stringify("loginUser")));
//array which stores every todos
let groceryList =[];

let existingGroceryList = getFromLocalStorage();

// add an eventListener on form, and listen for submit event
groceryForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addList(groceryInput.value);
});

// function to add todo
function addList(item) {
  alert("here")
  var existingList=[];
  if (item !== "") {
    const newItem = {
      id: Date.now(),
      name: item,
    };
    // console.log("groc",existingGroceryList);
    if( existingGroceryList!= undefined ){
       existingList = JSON.parse(localStorage.getItem('groceryList'));
        let findIndex = existingList.findIndex(element=>element.userName == loginUser);
        // alert(findIndex);
        existingList[findIndex].groceryList.push(newItem);
        console.log("new",existingList)
    }else{
      existingList = JSON.parse(localStorage.getItem('groceryList'));
      // alert("No")
      let newitem = {
        userName:loginUser,
        groceryList:[newItem]
      }
existingList.push(newitem);

    }
   console.log("final list",existingList)
    addToLocalStorage(existingList);
    groceryInput.value = "";
  }
}

// function to render given todos to screen
function renderTodos(groceryList) {
  groceryItemsList.innerHTML = "";
  console.log("in render",groceryList)

groceryList = groceryList.groceryList;
  // run through each item inside todos
  groceryList.forEach(function (item) {
    const li = document.createElement("li");
    li.setAttribute("class", "item");
    li.setAttribute("data-key", item.id);
    li.innerHTML = ` ${item.name} <button class="delete-button">X</button> `;
    groceryItemsList.append(li);
  });
}

function deleteTodo(id) {
  // filters out the <li> with the id and updates the todos array
  groceryList = groceryList.filter(function (item) {
    // use != not !==, because here types are different. One is number and other is string
    return item.id != id;
  });

  // update the localStorage
  addToLocalStorage(todos);
}

groceryItemsList.addEventListener("click", function (event) {
  if (document.querySelector(".delete-button")) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteTodo(event.target.parentElement.getAttribute("data-key"));
  }
});

// function to add todos to local storage
function addToLocalStorage(groceryList) {
  // alert("here", loginUser);
  localStorage.setItem("groceryList", JSON.stringify(groceryList));
  existingGroceryList =  getFromLocalStorage()
  renderTodos(existingGroceryList);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
  const reference = JSON.parse(localStorage.getItem('groceryList'));
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    groceryList = reference;
    console.log("GL",groceryList)
      const found = groceryList.find(element => element.userName == loginUser);
      console.log(found)
      return found;   
  }
  else{
    return [];
  }
}
