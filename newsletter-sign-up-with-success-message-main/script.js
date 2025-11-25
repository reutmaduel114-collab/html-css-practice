const emailInput = document.getElementById("email");
const errorText = document.querySelector(".email_error");
const subscribeBtn = document.querySelector(".subscribe-btn");

const mainContainer = document.querySelector(".main_container");
const successContainer = document.querySelector(".success_container");
const successEmailSpan = document.querySelector(".success-email");
const dismissBtn = document.querySelector(".dismiss-btn");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

emailInput.addEventListener("input", function () {
  const email = emailInput.value.trim();

  if (email === "") {
    emailInput.classList.remove("error");
    errorText.style.visibility = "hidden";
    return;
  }

  if (!isValidEmail(email)) {
    emailInput.classList.add("error");
    errorText.style.visibility = "visible";
  } else {
    emailInput.classList.remove("error");
    errorText.style.visibility = "hidden";
  }
});

// לחיצה על Subscribe
subscribeBtn.addEventListener("click", function () {
  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    emailInput.classList.add("error");
    errorText.style.visibility = "visible";
    return;
  }

  successEmailSpan.textContent = email;
  mainContainer.style.display = "none";
  successContainer.style.display = "flex";
});

// לחיצה על Dismiss  חוזרים למסך הראשי
dismissBtn.addEventListener("click", function () {
  successContainer.style.display = "none";
  mainContainer.style.display = "flex";

  emailInput.value = "";
  emailInput.classList.remove("error");
  errorText.style.visibility = "hidden";
});
