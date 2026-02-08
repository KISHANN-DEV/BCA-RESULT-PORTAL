// ================= SEARCH FUNCTION =================
function searchTable() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    const nameCell = row.children[1];
    if (!nameCell) return;

    const text = nameCell.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
}

// ================= OPTIONAL SMOOTH SCROLL =================
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const gender = document.getElementById("gender").value;
  const rollno = Number(document.getElementById("rollno").value);
  const captchaInput = document.getElementById("captchaInput").value.trim();

  const FIXED_CAPTCHA = "7K9P";

  if (username === "") {
    alert("Please enter your name");
    return;
  }

  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Enter valid 10-digit mobile number");
    return;
  }

  if (gender === "") {
    alert("Please select gender");
    return;
  }

  if (rollno < 24090115930001 || rollno > 24090115930069) {
    alert("Roll Number must be between 24090115930001 and 24090115930069");
    return;
  }

  if (captchaInput !== FIXED_CAPTCHA) {
    alert("Captcha does not match");
    return;
  }

  // ✅ SUCCESS → UNLOCK SITE
  document.getElementById("popupOverlay").style.display = "none";
});
