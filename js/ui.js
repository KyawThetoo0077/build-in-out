const root=document.querySelector("#root")
const heading=document.createElement("h1")
heading.innerText="I am Heading!"

heading.classList.add("font-bold","text-3xl", "font-serif");

heading.title="This is heading!";
heading.id="heading";
heading.setAttribute("kt","Kyaw Thet");

const imgDiv=document.createElement("div");
imgDiv.classList.add("flex","gap-3", "mb-4");

const imgOnline=document.createElement("img");
imgOnline.src="./img/download.jpg";
imgOnline.classList.add("h-32")
imgDiv.append(imgOnline)

const imgOnline1=document.createElement("img");
imgOnline1.src="./img/download.jpg";
imgOnline1.classList.add("h-32","mb-5")
imgDiv.append(imgOnline1)

const para=document.createElement("p")
para.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, incidunt. Aliquam distinctio doloribus provident ab. Cumque, atque recusandae adipisci hic, provident quidem perferendis id illo ea inventore odio, exercitationem reprehenderit";


console.log(imgOnline);
root.append(heading);
root.append(imgDiv);
root.append(para)
