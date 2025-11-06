// Telugu movies "See More"
document.getElementById("seeMoreTelugu").addEventListener("click", () => {
  document.querySelectorAll("#teluguMovies .card.hidden").forEach(card => {
    card.classList.remove("hidden");
  });
  document.getElementById("seeMoreTelugu").style.display = "none";
});

// English movies "See More"
document.getElementById("seeMoreEnglish").addEventListener("click", () => {
  document.querySelectorAll("#englishMovies .card.hidden").forEach(card => {
    card.classList.remove("hidden");
  });
  document.getElementById("seeMoreEnglish").style.display = "none";
});
// Tamil movies "See More"
document.getElementById("seeMoreTamil").addEventListener("click", () => {
  document.querySelectorAll("#tamilMovies .card.hidden").forEach(card => {
    card.classList.remove("hidden");
  });
  document.getElementById("seeMoreTamil").style.display = "none";
});
// Hindi movies "See More"
document.getElementById("seeMoreHindi").addEventListener("click", () => {
  document.querySelectorAll("#hindiMovies .card.hidden").forEach(card => {
    card.classList.remove("hidden");
  });
  document.getElementById("seeMoreHindi").style.display = "none";
});

// ---------------- LOGIN POPUP ----------------
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".btn1");
  const popup = document.getElementById("loginPopup");
  const closePopup = document.getElementById("closePopup");
  const signInBtn = document.getElementById("signInBtn");
  const createBtn = document.getElementById("createBtn");
  const mainButtons = document.getElementById("mainButtons");
  const signInForm = document.getElementById("signInForm");
  const createForm = document.getElementById("createForm");
  const backBtn = document.getElementById("backBtn");

  // Show popup
  loginBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    resetPopup();
  });

  // Click outside to close
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      resetPopup();
    }
  });

  // Sign In form
  signInBtn.addEventListener("click", () => {
    mainButtons.classList.add("hidden");
    signInForm.classList.remove("hidden");
    backBtn.classList.remove("hidden");
  });

  // Create Account form
  createBtn.addEventListener("click", () => {
    mainButtons.classList.add("hidden");
    createForm.classList.remove("hidden");
    backBtn.classList.remove("hidden");
  });

  // Back button
  backBtn.addEventListener("click", resetPopup);

  function resetPopup() {
    mainButtons.classList.remove("hidden");
    signInForm.classList.add("hidden");
    createForm.classList.add("hidden");
    backBtn.classList.add("hidden");
  }
});
  // Button reference
  const topButton = document.getElementById("backToTop");

  // Scroll detect — show or hide button
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };

  // Click event — scroll to top smoothly
  topButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Check if user already used dark mode before
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      themeToggle.textContent = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.textContent = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
