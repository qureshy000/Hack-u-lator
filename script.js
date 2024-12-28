function encodeBase64() {
    const display = document.getElementById('display');
    try {
        const encodedValue = btoa(display.value); // Encode to Base64
        display.value = encodedValue;
    } catch (error) {
        display.value = "Error"; // Show error if encoding fails
    }
}

function decodeBase64() {
    const display = document.getElementById('display');
    try {
        const decodedValue = atob(display.value); // Decode from Base64
        display.value = decodedValue;
    } catch (error) {
        display.value = "Error"; // Show error if decoding fails
    }
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === "0" || display.value === "Error") {
        display.value = value; // Replace 0 or Error with the new value
    } else {
        display.value += value; // Append the value to the display
    }
}

function clearDisplay() {
    document.getElementById('display').value = "0"; // Reset the display
}

function backspace() {
    const display = document.getElementById('display');
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1); // Remove the last character
    } else {
        display.value = "0"; // Reset to 0 if nothing is left
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    let result;

    try {
        result = eval(display.value); // Evaluate the expression
        
        // Check for specific values and display corresponding names
        if (result === 2002) {
            display.value = 'Anzija';
        } else if (result === 2018) {
            display.value = 'Dani';
        } else if (result === 2025) {
            display.value = 'Kaveri';
        } else if (result === 7562) {
         display.value = 'Amal John';
        } else {
            display.value = result; // Display the calculated result for other cases
        }
    } catch (error) {
        display.value = "Error"; // Show error if the calculation fails
    }
}
