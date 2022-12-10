let mode = document.querySelector(".container-mode");

let sun = document.querySelector(".container-sun");

let moon = document.querySelector(".container-moon");

let container = document.querySelector(".normal");

mode.addEventListener("click", () => {
  moon.classList.toggle("active-mode");

  sun.classList.toggle("Not-active-mode");

  container.classList.toggle("Dark");
});

let up = document.querySelector(".container-top-arrow");

let down = document.querySelector(".container-bottom-arrow");

let containerParent = document.querySelector(".ull");

containerParent.addEventListener("click", (item) => {
  console.log("here");

  if (item.target.classList == "container-bottom-arrow") {
    containerParent.scrollBy(0, 100);
  } else if (item.target.classList == "container-top-arrow") {
    containerParent.scrollBy(0, -100);
  }
});

let left = document.querySelector(".container-bottom-sliders-section-5");

let containerUl = document.querySelector(".container-ul-slider--section5");

left.addEventListener("click", (item) => {
  if (item.target.classList == "container-left-sliders-section-5") {
    containerUl.scrollBy(300, 0);
  } else if (item.target.classList == "container-right-sliders-section-5") {
    containerUl.scrollBy(-300, 0);
  }
});

window.addEventListener("scroll", () => {
  let valueScroll = window.scrollY;

  if (valueScroll >= 57) {
    mode.classList.add("dark");
  } else if (valueScroll > 570) {
    mode.classList.remove("dark");
  } else {
    mode.classList.remove("dark");
  }
});
