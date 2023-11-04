// Function to change the background color
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

// Add an onclick event to the entire document
document.onclick = changeBackgroundColor;
