const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");

console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
    };
var color = getBGColor(pink);

// pink.addEventListener("mouseenter", () => {
//     center.style.background = color;

// });

const magicColorchange = (element, color) => {
return element.addEventListener("mouseenter", () => {
    center.style.background = color;

});

};
magicColorchange(red, getBGColor(red));
magicColorchange(cyan, getBGColor(cyan));
magicColorchange(violet, getBGColor(violet));
magicColorchange(pink, getBGColor(pink));
magicColorchange(orange, getBGColor(orange));