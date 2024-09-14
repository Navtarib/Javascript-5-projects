
const password = prompt("Enter your password");

// Check if the password is at least 6 characters long
if (password.length < 6) {
  alert("Password must contain at least 6 characters");
}

// Check if the password contains at least one number
else if (!/[0-9]/.test(password)) {
  alert("Password must contain at least one number");
}
// Check if the password contains at least one lowercase letter
else if (!/[a-z]/.test(password)) {
  alert("Password must contain at least one lowercase letter");
}
// Check if the password contains at least one uppercase letter
else if (!/[A-Z]/.test(password)) {
  alert("Password must contain at least one uppercase letter");
}
// Check if the password matches a specific value (e.g., "pass123")
else if (password === "Pass123") {
  alert("Logged in successfully");
}
// If all conditions are met but the password is not the specific one
else {
  alert("invalid password");
}
