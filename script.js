function buttonFunc(button){
    alert("Why didn't you listen?!");
}

const buttonA = document.querySelector("#button_A")
const headingA = document.querySelector("#heading_A")

buttonA.addEventListener('click', function(){
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);
    // Set the text inside header with user’s input.
    headingA.textContent = `Hello ${name}` ;
});

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
});

const button1 = document.querySelector("button")
const greeting = document.querySelector("#greeting")

button1.addEventListener('click', function(){
    const name1 = prompt("What is your name?");
    greeting.textContent = `Hello! ${name1}, nice to see you!`;
});