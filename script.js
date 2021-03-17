"use strict";

const grid = document.getElementById("grid");
const resizeButton = document.querySelector("#resize");
const classicButton = document.querySelector("#classic");
const rainbowButton = document.querySelector("#rainbow")
const bwButton = document.querySelector("#bw")
let size = 16;  // default size
let pixels;

createCanvas(size);
setClassicMode();

resizeButton.addEventListener("click", () => {
    do {
        size = prompt("Enter square grid side length:");
        if (size < 10 || size > 80) {
            alert("Please enter from 10-80 only.");
        }
    } while (size < 10 || size > 80);

    deleteCanvas();
    createCanvas(size);
})

classicButton.addEventListener("click", setClassicMode);
rainbowButton.addEventListener("click", setRainbowMode);
bwButton.addEventListener("click", setBWMode);

function createCanvas(sideLength) {
    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.style.backgroundColor = "rgb(255, 255, 255)";
            grid.appendChild(pixel);
        }
    }
    pixels = document.querySelectorAll(".pixel");
    grid.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
}

function deleteCanvas() {
    pixels.forEach((pixel) => pixel.remove());
}

function setClassicMode() {
    deleteCanvas();
    createCanvas(size);
    pixels.forEach((pixel) => pixel.addEventListener("mouseenter", () => {
        if (pixel.style.backgroundColor == "rgb(255, 255, 255)") {
            pixel.style.backgroundColor = "rgb(210, 210, 210)";
        } else {
            pixel.style.backgroundColor = "rgb(255, 255, 255)";
        }
    }));
}

function setRainbowMode() {
    deleteCanvas();
    createCanvas(size);
    pixels.forEach((pixel) => pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = `rgb(${Math.floor((Math.random() * 256))}, ${Math.floor((Math.random() * 256))}, ${Math.floor((Math.random() * 256))})`;
    }));
}

function setBWMode() {
    deleteCanvas();
    createCanvas(size);
    pixels.forEach((pixel) => pixel.addEventListener("mouseenter", () => {
        let rgbLength = pixel.style.backgroundColor.length;
        let rgbNumbers = pixel.style.backgroundColor.substring(4,rgbLength-1).split(", ");
        console.log(rgbNumbers);
        if (rgbNumbers[0] == 3) {  // if the rgb value is (3, 3, 3), it's reached the darkest possible shade
            pixel.style.backgroundColor = "rgb(255, 255, 255)";
        } else {
            pixel.style.backgroundColor = `rgb(${rgbNumbers[0]-28}, ${rgbNumbers[1]-28}, ${rgbNumbers[2]-28})`;
        }
    }));
}