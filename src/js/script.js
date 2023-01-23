function navegacionFija() {
  const barra = document.querySelector(".burger");
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    console.log(header.getBoundingClientRect());
    if (header.getBoundingClientRect().top < 0) {
      barra.classList.add("hidden");
    } else {
      barra.classList.remove("hidden");
    }
  });
}
navegacionFija();

//# sourceMappingURL=script.js.map
