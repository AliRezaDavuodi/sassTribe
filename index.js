const dark = document.querySelector(".darkmode");

dark.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  document
    .querySelectorAll("img")
    .forEach((img) => img.classList.toggle("nodark"));
  check();
});

setInterval(() => {
  document.querySelector(".darkmode").classList.toggle("animatedDark");
}, 3000);
