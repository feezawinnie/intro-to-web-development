<<<<<<< HEAD
function changeBackgroundColor(color){
   let section = document.getElementById('coding-journey');
   section.style.backgroundColor = color; 
}

document.getElementById('intro').addEventListener('click', () => changeBackgroundColor ("#2CA02C"));


document.getElementById('react').addEventListener('click', () => changeBackgroundColor ("#FF7F0E"));


document.getElementById('backend').addEventListener('click', () => changeBackgroundColor ("#9467BD"));

const currentYear = new Date().getFullYear();

document.getElementById('year').textContent = currentYear;
=======
function changeBackgroundColor(color) {
  let section = document.getElementById("coding-journey");
  section.style.backgroundColor = color;
}

document
  .getElementById("intro")
  .addEventListener("click", () => changeBackgroundColor("#2CA02C"));

document
  .getElementById("react")
  .addEventListener("click", () => changeBackgroundColor("#FF7F0E"));

document
  .getElementById("backend")
  .addEventListener("click", () => changeBackgroundColor("#9467BD"));
>>>>>>> 9983733d782580a8df3697b513fbb52a20232ce4
