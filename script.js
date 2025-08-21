//your JS code here. If required.


window.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");

  // Check if credentials already saved
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  }

  // Handle form submit
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) return;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      // Save credentials
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "block";
    } else {
      // Remove credentials if unchecked
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }

    // Clear inputs
    usernameInput.value = "";
    passwordInput.value = "";
    checkbox.checked = false;
  });

  // Handle existing user login
  existingBtn.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      alert(`Logged in as ${savedUser}`);
    }
  });
});
