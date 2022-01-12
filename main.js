import './style.css'

const nextButton = document.querySelector(".btn");
const skybox = document.querySelector('a-sky');

const pictures = [
  '#church',
  '#fort'
];

let index = 0;

nextButton.addEventListener('click', function (event) {
  skybox.setAttribute("src", pictures[(++index) % pictures.length]);
});