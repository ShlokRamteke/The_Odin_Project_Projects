const DEFAULT_COLOUR= '#333333'
const DEFAULT_MODE='colour'
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
colourBtn.onclick = () => setCurrentMode('colour');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
erasorBtn.onclick = () => setCurrentMode('erasor');
clearBtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

let mouseDown =false
document.body.onmousedown = () => (mouseDown=true);
document.body.onmouseup = () => (mouseDown=false);

function changeSize(value){
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function updateSizeValue(value) {
    sizeValue.innerHTML=`${value} x ${value}`;
}

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function clearGrid() {
    grid.innerHTML='';
}

function setupGrid(size) {
    grid.style.gridTemplateColumns= `repreat(${size}, 1fr)`;
    grid.style.gridTemplateRows= `repreat(${size}, 1fr)`;

    for (let i=0; i <size *size ; i++) {
        const gridElement=document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColour);
        gridElement.addEventListener('mousedown', changeColour);
        grid.appendChild(gridElement);
    }
}

function changeColour(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode==='rainbow') {
        const randomR= Math.floor(Math.random() *256)
        const randomG= Math.floor(Math.random()*256)
        const randomB = Math.floor(Math.random()*256)
        e.target.style.backgroundColor=`rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode==='colour') {
        e.target.style.backgroundColor=currentColour;
    } else if (currentMode==='erasor') {
        e.target.style.backgroundColor='#fefefe';
    }
}

function activateButton(newMode){
    if (currentMode==='rainbow') {
        rainbowBtn.classList.remove('active');
    } else if (currentMode==='erasor'){
        erasorBtn.classList.remove('active')
    } else if (currentMode === 'colour') {
        colourBtn.classList.remove('active')
    }

    if (newMode==='rainbow') {
        rainbowBtn.classList.add('active')
    } else if (newMode==='colour') {
        colourBtn.classList.add('active')
    } else if (newMode==='erasor') {
        erasorBtn.classList.add('active')
    }
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE)
    activateButton(DEFAULT_MODE)
}

