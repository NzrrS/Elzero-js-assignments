document.addEventListener("DOMContentLoaded", function () {
  const links = [...document.querySelectorAll("a")];
  links.forEach((ele) => {
    if (ele.classList.contains("open") && ele.textContent === "Elzero") {
      ele.click();
    }
  });
});
