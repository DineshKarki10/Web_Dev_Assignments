// Get the DOM elements
const colorBox = document.getElementById('colorBox');
const colorInput = document.getElementById('colorInput');
const resetButton = document.getElementById('resetButton');

// Set the default color
const defaultColor = '#3498db';

// Event listener for color input changes
colorInput.addEventListener('input', function() {
    // Add animation class
    colorBox.classList.add('changing');
    
    // Apply the selected color to the div
    colorBox.style.backgroundColor = this.value;
    
    // Remove animation class after animation completes
    setTimeout(() => {
        colorBox.classList.remove('changing');
    }, 300);
});

// Event listener for reset button
resetButton.addEventListener('click', function() {
    // Add animation class
    colorBox.classList.add('changing');
    
    // Restore the div to its original color
    colorBox.style.backgroundColor = defaultColor;
    colorInput.value = defaultColor;
    
    // Remove animation class after animation completes
    setTimeout(() => {
        colorBox.classList.remove('changing');
    }, 300);
});

// Initialize with default color
colorBox.style.backgroundColor = defaultColor;