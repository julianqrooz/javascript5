let switcherlis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherlis.forEach((li) => {
  li.addEventListener("click", removeActiveClass);
  li.addEventListener("click", manageImages);
});

function removeActiveClass() {
  switcherlis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImages() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
