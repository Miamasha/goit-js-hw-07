// 1. Порахує й виведе в консоль кількість категорій
// в ul#categories, тобто елементів li.item.

// 2. Для кожного елемента li.item у списку ul#categories
// знайде й виведе в консоль текст заголовка елемента
// (тегу <h2>) і кількість елементів у категорії 
// (усіх <li>, вкладених у нього).

const items = document.querySelectorAll(".item")

// 1.
console.log(`Кількість категорій = ${items.length}`)
// console.log(`Кількість категорій = ${document.querySelectorAll(".item").length}`)

// 2.
items.forEach(item => {  
    const itemTitle = item.querySelector("h2").innerHTML;
    const subItems = item.querySelectorAll("ul li");
    console.log(`Категорія: ${itemTitle}; кількість елементів категорії: ${subItems.length}`);
  });

// const itemTitle = document.querySelector("h2").innerHTML;
// console.log(`Категорія: ${itemTitle}`);
// const subUl = document.querySelector(".item ul");
// // console.log(subUl);
// const subItems = subUl.querySelectorAll("li");
// // console.log(subItems);
// console.log(`Кількість елементів у категорії: ${subItems.length}`);


// var arr = ["Яблоко", "Апельсин", "Груша"];
// arr.forEach(function(item, i, arr) {
//     console.log( i + ": " + item + " (массив:" + arr + ")" );
// });

// const mappedCourses = students.map(student => student.courses);
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const markup = technologies
//       .map((technology) => `<li class="list-item">${technology}</li>`)
//       .join("");
