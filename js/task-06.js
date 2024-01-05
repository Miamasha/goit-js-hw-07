// Створи функцію createBoxes(amount), яка приймає один 
// параметр — число з інпуту, що зберігає кількість 
// елементів для рендеру. Після натискання на кнопку
// Create функція має створювати стільки <div> елементів,
// скільки вказано в параметрі amount і додавати їх у DOM
// дочірніми елементами для div#boxes, а інпут має очищатися.
// При повторному натисканні на кнопку Create поверх 
// старої колекції має рендеритись нова. Після натискання 
// на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба
// провалідувати значення в input, воно має бути в межах
// від 1 до 100 включно.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від 
// попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/////////////////////My code further:

let amount; 

const input = document.querySelector("input");
input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
  console.log(`Amount = ${amount}`);
});


let boxesContainer = document.querySelector("#boxes")

  
const createBtn = document.querySelector(`[data-create]`)
        .addEventListener(`click`, (event) => {
  if (amount <= 100) {
    boxesContainer.innerHTML = "";
    for (let i=0; i<amount; i++) {
      const box = document.createElement(`div`);
        box.style.width = `${30+i*10}px`;
        box.style.height = `${30+i*10}px`;
        box.style.background = getRandomHexColor();
      boxesContainer.append(box);      
    }
  }
  // else if (input.value = "") {
  //   console.log("Input value  = Null")
  // }
  else{
    console.log('Amount tooooo large!!')
  }  
  input.value = "";
  
});

// function createBoxes(amount) {
//   if (amount <= 100) {
//     boxesContainer.innerHTML = "";
//     for (let i=0; i<amount; i++) {
//       const box = document.createElement(`div`);
//         box.style.width = `${30+i*10}px`;
//         box.style.height = `${30+i*10}px`;
//         box.style.background = getRandomHexColor();
//       boxesContainer.append(box);      
//     }
//   }
//   else{
//     console.log('Amount tooooo large!!')
//   }
//   input.value = "";
// };
// const createBtn = document.querySelector(`[data-create]`)
//         .addEventListener(`click`, createBoxes);

const destroyBtn = document.querySelector(`[data-destroy]`)
        .addEventListener(`click`, (event) => {
          if (boxesContainer.innerHTML != "") {
          boxesContainer.innerHTML = "";
          console.log("DestroyLog")
          } else {
          console.log("Nothing to destroy") }
        });
