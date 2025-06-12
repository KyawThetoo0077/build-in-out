const result = document.getElementById("result");
const storeBtn = document.getElementById("storeBtn");
const clearBtn = document.getElementById("clearBtn");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calcBtn = document.getElementById("calcBtn");
const recordList = document.getElementById("recordList");

// function to display the result
const calculateArea = (w,b) => w*b;

// event
calcBtn.onclick = () => {
    const w=width.valueAsNumber;
    const b=breadth.valueAsNumber;
    const area = calculateArea(w,b);
    result.innerText =`${w} ft * ${b}ft = ${area} sqft`;
    // clear input fields
    width.value = "";
    breadth.value = "";
};
// clear result
clearBtn.onclick = () => {
    result.innerText = "";
};
// store result
storeBtn.onclick=() => {
    recordList.innerHTML+=`<li>${result.innerText}<li>`;
    result.innerText = "";

};
