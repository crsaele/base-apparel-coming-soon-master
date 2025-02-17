const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "" || email.value == null) {
    messages.push("Please provide a valid email");
  } else if (!emailRegex.test(email.value)) {
    messages.push("Please provide a valid email");
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
    email.classList.add("error");
    email.style.border = "1px solid red";
    error.style.display = "block";
  } else {
    e.preventDefault();
  }
});
