let toFind = [27, 64];
let cubeRootArray = [];
let cubeObj = {};

function findCubeRoot(toFind) {
  toFind.forEach((element) => {
    cubeObj = {};
    let value = Math.cbrt(element);
    let elem = element.toString();
    cubeObj = { elem: elem, value: value };
    cubeRootArray.push(cubeObj);
  });
  cubeObj = {};
  cubeRootArray.forEach((item) => (cubeObj[item.elem] = item.value));
  let cubeRoot = JSON.stringify(cubeObj);
  console.log(cubeRoot);
}

findCubeRoot(toFind);

// userFound = existingUsers.filter((element) => {
  //   if (element.userName == document.getElementById("username").value) {
  //     alert("Your grocer list");
  //     return true;
  //   }
  // });