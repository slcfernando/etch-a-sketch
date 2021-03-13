"use strict";

const grid = document.getElementById("grid");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.textContent = `${i}-${j}`;
        pixel.style.backgroundColor = "rgb(255, 255, 255)";
        grid.appendChild(pixel);
    }
}

let pixels = document.querySelectorAll(".pixel");
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", () => {
        console.log(pixel.style.backgroundColor);
        if (pixel.style.backgroundColor == "rgb(255, 255, 255)") {
            pixel.style.backgroundColor = "rgb(210, 210, 210)";
        } else {
            pixel.style.backgroundColor = "rgb(255, 255, 255)";
        }
    })
})