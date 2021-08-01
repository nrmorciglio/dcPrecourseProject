


let person = prompt('What is your name?');
if (person) {
    console.log(`Hello, ${person}, Welcome to my very first web project!`)
}
if (person === ("")) {
    person = prompt("Invalid answer, try again!")
} else {
    person = alert(`Hello, ${person}, Welcome to my very first web project!`)
}
