 function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = "0";
}

function calculateResult() {
    const display = document.getElementById('display');
    let result;

    try {
        result = eval(display.value);
        
        // Check for specific values and display corresponding names
        if (result === 2002) {
            display.value = 'Anzija';
        } else if (result === 2018) {
            display.value = 'Dani';
        } else if (result === 2025) {
            display.value = 'Kaveri';
        } else {
            display.value = result; // Display the calculated result for other cases
        }
    } catch (error) {
        display.value = "Error"; // Show error if the calculation fails
    }
}
