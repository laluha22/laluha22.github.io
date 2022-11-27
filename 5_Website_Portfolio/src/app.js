const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

const button = document.querySelector("button");
const h4El = document.querySelector("h4");
const bgEl = document.querySelector("footer");
// const hexColorEl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", () => {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8).toUpperCase();
  // for(i=0; i<6; i++){
  //   const number = Math.floor(Math.random()*hexColorEl.length);
  //   color += hexColorEl[number];
  // }
  // console.log(color)
  bgEl.style.backgroundColor = color;
  h4El.innerText = color;
});
Footer
