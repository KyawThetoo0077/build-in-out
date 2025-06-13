// const x=window.prompt("Enter a first number:");
// const y=window.prompt("Enter a second number:");
// const result=parseFloat(x)+parseFloat(y);
// window.alert(`The sum of ${x} and ${y} is ${result}.`);

// const age = window.prompt("Enter your age:");
// const birthYear = new Date().getFullYear() - parseInt(age);
// window.alert(`You were born in ${birthYear}.`);

// const answer = window.confirm("Are you finished your dinner?");

// console.log(answer?"Yes I finished" : "No not yet!");

// console.log(document);

// select elements
// const heading = document.getElementById("heading");
// const textInput = document.getElementById("textInput");
// const btn = document.getElementById("btn");
// const listFruits = document.getElementById("listGroup");

// console.log(listFruits.innerHTML);
// console.log(listFruits.innerText);
// console.log(heading.innerText);
// heading.innerText = "Hello World!";
// console.log(heading.innerText);

// console.log(textInput);
// console.log(btn);

// 2. Set
// function changeTitle(){
//     heading.innerText= textInput.value;
//     // clear the input field
//     textInput.value = "";
// };

// btn.onclick = changeTitle;
// btn.addEventListener("click", changeTitle);

// const paragraphs=document.getElementsByTagName("p");
// const lists=document.getElementsByClassName("list")
// console.log(paragraphs);
// console.log(paragraphs[2]);
// console.log(lists);
// console.log(lists[1].innerText);
// console.log(lists[2].innerHTML);
// const paragraphs=document.querySelectorAll("p");
// const lists=document.querySelectorAll(".list");
const heading=document.querySelector("#heading")

console.log(heading);
console.log(heading.className);
console.log(heading.classList);
console.log(heading.id);
console.log(heading.style);
console.log(heading.style.textAlign);
console.log(heading.style.color);


// console.log(lists);
// console.log(lists[1].innerHTML);
// console.log(lists[2].innerHTML);

