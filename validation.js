const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "" || email.value == null) {
    messages.push("Valid email required");
  } else if (!emailRegex.test(email.value)) {
    messages.push("valid email required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
    email.classList.add("error");
  } else {
    e.preventDefault();
  }
});
