let cube = document.querySelector(".cube");
let radioGroup = document.querySelector(".radio-group");
let body = document.querySelector("body");
let currentClass = "";

const changeSide = () => {
  let radioSelect = radioGroup.querySelector(":checked");
  let showClass = "show-" + radioSelect.value;

  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
};

changeSide();

radioGroup.addEventListener("change", changeSide);
