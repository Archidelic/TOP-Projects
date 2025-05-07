// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red";
paragraph.style.color = "red";

container.appendChild(paragraph);

const headingthree = document.createElement("h3");
headingthree.classList.add("headingthree");
headingthree.textContent = "I’m a blue h3!";
headingthree.style.color = "blue";

container.appendChild(headingthree);

const contentTwo = document.createElement("div");
contentTwo.classList.add("contentTwo");
contentTwo.setAttribute("style", "background: pink;border-color: black");

const headingOne = document.createElement("h1");
headingOne.classList.add("headingOne");
headingOne.textContent = "I'm in a div";
contentTwo.appendChild(headingOne);

const paragraphTwo = document.createElement("p");
paragraphTwo.classList.add("paragraphTwo");
paragraphTwo.textContent = "ME TOO!";
contentTwo.appendChild(paragraphTwo);

container.appendChild(contentTwo);

// the JavaScript file
// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT");
}

//METHOD 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT");
}

const btn = document.querySelector("#btn");

//METHOD 2
btn.onclick = alertFunction;

//METHOD 3
btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
  console.log(e);
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

//buttons is a node list. It look and acts much like an array.
const buttons = document.querySelectorAll("button");

//we use the .forEach method to iterate trough each button
buttons.forEach((button) => {
  //and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
