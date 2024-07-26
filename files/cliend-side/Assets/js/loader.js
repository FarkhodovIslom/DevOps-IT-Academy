const loaders = [
    "Loading animations",
    document.getElementById("loader-1"),
    document.getElementById("loader-2"),
    document.getElementById("loader-3"),
    document.getElementById("loader-4"),
    document.getElementById("loader-5"),
    document.getElementById("loader-6"),
    document.getElementById("loader-7"),
    document.getElementById("loader-8"),
]
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var randomIndex = getRandomNumber(0, numbers.length - 1);
var randomNumber = numbers[randomIndex];

loaders[randomNumber].classList.remove("d-none");