const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i].innerHTML);   
}

// parent.children[1].style.color = "orange";
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

// console.log("NODS: ", parent.children);



// const div = document.createElement('div');
// console.log(div);
// div.className = "main";
// div.id = Math.round(Math.random() * 10 + 1);
// div.setAttribute("title", "generated title");
// div.style.backgroundColor = "green";
// div.style.padding = "12px";

// // div.innerText = "Hello js";
// const addText = document.createTextNode("Hello js");
// div.appendChild(addText);

// document.body.appendChild(div);


//create value in DOM------------

function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;   //not good approach
    document.querySelector('.language').appendChild(li);
}
addLanguage("python");
addLanguage("java");


function addOptiLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName)); //good approach
    document.querySelector('.language').appendChild(li);
}
addOptiLanguage('golang');

// Edit -----------------

const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "Mojo"; //not good approach
const newli = document.createElement('li');
newli.textContent = "Mojo";
secondLang.replaceWith(newli);



const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = '<li>TypeScript</li>'



//remove

const lastLang = document.querySelector('li:last-child');
lastLang.remove();
