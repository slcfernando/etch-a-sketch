"use strict";

const grid = document.getElementById("grid");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.textContent = `${i}-${j}`;
        grid.appendChild(pixel);
    }
}