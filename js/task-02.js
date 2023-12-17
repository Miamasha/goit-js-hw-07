const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

// Напиши скрипт для створення галереї зображень на основі масиву
// об'єктів images для створення елементів <img>, вкладених в <li>. Ти можеш створити й додати
// HTML-елементи, використовуючи document.createElement() і
// elem.append() або шаблонні рядки і elem.insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну
// операцію додавання. Додай мінімальне оформлення галереї
// флексбоксами через CSS класи.

const gallery = document.querySelector(".gallery");
// const markup = images.map((image) => 
// `<li>
//   <img  src="${image.url}"
//         alt="${image.alt}"
//         width="200"/><br>
// </li>`);
// gallery.innerHTML = markup.join(``);

images.forEach(image => {
  const li = document.createElement("li");
  li.innerHTML = `<img  src="${image.url}" alt="${image.alt}" width=200>`;
  gallery.append(li);
})


// const buttons = 
// `<div class="buttons">
//   <button type="button">Back</button>
//   <button type="button">Forward</button>
// </div>`;
// gallery.insertAdjacentHTML("afterend", buttons);


// document.getElementById("br-html").innerHTML = arr.join('<br>');
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".gallery");
// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");
// console.log(markup);
// list.innerHTML = markup;