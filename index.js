let cube = document.querySelector(".cube");
let radioGroup = document.querySelector(".radio-group");
let body = document.querySelector("body");
let currentClass = "";
let colors = ["#159c03", "#8c76b0", "#d93434", "#d97934", "#cc7014", "#95cc14"];

const changeSide = () => {
  let radioSelect = radioGroup.querySelector(":checked");
  let showClass = "show-" + radioSelect.value;

  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;

  //I'm not sure if this is necessary... seems a but much

  // switch (radioSelect.value) {
  //   case "front":
  //     body.style.background = colors[0];
  //     break;
  //   case "back":
  //     body.style.background = colors[1];
  //     break;
  //   case "right":
  //     body.style.background = colors[2];
  //     break;
  //   case "left":
  //     body.style.background = colors[3];
  //     break;
  //   case "top":
  //     body.style.background = colors[4];
  //     break;
  //   case "bottom":
  //     body.style.background = colors[5];
  //     break;
  //   default:
  //     body.style.background = colors[5];
  // }
};

changeSide();

radioGroup.addEventListener("change", changeSide);
