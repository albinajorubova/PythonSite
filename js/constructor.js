let blockCount = 0;

function createBlock() {
  blockCount++;

  const block = document.createElement("div");
  block.id = "block-" + blockCount;

  const text = document.createTextNode("Блок #" + blockCount);
  block.appendChild(text);

  const container = document.getElementById("blocks-container");
  container.appendChild(block);
}
