const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let currentIndex = 0;
const nameDisplay = document.getElementById('nameDisplay');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function displayCurrentName() {
    nameDisplay.textContent = names[currentIndex];
}

displayCurrentName();

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % names.length;
    displayCurrentName();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    displayCurrentName();
});
