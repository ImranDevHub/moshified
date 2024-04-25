const collapsibles = document.querySelectorAll(".collabsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collabsible--expanded");
  })
);
