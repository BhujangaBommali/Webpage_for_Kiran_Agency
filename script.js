const error = document.getElementById("error");

/* -------- LOGIN -------- */
function handleLogin(event) {
  event.preventDefault();

  const U = document.getElementById("ID").value;
  const P = document.getElementById("PD").value;

  if (U === "MA016107" && P === "123456") {
    alert("✅ Login successful!");
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
}

/* ----- FORGOT PASSWORD ----- */
function sendReset(e) {
  e.preventDefault();
  alert("📧 Password reset link sent!");
}

/* -------- REGISTER -------- */
function register(e) {
  e.preventDefault();

  const S = document.getElementById("PD").value;
  const T = document.getElementById("CPD").value;

  if (S !== T) {
    error.style.display = "block";
    return;
  }

  error.style.display = "none";
  alert("🎉 Account created successfully!");
}
