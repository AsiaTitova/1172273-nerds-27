var slide = document.querySelector(".slide-wrap");

var slidebuttonone = slide.querySelector(".slide-button-one");
var slidebuttontwo = slide.querySelector(".slide-button-two");
var slidebuttonthree = slide.querySelector(".slide-button-three");

var slideone = slide.querySelector(".slide-one");
var slidetwo = slide.querySelector(".slide-two");
var slidethree = slide.querySelector(".slide-three");

slidebuttonone.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    slideone.classList.toggle("visually-hidden");
    slidetwo.classList.add("visually-hidden");
    slidethree.classList.add("visually-hidden");
});

slidebuttontwo.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    slideone.classList.add("visually-hidden");
    slidetwo.classList.toggle("visually-hidden");
    slidethree.classList.add("visually-hidden");
});

slidebuttonthree.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    slideone.classList.add("visually-hidden");
    slidetwo.classList.add("visually-hidden");
    slidethree.classList.toggle("visually-hidden");
});