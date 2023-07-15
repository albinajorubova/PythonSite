//блок с текстом
function createBlock() {
  const divBlock = document.createElement("div");
  divBlock.classList.add("divBlock");

  // Создаем новый блок p
  const P = document.createElement("P");
  divBlock.appendChild(P);
  P.classList.add("block");
  // Создаем input для ввода текста
  var input = document.createElement("input");
  input.type = "text";
  input.classList.add("inputBtn");
  input.name = "TextBlock_TEXT__позиция_text";
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.classList.add("dltBtn");
  deleteButton.onclick = function () {
    divBlock.remove();
  };

  // Создаем кнопку "добавить"
  var button = document.createElement("button");
  button.innerHTML = "Добавить";
  button.onclick = function () {
    // При клике на кнопку добавляем текст в параграф и очищаем поле ввода
    var text = input.value;
    P.innerHTML += text + "";
    input.value = "";

    // Прячем input и button
    input.style.display = "none";
    button.style.display = "none";
  };
  divBlock.appendChild(input);
  divBlock.appendChild(button);
  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(divBlock);
  divBlock.appendChild(deleteButton);
}

//блок с текстом
function createBlock_H1() {
  // const container = document.getElementById("blocks-container");

  const divBlock = document.createElement("div");
  divBlock.classList.add("divBlock");
  // Создаем новый блок h1
  const H1 = document.createElement("h1");
  H1.classList.add("block");
  divBlock.appendChild(H1);
  // Создаем input для ввода текста
  var input = document.createElement("input");
  input.type = "text";
  input.classList.add("inputBtn");
  input.name = "TextBlock_HEADERTEXT_текст_text";
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.classList.add("dltBtn");
  deleteButton.onclick = function () {
    divBlock.remove();
  };

  // Создаем кнопку "добавить"
  var button = document.createElement("button");
  button.innerHTML = "Добавить";
  button.onclick = function () {
    // При клике на кнопку добавляем текст в параграф и очищаем поле ввода
    var text = input.value;
    H1.innerHTML += text + "";
    input.value = "";

    // Прячем input и button
    input.style.display = "none";
    button.style.display = "none";
  };
  divBlock.appendChild(input);
  divBlock.appendChild(button);
  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(divBlock);
  divBlock.appendChild(deleteButton);
}

//добавление блока текст_линия
function createBlock_TextBlock_Line() {
  // blockCount++; // Увеличиваем значение нарастающего числа id

  const divBlock = document.createElement("div");
  divBlock.classList.add("divBlock");
  // Создаем новый блок div
  const block = document.createElement("div");

  block.classList.add("designation"); // Добавляем класс "designation"
  block.classList.add("block");
  divBlock.appendChild(block);
  // Создаем элемент p и добавляем текст
  const P = document.createElement("p");

  // Создаем SVG элемент
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "10");
  svg.setAttribute("height", "81");
  svg.setAttribute("viewBox", "0 0 4 81");
  svg.setAttribute("fill", "none");

  // Создаем path элемент
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M2 2L2 79");
  path.setAttribute("stroke", "white");
  path.setAttribute("stroke-width", "4");
  path.setAttribute("stroke-linecap", "round");
  // Добавляем svg и p в блок
  block.appendChild(svg);
  svg.appendChild(path);
  block.appendChild(P);
  // Создаем input для ввода текста
  var input = document.createElement("input");
  input.type = "text";
  input.classList.add("inputBtn");
  input.name = "TextBlock_QUOTETEXT_код_text";
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.classList.add("dltBtn");
  deleteButton.onclick = function () {
    divBlock.remove();
  };

  // Создаем кнопку "добавить"
  var button = document.createElement("button");
  button.innerHTML = "Добавить";
  button.onclick = function () {
    // При клике на кнопку добавляем текст в параграф и очищаем поле ввода
    var text = input.value;
    P.innerHTML += text + "";
    input.value = "";

    // Прячем input и button
    input.style.display = "none";
    button.style.display = "none";
  };
  divBlock.appendChild(input);
  divBlock.appendChild(button);

  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(divBlock);
  divBlock.appendChild(deleteButton);
}

//добавление блока с кодом
function createBlock_TextBlock_CODE() {
  // blockCount++; // Увеличиваем значение нарастающего числа id
  const divBlock = document.createElement("div");
  divBlock.classList.add("divBlock");

  // Создаем новый блок p
  const P = document.createElement("P");
  divBlock.appendChild(P);
  P.classList.add("block");
  // Создаем новый блок div
  const block = document.createElement("div");
  block.classList.add("example_designation"); // Добавляем класс "designation"
  block.classList.add("block");
  divBlock.appendChild(block);
  block.appendChild(P);
  // Создаем input для ввода текста
  var input = document.createElement("input");
  input.type = "text";
  input.classList.add("inputBtn");
  input.name = "TextBlock_CODE_code_text";
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.classList.add("dltBtn");
  deleteButton.onclick = function () {
    divBlock.remove();
  };

  // Создаем кнопку "добавить"
  var button = document.createElement("button");
  button.innerHTML = "Добавить";
  button.onclick = function () {
    // При клике на кнопку добавляем текст в параграф и очищаем поле ввода
    var text = input.value;
    P.innerHTML += text + "";
    input.value = "";

    // Прячем input и button
    input.style.display = "none";
    button.style.display = "none";
  };
  block.appendChild(input);
  block.appendChild(button);
  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(divBlock);
  divBlock.appendChild(deleteButton);
}

//добавление блока с картинкой
function createBlock_ImageBlock() {
  // Создаем новый блок section
  const section = document.createElement("section");
  section.classList.add("codeExample"); // Добавляем класс "codeExample"
  section.classList.add("block");
  // Создаем элемент img
  const img = document.createElement("img");
  img.src = "./assets/codeEx.png";
  img.alt = "";

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.onclick = function () {
    // При клике на кнопку удаляем блок
    deleteButton.remove();
    section.remove();
  };

  // Добавляем элемент img в блок section
  section.appendChild(img);

  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(section);
  container.appendChild(deleteButton);
}

//добавление hr
function createBlock_hrBlock() {
  // Создаем новый блок hr
  const hr = document.createElement("hr");
  hr.classList.add("block");
  // Создаем кнопку "удалить"
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.onclick = function () {
    // При клике на кнопку удаляем блок
    hr.remove();
    deleteButton.remove();
  };
  // Добавляем новый блок в контейнер

  const container = document.getElementById("blocks-container");
  container.appendChild(hr);
  container.appendChild(deleteButton);
}

function createBlock_ExplanationDesignation() {
  const explanationDesignation = document.createElement("div");
  explanationDesignation.classList.add("explanation_designation");
  explanationDesignation.classList.add("block");

  var input = document.createElement("input");
  input.type = "text";
  input.name = "CalloutBlock_позиция_text";
  input.classList.add("inputBtn");

  var imageInput = document.createElement("input");
  imageInput.type = "file";
  imageInput.name = "CalloutBlock_карт_image";
  imageInput.classList.add("inputBtn");

  const img = document.createElement("img");
  const p = document.createElement("p");

  var button = document.createElement("button");
  button.innerHTML = "Добавить";
  button.onclick = function () {
    var text = input.value;
    p.innerHTML += text + "";
    input.value = "";

    input.style.display = "none";
    imageInput.style.display = "none";
    button.style.display = "none";
  };

  imageInput.addEventListener("change", function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });

  var deleteButton = document.createElement("button");
  deleteButton.classList.add("dltBtn");
  deleteButton.innerHTML = "Удалить";
  deleteButton.onclick = function () {
    deleteButton.remove();
    explanationDesignation.remove();
  };
  explanationDesignation.appendChild(img);
  // explanationDesignation.appendChild(svg);
  explanationDesignation.appendChild(p);

  explanationDesignation.appendChild(imageInput);
  explanationDesignation.appendChild(input);
  explanationDesignation.appendChild(button);

  const container = document.getElementById("blocks-container");
  container.appendChild(explanationDesignation);
  explanationDesignation.appendChild(deleteButton);
}

function hideBtn() {
  var buttons = document.getElementsByClassName("dltBtn");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
}

// function saveInputs() {
//   var inputs = document.querySelectorAll('input[type="text"]');
//   var count = 1;

//   inputs.forEach(function (input) {
//     var name = input.name.split("_");
//     var position = name[2];
//     var type = name[1];
//     var newName = "";

//     if (type === "TEXT" && input.name.includes("_text")) {
//       newName = "TextBlock_TEXT_" + count + "_text";
//     } else if (type === "CODE" && input.name.includes("_text")) {
//       newName = "TextBlock_CODE_" + count + "_text";
//     } else if (type === "CalloutBlock" && input.name.includes("_text")) {
//       newName = "CalloutBlock_" + count + "_text";
//     } else if (type === "CalloutBlock" && input.name.includes("_image")) {
//       newName = "CalloutBlock_" + count + "_image";
//     } else if (type === "TextBlock" && input.name.includes("_HeaderText_")) {
//       newName = "TextBlock_HEADERTEXT_" + count + "_text";
//     } else if (type === "LinkBlock" && input.name.includes("_text")) {
//       newName = "LinkBlock_" + count + "_text";
//     } else if (type === "ImageBlock" && input.name.includes("_image")) {
//       newName = "ImageBlock_" + count + "_image";
//     } else if (type === "TextBlock" && input.name.includes("_QuoteText_")) {
//       newName = "TextBlock_QUOTETEXT_" + count + "_text";
//     } else if (type === "DividerBlock" && input.name.includes("_")) {
//       newName = "DividerBlock_" + count;
//     }

//     input.name = newName;
//     count++;
//   });
// }

function saveInputs() {
  var inputs = document.querySelectorAll('input[type="text"]');
  var count = 1;

  inputs.forEach(function (input) {
    var name = input.name.split("_");
    var type = name[0];
    var newName = "";

    if (type === "TextBlock" && input.name.includes("_позиция_text")) {
      newName = "TextBlock_TEXT_" + count + "_text";
    } else if (type === "TextBlock" && input.name.includes("_code_text")) {
      newName = "TextBlock_CODE_" + count + "_text";
    } else if (
      type === "CalloutBlock" &&
      input.name.includes("_позиция_text")
    ) {
      newName = "CalloutBlock_" + count + "_text";
    } else if (type === "CalloutBlock" && input.name.includes("_карт_image")) {
      newName = "CalloutBlock_" + count + "_image";
    } else if (type === "TextBlock" && input.name.includes("_текст_text")) {
      newName = "TextBlock_HEADERTEXT_" + count + "_text";
    } else if (type === "LinkBlock" && input.name.includes("_позиция_text")) {
      newName = "LinkBlock_" + count + "_text";
    } else if (type === "ImageBlock" && input.name.includes("_позиция_image")) {
      newName = "ImageBlock_" + count + "_image";
    } else if (type === "TextBlock" && input.name.includes("_код_text")) {
      newName = "TextBlock_QUOTETEXT_" + count + "_text";
    } else if (type === "DividerBlock" && input.name.includes("_позиция")) {
      newName = "DividerBlock_" + count;
    }

    input.name = newName;
    count++;
  });
}

//id
function assignIDs() {
  var blocks = document.getElementsByClassName("divBlock");
  var input = document.getElementsByClassName("inputBtn");

  for (var i = 0; i < blocks.length; i++) {
    blocks[i].id = "block-" + (i + 1);
  }
  saveInputs();
  hideBtn();
}

// function getPosition(divBlock) {
//   var parent = divBlock.parentNode;
//   var position = 0;

//   for (var i = 0; i < parent.children.length; i++) {
//     if (parent.children[i] == divBlock) {
//       position = i + 1;
//       break;
//     }
//   }

//   return position;
// }

// function assignIDs() {
//   var blocks = document.getElementsByClassName("blocks_container");

//   for (var i = 0; i < blocks.length; i++) {
//     var position = getPosition(blocks[i]); // Получаем место блока в общем блоке
//     var id = "";

//     if (blocks[i].classList.contains("TextBlock")) {
//       id = "TextBlock_TEXT_" + position + "_text";
//     } else if (blocks[i].classList.contains("CodeBlock")) {
//       id = "TextBlock_CODE_" + position + "_text";
//     } else if (blocks[i].classList.contains("LinkBlock")) {
//       id = "LinkBlock_" + position + "_text";
//     }

//     blocks[i].id = id;
//   }
//   dltBtn();
// }
