// 1.Обробка відправлення форми form.login-form повинна 
// відбуватися за подією submit.
// 2.Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3.Якщо при сабміті у формі є незаповнені поля, виводь alert з
// попередженням про те, що 'All form fields must be filled in'. Не додавай
// на інпути атрибут required, валідація має відбуватися саме через JS.
// 4.Якщо користувач заповнив усі поля і відправив форму, збери значення 
// полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, 
// а значення — відповідні значення цих інпутів, очищені від пробілів по
// краях. Для доступу до елементів форми використовуй властивість elements.
// 5.При сабміті форми виведи об'єкт із введеними даними в консоль і 
// очисти значення полів форми методом reset.

document.querySelector(".login-form").addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;  
        if (email === "" || password === "") {
            return alert("All form fields must be filled in");
        }
    const data = {Email: email, Password: password};
    console.log(data);
    event.target.reset();
}
