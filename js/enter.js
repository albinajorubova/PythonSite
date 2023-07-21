const wrapper = document.querySelector(".wrapper");
const mainInfo = document.querySelector(".mainInfo");
const signInBtn = document.querySelector(".enter");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
signInBtn.addEventListener("click", () => {
  wrapper.classList.add("active");
  header.classList.add("activet");
  mainInfo.classList.add("noactive");
  footer.classList.add("noactive");
});
