let blockCount = 0;

function createBlock() {
  blockCount++; // Увеличиваем значение нарастающего числа id

  // Создаем новый блок p
  const block = document.createElement("P");
  block.id = "block-" + blockCount; // Присваиваем уникальный id

  block.textContent = "текст";
  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(block);
}

function createBlock_TextBlock_Line() {
  blockCount++; // Увеличиваем значение нарастающего числа id

  // Создаем новый блок div
  const block = document.createElement("div");
  block.id = "block-" + blockCount; // Присваиваем уникальный id
  block.classList.add("designation"); // Добавляем класс "designation"

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
}

function createBlock_TextBlock_CODE() {
  blockCount++; // Увеличиваем значение нарастающего числа id

  // Создаем новый блок div
  const block = document.createElement("div");
  block.id = "block-" + blockCount; // Присваиваем уникальный id
  block.classList.add("example_designation"); // Добавляем класс "designation"

  // Создаем элемент p и добавляем текст
  const text = document.createElement("p");
  text.textContent = 'текст = "Текст" ';

  // Добавляем p в блок
  block.appendChild(text);

  // Добавляем новый блок в контейнер
  const container = document.getElementById("blocks-container");
  container.appendChild(block);
}
