// AOS Animation Initialization
AOS.init({
    duration: 1000,
    once: true
});

// Dynamic Greeting

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if(hour < 12){
    greeting.innerText = "🌞 Good Morning";
}
else if(hour < 17){
    greeting.innerText = "☀️ Good Afternoon";
}
else{
    greeting.innerText = "🌙 Good Evening";
}

// Typing Animation

const textArray = [
    "Java Developer",
    "Front-End Developer",
    "Problem Solver",
    "B.Tech CSE Student"
];

let textIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function typeEffect(){

    if(charIndex < textArray[textIndex].length){

        typingText.textContent +=
        textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }
    else{

        setTimeout(eraseEffect,1500);

    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        textArray[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }
    else{

        textIndex++;

        if(textIndex >= textArray.length){
            textIndex = 0;
        }

        setTimeout(typeEffect,300);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if(typingText){
        typeEffect();
    }

});

// Save Last Visit

localStorage.setItem(
    "lastVisit",
    new Date().toLocaleString()
);

console.log(
    "Last Visit:",
    localStorage.getItem("lastVisit")
);