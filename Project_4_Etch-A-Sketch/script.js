const DEFAULT_COLOUR= '#333333'
const DEFAULT_MODE='color'
const DEFAULT_SIZE=16

let currentColour= DEFAULT_COLOUR;
let currentMode =DEFAULT_MODE;
let currentSize= DEFAULT_SIZE;

function setCurrentColour(newColour) {
    currentColour=newColour;
}

function setCurrentMode (newMode) {
    activateButton(newMode);
    currentMode=newMode;
}

function setCurrentSize(newSize) {
    currentSize=newSize;
}

const colourPicker=document.getElementById('colourPicker');
const colourBtn=document.getElementById('colourBtn');
const rainbowBtn=document.getElementById('rainbowBtn');
const erasorBtn=document.getElementById('eraserBtn');
const clearBtn=document.getElementById('clearBtn');
const sizeValue=document.getElementById('sizeValue');
const sizeSlider=document.getElementById('sizeSlider');
const grid=document.getElementById('grid');

colourPicker.oninput = (e)=> setCurrentColor(e.target.value);
colourBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
erasorBtn.onclick = () => setCurrentMode('erasor');
clearBtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

















