//блок с текстом
function createBlock() {
  const divBlock = document.createElement("div");
  divBlock.classList.add("divBlock");
  divBlock.id = "TextBlock_TEXT_позиция_text";
  // Создаем новый блок p
  const P = document.createElement("P");
  divBlock.appendChild(P);
  P.classList.add("block");
  // Создаем input для ввода текста
  var input = document.createElement("input");
  input.type = "text";
  input.classList.add("inputBtn");
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

    // Удаляем input и button
    divBlock.removeChild(input);
    divBlock.removeChild(button);
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
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.onclick = function () {
    // При клике на кнопку удаляем блок
    // deleteButton.remove();
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

    // Удаляем input и button
    divBlock.removeChild(input);
    divBlock.removeChild(button);
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

  // Создаем новый блок div
  const block = document.createElement("div");

  block.classList.add("designation"); // Добавляем класс "designation"
  block.classList.add("block");
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

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.onclick = function () {
    // При клике на кнопку удаляем блок
    deleteButton.remove();
    block.remove();
  };
  // Добавляем path в svg
  svg.appendChild(path);

  // Создаем элемент p и добавляем текст
  const text = document.createElement("p");
  text.textContent = "текст";

  // Добавляем svg и p в блок
  block.appendChild(svg);
  block.appendChild(text);

  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(block);
  container.appendChild(deleteButton);
}

//добавление блока с кодом
function createBlock_TextBlock_CODE() {
  // blockCount++; // Увеличиваем значение нарастающего числа id

  // Создаем новый блок div
  const block = document.createElement("div");
  block.classList.add("example_designation"); // Добавляем класс "designation"
  block.classList.add("block");
  // Создаем элемент p и добавляем текст
  const text = document.createElement("p");
  text.textContent = 'текст = "Текст" ';

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.onclick = function () {
    // При клике на кнопку удаляем блок
    deleteButton.remove();
    block.remove();
  };
  // Добавляем p в блок
  block.appendChild(text);

  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(block);
  container.appendChild(deleteButton);
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

//текст + картинка
function createBlock_ExplanationDesignation() {
  // Создаем новый блок div с классом "explanation_designation"
  const explanationDesignation = document.createElement("div");
  // explanationDesignation.id = "block-" + blockCount; // Присваиваем уникальный id
  explanationDesignation.classList.add("explanation_designation");
  explanationDesignation.classList.add("block");
  //создаем input
  // Создаем input для ввода текста
  var input = document.createElement("input");
  input.type = "text";
  input.classList.add("inputBtn");

  // Создаем svg элемент
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "22");
  svg.setAttribute("height", "36");
  svg.setAttribute("viewBox", "0 0 11 18");
  svg.setAttribute("fill", "none");

  // Создаем path элементы и задаем атрибуты
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute(
    "d",
    "M5.5 0C2.46766 0 0 2.43465 0 5.42666C0 6.54866 0.344668 7.62666 0.997345 8.54333C1.86999 9.77165 2.33199 11.1943 2.33199 12.65V12.6537H8.66801V12.65C8.66801 11.1943 9.13001 9.77165 10.0063 8.54333C10.6553 7.62666 11 6.54866 11 5.42666C11 2.43465 8.53234 0 5.5 0Z"
  );
  path1.setAttribute("fill", "#FFF598");

  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M8.66755 13.387H2.33154V14.3367H8.66755V13.387Z");
  path2.setAttribute("fill", "#FFF598");

  const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute(
    "d",
    "M2.33154 15.6383C2.33154 16.2543 2.83387 16.7567 3.45354 16.7567H3.95223C4.25654 17.27 4.85054 17.6 5.49955 17.6C6.14856 17.6 6.74255 17.27 7.04689 16.7567H7.54555C8.16522 16.7567 8.66755 16.2543 8.66755 15.6383V15.07H2.33154V15.6383Z"
  );
  path3.setAttribute("fill", "#FFF598");

  // Добавляем path элементы в svg
  svg.appendChild(path1);
  svg.appendChild(path2);
  svg.appendChild(path3);

  // Создаем элемент p с текстом
  const p = document.createElement("p");

  // Создаем кнопку "добавить"
  var button = document.createElement("button");
  button.innerHTML = "Добавить";
  button.onclick = function () {
    // При клике на кнопку добавляем текст в параграф и очищаем поле ввода
    var text = input.value;
    p.innerHTML += text + "";
    input.value = "";

    // Удаляем input и button
    explanationDesignation.removeChild(input);
    explanationDesignation.removeChild(button);
  };

  // Создаем кнопку "удалить"
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.onclick = function () {
    // При клике на кнопку удаляем блок
    deleteButton.remove();
    explanationDesignation.remove();
    // updateBlockIds();
  };

  // Добавляем svg и p элементы в блок explanationDesignation
  explanationDesignation.appendChild(svg);
  explanationDesignation.appendChild(p);
  // Добавляем input и кнопку "добавить" к блоку
  explanationDesignation.appendChild(input);
  explanationDesignation.appendChild(button);
  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(explanationDesignation);
  container.appendChild(deleteButton);
}

// //id
// function assignIDs() {
//   var blocks = document.getElementsByClassName("block");

//   for (var i = 0; i < blocks.length; i++) {
//     blocks[i].id = "block-" + (i + 1);
//   }
// }

function dltBtn() {
  var buttons = document.getElementsByClassName("dltBtn");

  while (buttons.length > 0) {
    buttons[0].parentNode.removeChild(buttons[0]);
  }
}

function getPosition(divBlock) {
  var parent = divBlock.parentNode;
  var position = 0;

  for (var i = 0; i < parent.children.length; i++) {
    if (parent.children[i] == divBlock) {
      position = i + 1;
      break;
    }
  }

  return position;
}

function assignIDs() {
  var blocks = document.getElementsByClassName("blocks_container");

  for (var i = 0; i < blocks.length; i++) {
    var position = getPosition(blocks[i]); // Получаем место блока в общем блоке
    var id = "";

    if (blocks[i].classList.contains("TextBlock")) {
      id = "TextBlock_TEXT_" + position + "_text";
    } else if (blocks[i].classList.contains("CodeBlock")) {
      id = "TextBlock_CODE_" + position + "_text";
    } else if (blocks[i].classList.contains("LinkBlock")) {
      id = "LinkBlock_" + position + "_text";
    }

    blocks[i].id = id;
  }
  dltBtn();
}
