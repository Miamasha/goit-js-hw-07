// Напиши скрипт, який під час набору тексту в інпуті #name-input
// (подія input) підставляє його поточне значення в span#name-output
// як ім’я для привітання. Обов’язково очищай значення в інпуті по 
// краях від пробілів. Якщо інпут порожній або містить лише пробіли,
// то замість імені у спан має підставлятися рядок "Anonymous".


const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener(`input`, (event) => {
    nameOutput.textContent = event.currentTarget.value.trim();
    if (nameOutput.textContent === ''){
        nameOutput.textContent = 'Anonymous';
    }
});


// function handleInput(event) {};
// const handleInput = (event) => {};
