var popup = document.querySelector(".modal");

var button = document.querySelector(".write");


button.addEventListener("click", function (evt) {
    event.preventDefault();
    popup.classList.remove("visually-hidden");
    popup.classList.remove("modal-error");
});

var close = popup.querySelector(".modal-close");

close.addEventListener("click", function (evt) {
    event.preventDefault();
    popup.classList.add("visually-hidden");
    
});

var form = popup.querySelector("form");
var fullname = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !comment.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      form.offsetWidth = form.offsetWidth;
      popup.classList.add("modal-error")
  }
});
