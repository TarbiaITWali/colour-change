// Array of 50 different colors
const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF5733", "#57FF33", 
  "#5733FF", "#33FFF5", "#F533FF", "#FFA133", "#33FFB8", "#A133FF", 
  "#FF3333", "#FFB833", "#33FF83", "#5733A1", "#F5FF33", "#FF339C", 
  "#33B8FF", "#FF8333", "#FF33B8", "#33FFA1", "#F5FF33", "#5733FF", 
  "#33F5FF", "#FF5733", "#33FF57", "#5733FF", "#33FFF5", "#FF33A1", 
  "#A133FF", "#FFB833", "#FF8333", "#33B8FF", "#F5FF33", "#FF3333", 
  "#FFB833", "#57FF33", "#33FF83", "#33FFB8", "#FF339C", "#5733A1", 
  "#33FFA1", "#3357FF", "#FF33B8", "#FF33A1", "#FF33FF", "#33FFF5"
];

// Function to change the background color
function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.querySelector('.color-box').style.backgroundColor = randomColor;
}

// Add event listeners for spacebar and click
document.body.addEventListener('click', changeColor);
document.body.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    changeColor();
  }
});
