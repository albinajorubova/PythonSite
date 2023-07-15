//блок с текстом
function createBlock() {
  const divBlock = document.createElement("div");
  divBlock.classList.add("divBlock");
  const title = document.createElement("p");
  title.innerHTML = "БЛОК С ТЕКСТОМ - TextBlock_TEXT";

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
    title.remove();
  };

  divBlock.appendChild(input);

  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(title);
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
  const title = document.createElement("p");
  title.innerHTML = "БЛОК С ЗАГОЛОВКОМ - TextBlock_HEADERTEXT";

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
    title.remove();
  };

  divBlock.appendChild(input);
  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(title);
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
  const title = document.createElement("p");
  title.innerHTML = "БЛОК ТЕКСТ ЛИНИЯ - TextBlock_QUOTETEXT";

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
    title.remove();
  };

  divBlock.appendChild(input);

  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(title);
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

  const title = document.createElement("p");
  title.innerHTML = "БЛОК С КОДОМ - TextBlock_CODE";

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
    title.remove();
  };

  block.appendChild(input);
  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(title);
  container.appendChild(divBlock);
  divBlock.appendChild(deleteButton);
}

//добавление блока с картинкой
function createBlock_ImageBlock() {
  // Создаем новый блок section
  const section = document.createElement("section");
  section.classList.add("codeExample"); // Добавляем класс "codeExample"
  section.classList.add("block");

  const title = document.createElement("p");
  title.innerHTML = "БЛОК С КАРТИНКОЙ - ImageBlock";

  // Создаем элемент img
  var imagePreview = document.createElement("img");
  var imageInput = document.createElement("input");
  imageInput.type = "file";
  imageInput.name = "ImageBlock_позиция_image";
  imageInput.classList.add("inputBtn");

  imageInput.addEventListener("change", function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      imagePreview.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.classList.add("dltBtn");
  deleteButton.onclick = function () {
    // При клике на кнопку удаляем блок
    deleteButton.remove();
    title.remove();
    section.remove();
  };

  // Добавляем элемент img в блок section

  section.appendChild(imageInput);
  section.appendChild(imagePreview);
  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(title);
  container.appendChild(section);
  container.appendChild(deleteButton);
}

{
  /* <div class="lessons_designation">
  <div class="nav_lesson">
    <img src="./assets/2basics.svg" alt="" />
    <p>Урок 2. Переменные</p>
  </div>

  <div class="nav_lesson">
    <img src="./assets/2basics.svg" alt="" />
    <p>Урок 2. Переменные</p>
  </div>

  <div class="nav_lesson">
    <img src="./assets/2basics.svg" alt="" />
    <p>Урок 2. Переменные</p>
  </div>
</div>; */
}

//ссылка
function createBlock_link() {
  const divBlock = document.createElement("div");
  divBlock.classList.add("divBlock");
  divBlock.classList.add("lessons_designation");

  const nav_lesson1 = document.createElement("div");
  nav_lesson1.classList.add("nav_lesson");
  divBlock.appendChild(nav_lesson1);

  const nav_lesson2 = document.createElement("div");
  nav_lesson2.classList.add("nav_lesson");
  divBlock.appendChild(nav_lesson2);

  const nav_lesson3 = document.createElement("div");
  nav_lesson3.classList.add("nav_lesson");
  divBlock.appendChild(nav_lesson3);
  const title = document.createElement("p");
  title.innerHTML = "БЛОК С ССЫЛКОЙ - LinkBlock";

  // Создаем новый блок p
  const P = document.createElement("P");
  nav_lesson1.appendChild(P);

  const img1 = document.createElement("img");
  img1.src = "./assets/2basics.svg";
  nav_lesson1.appendChild(img1);

  const img2 = document.createElement("img");
  img2.src = "./assets/2basics.svg";
  nav_lesson2.appendChild(img2);

  const img3 = document.createElement("img");
  img3.src = "./assets/2basics.svg";
  nav_lesson3.appendChild(img3);
  // Создаем input для ввода текста
  var input1 = document.createElement("input");
  input1.type = "text";
  input1.classList.add("inputBtn");
  input1.name = "LinkBlock_позиция_text";

  var input2 = document.createElement("input");
  input2.type = "text";
  input2.classList.add("inputBtn");
  input2.name = "LinkBlock_позиция_text";

  var input3 = document.createElement("input");
  input3.type = "text";
  input3.classList.add("inputBtn");
  input3.name = "LinkBlock_позиция_text";
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.classList.add("dltBtn");
  deleteButton.onclick = function () {
    divBlock.remove();
    title.remove();
  };

  nav_lesson1.appendChild(input1);
  nav_lesson2.appendChild(input2);
  nav_lesson3.appendChild(input3);
  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(title);
  container.appendChild(divBlock);
  divBlock.appendChild(deleteButton);
}

//добавление hr
function createBlock_hrBlock() {
  // Создаем новый блок hr
  const hr = document.createElement("hr");
  hr.classList.add("block");

  const title = document.createElement("p");
  title.innerHTML = "БЛОК hr";

  // Создаем кнопку "удалить"
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Удалить";
  deleteButton.classList.add("dltBtn");
  deleteButton.onclick = function () {
    // При клике на кнопку удаляем блок
    hr.remove();
    deleteButton.remove();
    title.remove();
  };
  // Добавляем новый блок в контейнер

  const container = document.getElementById("blocks-container");
  container.appendChild(title);
  container.appendChild(hr);
  hr.appendChild(deleteButton);
}

function createBlock_ExplanationDesignation() {
  const explanationDesignation = document.createElement("div");
  explanationDesignation.classList.add("explanation_designation");
  explanationDesignation.classList.add("block");

  const title = document.createElement("p");
  title.innerHTML = "БЛОК С ИКОНКОЙ И ТЕКСТОМ - CalloutBlock";

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
    title.remove();
  };
  explanationDesignation.appendChild(img);
  // explanationDesignation.appendChild(svg);
  explanationDesignation.appendChild(p);

  explanationDesignation.appendChild(imageInput);
  explanationDesignation.appendChild(input);

  const container = document.getElementById("blocks-container");
  container.appendChild(title);
  container.appendChild(explanationDesignation);
  explanationDesignation.appendChild(deleteButton);
}

function hideBtn() {
  var buttons = document.getElementsByClassName("dltBtn");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
}

function saveInputs() {
  var inputs = document.querySelectorAll("input");
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
