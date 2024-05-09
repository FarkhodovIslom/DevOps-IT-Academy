// Loader 
let loaderContainer = document.querySelector(".loader-container");
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var numbers = [3, 4, 5];
var randomIndex = getRandomNumber(0, numbers.length - 1);
var randomNumber = numbers[randomIndex] * 1000;
let loadingTimer = setTimeout(() => {
    loaderContainer.classList.add("loader-closing");
    setTimeout(() => {
      loaderContainer.style.display = "none";
    }, 300)
}, randomNumber)


// Navbar
const menuToggler = document.getElementById("menuToggle");
const navList = document.getElementById("navList");
let isNavlistActive = true;

menuToggler.addEventListener("click", () => {
    navList.classList.toggle("nav_active");
    return;
})


// Swiper js media queries 
window.addEventListener('DOMContentLoaded', function() {
    var swiperContainer = document.querySelector('.swiper-lg');
    var slidesPerView = swiperContainer.getAttribute('slides-per-view');

    function updateSlidesPerView() {
      if (window.innerWidth <= 992) {
        swiperContainer.setAttribute('slides-per-view', '2');
      } else {
        swiperContainer.setAttribute('slides-per-view', slidesPerView);
      }
    }

    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView();
  });

// Input age limitation
function limitLength(element) {
  if (element.value.length > 2) {
    element.value = element.value.slice(0, 2);
  }
} 



// Scroll animation 
const wrappers = document.querySelectorAll(".hiddenLeft, .hiddenRight, .hidden");

window.addEventListener("scroll", checkInnerHeight);
checkInnerHeight();
function checkInnerHeight() {
  const triggerBottom = window.innerHeight / 5 * 5;
  wrappers.forEach((wrapper) => {
    const top = wrapper.getBoundingClientRect().top;

    if (top < triggerBottom) {
      wrapper.classList.add("show");
      wrapper.classList.remove("hidden", "hiddenLeft", "hiddenRight")
    }
  })
}