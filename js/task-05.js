// Cкрипт, який змінює колір фону елемента <body> через
// інлайн-стиль по кліку на button.change-color і задає
// це значення кольору текстовим вмістом для span.color


document.querySelector(".change-color").addEventListener(`click`, handleColor);

function handleColor(event){
  event.preventDefault();
  const currentColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = currentColor;
  document.querySelector("span").innerHTML = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}