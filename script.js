const clicks = document.querySelectorAll(".arrow");

clicks.forEach((each) => {
  each.addEventListener("click", (e) => {
    if (!e.target) return null;
    e.target.parentElement.parentElement.classList.toggle("open");
  });
});
