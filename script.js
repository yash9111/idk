const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const screenWidth = window.outerWidth;
const screenHeight = window.outerHeight;

noButton.addEventListener("mouseover", () => {
  moveButtonRandomly();
});

noButton.addEventListener("click", () => {
  moveButtonRandomly();
});

function moveButtonRandomly() {
  const randomX = Math.random() * (screenWidth - noButton.offsetWidth);
  const randomY = Math.random() * (screenHeight - noButton.offsetHeight);
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

const animation = document.getElementById("animation");

// Function to reset the GIF animation
function resetAnimation() {
  const animationImage = new Image();
  animationImage.src = animation.src;
  animationImage.onload = () => {
    animation.src = animationImage.src; // Replace image with loaded version
  };
}

// Call resetAnimation initially to ensure continuous looping
resetAnimation();

// Reset the animation and hide buttons when the Yes button is clicked
yesButton.addEventListener("click", () => {
  animation.src = "ani2.gif";
  headText.textContent = "I Knew it, Love you too meri jaan 😘";
  resetAnimation(); // Start the new GIF's animation loop
  
  // Hide buttons
  yesButton.style.display = "none";
  noButton.style.display = "none";
});
