const clickMeButton = document.querySelector(".btn");
const container = document.querySelector(".container");

clickMeButton.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  container.style.backgroundColor = randomColor;
});
