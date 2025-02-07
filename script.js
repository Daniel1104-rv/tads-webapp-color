const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

const redInput = document.getElementById("red-input");
const greenInput = document.getElementById("green-input");
const blueInput = document.getElementById("blue-input");

const redValue = document.getElementById("red-value");
const greenValue = document.getElementById("green-value");
const blueValue = document.getElementById("blue-value");

const colorBox = document.getElementById("color-box");
const hexCode = document.getElementById("hex-code");

function updateFromSlider() {
    const r = parseInt(redSlider.value);
    const g = parseInt(greenSlider.value);
    const b = parseInt(blueSlider.value);

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    updateColor(r, g, b);
}

function updateFromInput() {
    const r = Math.min(255, Math.max(0, parseInt(redInput.value) || 0));
    const g = Math.min(255, Math.max(0, parseInt(greenInput.value) || 0));
    const b = Math.min(255, Math.max(0, parseInt(blueInput.value) || 0));

    redSlider.value = r;
    greenSlider.value = g;
    blueSlider.value = b;

    updateColor(r, g, b);
}

function updateColor(r, g, b) {
    redValue.textContent = r;
    greenValue.textContent = g;
    blueValue.textContent = b;

    const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    hexCode.textContent = hex;

    colorBox.style.backgroundColor = hex;
}

redSlider.addEventListener("input", updateFromSlider);
greenSlider.addEventListener("input", updateFromSlider);
blueSlider.addEventListener("input", updateFromSlider);

redInput.addEventListener("input", updateFromInput);
greenInput.addEventListener("input", updateFromInput);
blueInput.addEventListener("input", updateFromInput);

updateFromSlider(); // Inicializa el color al cargar la página
