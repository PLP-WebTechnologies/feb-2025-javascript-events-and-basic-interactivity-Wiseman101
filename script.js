// Button click
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

// Hover effect
document.getElementById("hoverText").addEventListener("mouseover", () => {
  document.getElementById("hoverText").style.color = "blue";
});

// Keypress detection
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log(`You pressed: ${e.key}`);
});

// Double-click secret
document.getElementById("secretBox").addEventListener("dblclick", () => {
  alert("🎉 Secret unlocked!");
});

// Change button color/text
document.getElementById("changeBtn").addEventListener("click", () => {
  const btn = document.getElementById("changeBtn");
  btn.style.backgroundColor = "purple";
  btn.textContent = "Changed!";
});

// Image gallery logic
const images = [
  "https://placekitten.com/300/200",
  "https://placekitten.com/301/200",
  "https://placekitten.com/302/200"
];
let imgIndex = 0;

document.getElementById("nextImg").addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById("galleryImage").src = images[imgIndex];
});

// Tabs logic
document.querySelectorAll(".tabBtn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach(tab => {
      tab.style.display = "none";
    });
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).style.display = "block";
  });
});

// Form validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    valid = false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    valid = false;
  }

  if (!valid) e.preventDefault();
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", (e) => {
  const feedback = document.getElementById("passwordFeedback");
  if (e.target.value.length < 8) {
    feedback.textContent = "Password too short!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Looking good!";
    feedback.style.color = "green";
  }
});
