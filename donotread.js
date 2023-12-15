// Искать:
// document.querySelector(`string`) возвращает 1 элемент. Первый найденный с селектором string. Не нашло - возвращает Null
// document.querySelectorAll(`string`)  возвращает все с селектором string. Не нашло - возвращает []
// or
// ul.querySelectorAll(`.ul-item`)
// or
// "название узла-разветвления, с которого хотим поискать".querySelectorAll(`string`)

// Каждый тег становится объектом с кучей свойств.
// "Некоторые атрибуты тегов становятся свойствами объекта"
// "Большинство полезных атрибутов становятся свойствами объектов"
// "Не все атрибуты становятся свойствами"


// magicBtn.addEventListener(`click`, () => {что сделать при нажатии на magicBtn?}):

// Заменить картинку:

// magicBtn.addEventListener(`click`, () => {
//     const imageEl = document.querySelector(`.hero__image`);
//     console.log(`imageEl`) //ссылка на всю картинку со всеми атрибутами
//     console.log(`imageEl.src`) // метод 1 добыть атрибут, ссылка на изначального кота (#62,11; 21:31); только для тех атрибутов, которые пошли как свойство объекта
//     imageEl.src = `new src-link to new photo`;
//     imageEl.alt = `Это уже новая картинка`;
//     console.log(imageEl.getAttribute(`src`));  //метод 2 добыть атрибут, ссылка на нового котенка (#62,11; 28:28); для всех атрибутов
//     imageEl.removeAttribute(`alt`); // будет без подписи
//     imageEl.hasAttribute(`alt`); // false
// })

// // getAttribute;
// // setAtribute;
// // removeAttribute;
// // hasAttribute;
// // data-atributes;

// Заменить текст:

// const heroTitleEl = document.querySelector(`.hero__title`)
// console.log(heroTitleEl.textContent)   //"Я -котёнок" - сам текст заголовка Hero
// heroTitleEl.textContent = `Я - сладкий пирожочек!`;
// console.log(heroTitleEl.textContent)   //"Я - сладкий пирожочек!"
// textContent текстового узла эквивалентен значению атрибута нетекстового тега, у которого есть атрибуты.

// Data-атрибуты - можешь на html-элемент дать произвольный атрибут с произвольным значением, чтоб работать с ним в js
// data-... произвольный набор символов = "значение"

// <div class="actions js-actions"> //"Вы не хотите опираться на классы стилей, потому что они могут поменяться" (#62,11; 32:40) Потому для js нужны другие идентификаторы
//     <button type="button" data-js-action="remove" data-two="2">Удалить</button> // приставка js - чтоб указать, что это не для верстки
//     <button type="button" data-js-action="add">Создать</button>
// </div>
// const actions = document.querySelectorAll(`.js-actions button`) - "внутри класса js-actions любую кнопку" //находит все кнопки
// console.log(actions) // 2 кнопки
// console.log(actions[0]) // 1ya- кнопкa
// console.log(actions[0].dataset) // {js-action: "remove", two: "2"} "интерфейс dataset - это объект всех датаатрибутов детей родительского actions. После тире - используется как ключ"(#62,11; 35:10)
// console.log(actions[0].dataset.action) // remove; ключ по имени атрибута и значение - значение атрибута
// console.log(actions[1].dataset.action) // add; так можно различать дочерние js-action
// console.log(actions[1].getAttribute(`data-js-action`)); // add; (#62,11; 36:04)
// console.log(actions[0].dataset.two); // 2


// повторить самой:
// <input type="text" class="js-input"> //создали поле ввода (#62,11; 39:00) //</input>
// magicBtn.addEventListener(`click`, () => {ввести в инпут текст и при нажатии на magicBtn вывести этот текст в консоль})
// magicBtn.addEventListener(`click`, () => {
//     const inputEl = document.querySelector(`.js-input`);
//     console.log(inputEl) // link for the input with all its attributes
//     console.log(inputEl.value) // у инпута его значение хранится в свойстве value; у текстовых узлов это textContent.Теперь при заполнении инпута и нажатии кнопки значение выведется в консол
//     и наоборот:
//     inputEl.value =`jnkjnk`; // при нажатии на кнопку поле инпута заполнится jnkjnk
// })


// // HTML
// <form class="form" autocomplete="off">
  
//   <input type="text" name="login" placeholder="Login"></input>
//   <input type="password" name="password" placeholder="Password"></input>
//   <button class="btn" type="submit">Register</button>
//   </form>
// // JS var.1
// const registerForm = document.querySelector(".form");
// registerForm.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;  
//     if (login === "" || password === "") {
//         return console.log("Please fill in all the fields!");
//     }
//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   form.reset();
// }
// // JS var.2; "submit" = event; ".form".addEventListener = event.target;
// document.querySelector(".form").addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const login = event.target.elements.login.value;
//   const password = event.target.elements.password.value;  
//     if (login === "" || password === "") {
//         return console.log("Please fill in all the fields!");
//     }
//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.target.reset();
// }
// // JS var.3 ???
// const registerForm = document.querySelector(".form");
// registerForm.addEventListener("submit", handleSubmit);//если неправильно, переписать вид функции
// function handleSubmit(event) {
//   event.preventDefault();
//   const login = registerForm.elements.login.value;
//   const password = registerForm.elements.password.value;  
//     if (login === "" || password === "") {
//         return console.log("Please fill in all the fields!");
//     }
//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   registerForm.reset();
// }