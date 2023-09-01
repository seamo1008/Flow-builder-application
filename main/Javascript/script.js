//Code snippet that makes the text box inside steps editable
const stepContent = document.querySelector(".step-content textarea");

stepContent.addEventListener("input", function() {
    const userInput = stepContent.value;
    console.log("User input:", userInput);
});

//Code snippet that creates a new step
// Code snippet that creates a new step
function createNewStep(event) {
    const stepTemplate = event.target.closest('.step');

    const newStep = stepTemplate.cloneNode(true);

    stepTemplate.parentNode.insertBefore(newStep, stepTemplate.nextSibling);

    const textarea = newStep.querySelector("textarea");
    textarea.value = "";
}

const addStepButtons = document.querySelectorAll(".add-step-button");
addStepButtons.forEach(button => {
    button.addEventListener("click", createNewStep);
});



//Code snippet that makes step boxes draggable
let dragged;

document.querySelectorAll('.step').forEach(step => {
    step.addEventListener('dragstart', (e) => {
        dragged = e.target;
        e.dataTransfer.setData('text/plain', 'step');
    });
});

const canvas = document.querySelector('.canvas');
canvas.addEventListener('dragover', (e) => {
    e.preventDefault();
});

canvas.addEventListener('drop', (e) => {
    e.preventDefault();
    if (dragged) {
        const x = e.clientX - canvas.getBoundingClientRect().left - canvas.scrollLeft - 65;
        const y = e.clientY - canvas.getBoundingClientRect().top - canvas.scrollTop + 65;

        dragged.style.position = 'absolute';
        dragged.style.left = x + 'px';
        dragged.style.top = y + 'px';
        dragged = null;
    }
});

