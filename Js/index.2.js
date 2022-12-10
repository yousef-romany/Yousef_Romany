let containerEx = document.querySelector("#tech");

let ul1 = document.querySelector(".container-slider-ul");

let ul2 = document.querySelector(".container-expreience");

let containerEx2 = document.querySelector("#Experience");

containerEx2.addEventListener("click" , () => {

    ul1.classList.add("Sorry");

    ul2.classList.add("Good");

});

containerEx.addEventListener("click" , () => {

    ul1.classList.remove("Sorry");

    ul2.classList.remove("Good");

});