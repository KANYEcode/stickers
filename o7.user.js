// ==UserScript==
// @name         Cozy.tv o7 Button
// @namespace    Cozy.tv
// @version      0.0.7
// @description  Bring back the o7 button
// @author       KANYE
// @match        https://cozy.tv/*
// @icon         https://cozy.tv/public/cz_fav_128.png
// @license      MIT
// ==/UserScript==

const o7Button = document.createElement("button");
o7Button.id = "o7Button";
document.body.appendChild(o7Button);
o7Button.textContent = "o7";

o7Button.style.cssText = `
  user-drag: none;
  position: absolute;
  background-color: black;
  color: white;
  border: 2px solid white; /* White border */
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  z-index: 99999;
`;

// Function to clamp a value between a minimum and maximum
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

let offsetX, offsetY;
let isDragging = false;
let isThrowing = false;
let prevX, prevY; // Store the previous position for velocity calculation
let velocityX = 0;
let velocityY = 0;
const friction = 0.9;
const mass = 0.5;

// Set the initial position to the bottom-right corner
const initialX = window.innerWidth - o7Button.offsetWidth;
const initialY = window.innerHeight - o7Button.offsetHeight;
o7Button.style.left = initialX + "px";
o7Button.style.top = initialY + "px";

o7Button.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - o7Button.getBoundingClientRect().left;
  offsetY = e.clientY - o7Button.getBoundingClientRect().top;

  // Remove the cursor style while dragging
  o7Button.style.removeProperty("cursor");

  // Clear any existing velocity
  velocityX = 0;
  velocityY = 0;

  // Clear the throwing flag
  isThrowing = false;

  // Store the initial position
  prevX = e.clientX;
  prevY = e.clientY;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    // Calculate velocity based on the change in position
    velocityX = e.clientX - prevX;
    velocityY = e.clientY - prevY;

    velocityX *= mass;
    velocityY *= mass;

    o7Button.style.left = newX + "px";
    o7Button.style.top = newY + "px";

    // Update the previous position
    prevX = e.clientX;
    prevY = e.clientY;
  }
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    o7Button.style.cursor = "default"; // Set the cursor back to the default cursor

    // Set the throwing flag to initiate the throwing motion
    isThrowing = true;
    animateThrowing();
  }
});

// Function to animate the throwing motion using requestAnimationFrame
function animateThrowing() {
  if (isThrowing) {
    // Apply velocity to the button
    let newX = parseFloat(o7Button.style.left) + velocityX;
    let newY = parseFloat(o7Button.style.top) + velocityY;

    // Check for collisions with the window boundaries
    if (newX < 0 || newX + o7Button.offsetWidth > window.innerWidth) {
      velocityX *= -1; // Reverse the X velocity to bounce
      newX = parseInt(o7Button.style.left) + velocityX; // Adjust newX
    }
    if (newY < 0 || newY + o7Button.offsetHeight > window.innerHeight) {
      velocityY *= -1; // Reverse the Y velocity to bounce
      newY = parseInt(o7Button.style.top) + velocityY; // Adjust newY
    }

    // Update the button's position and make sure it stays within bounds
    o7Button.style.left =
      clamp(newX, 0, window.innerWidth - o7Button.offsetWidth) + "px";
    o7Button.style.top =
      clamp(newY, 0, window.innerHeight - o7Button.offsetHeight) + "px";

    // Apply friction to slow down the button's movement
    velocityX *= friction;
    velocityY *= friction;

    velocityX = Math.abs(velocityX) < 0.01 ? 0 : velocityX;
    velocityY = Math.abs(velocityY) < 0.01 ? 0 : velocityY;

    // Stop the throwing motion when the button comes to a near stop
    if (velocityX === 0 && velocityY === 0) {
      isThrowing = false;
    } else {
      requestAnimationFrame(animateThrowing);
    }
  }
}

o7Button.onclick = () => {
  if (isDragging || isThrowing) return;
  const reactionText = document.createElement("div");
  reactionText.className = "reaction-text";
  reactionText.textContent = "o7";

  // Find the first <video> element on the page
  const videoElement = document.querySelector("video");

  if (videoElement) {
    const videoRect = videoElement.getBoundingClientRect();

    // Set the position to the bottom right corner of the video
    reactionText.style.left = videoRect.right - 40 + "px";
    reactionText.style.top = videoRect.bottom - 20 + "px";
    reactionText.style.rotate = Math.random() * 60 - 30 + "deg";

    // Append the reaction text to the body
    document.body.appendChild(reactionText);

    // Remove the reaction text after the animation
    reactionText.addEventListener("animationend", () => {
      document.body.removeChild(reactionText);
    });
  }
};

// Inject CSS styles
document.head.insertAdjacentHTML(
  "beforeend",
  `
    <style>
      /* Reaction text styles */
      .reaction-text {
        position: absolute;
        color: white;
        font-size: 18px;
        opacity: 1;
        animation: floatUpAndFade 3s ease-out;
      }

      /* Keyframes for animation */
      @keyframes floatUpAndFade {
        0% {
          opacity: 1;
          transform: translate(0, 0) rotate(0deg);
        }
        100% {
          opacity: 0;
          transform: translate(0, -200px) rotate(360deg);
        }
      }
    </style>
  `
);
