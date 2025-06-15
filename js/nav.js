const controlNav = document.querySelector("#controlNav");
const sideBar = document.querySelector("#sideBar");
const lists = document.querySelectorAll(".list")
const skillCount = document.querySelector("#skillCount")
const fileInput=document.querySelector("#fileInput")

controlNav.onclick = () => {
    sideBar.classList.toggle("translate-x-full");
};

lists.forEach((list) => {
    list.onclick = () => {
        list.classList.toggle("bg-gray-300");
        const countSelected = document.querySelectorAll(".list.bg-gray-300");
        skillCount.innerText = countSelected.length;
    };
});

// document.addEventListener('DOMContentLoaded', () => {
//   const controlNav = document.getElementById('controlNav');
//   controlNav.onclick = () => {
//     // your code here
//     sideBar.classList.toggle("translate-x-0")
//   };
// });