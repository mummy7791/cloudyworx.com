// reception.js

// ---- Reception login ----
// Your desired credentials (from earlier spec):
const RECEPTION_ID = "cloudy@123";
const RECEPTION_PASS = "cloudy@7791";

const loginBox = document.getElementById("receptionLoginBox");
const verifySection = document.getElementById("verificationSection");
const loginBtn = document.getElementById("receptionLoginBtn");

loginBtn.addEventListener("click", () => {
  const id = (document.getElementById("receptionId").value || "").trim();
  const pass = (document.getElementById("receptionPassword").value || "").trim();

  if (id === RECEPTION_ID && pass === RECEPTION_PASS) {
    // subtle success animation
    loginBtn.classList.add("success");
    setTimeout(() => {
      loginBox.classList.add("hidden");
      verifySection.classList.remove("hidden");
    }, 300);
    alert("✅ Reception Login Successful!");
  } else {
    alert("❌ Invalid Reception ID or Password!");
  }
});

// ---- Candidate verification ----
const details = document.getElementById("candidateDetails");
const checkBtn = document.getElementById("checkCandidateBtn");

checkBtn.addEventListener("click", () => {
  const enteredId = (document.getElementById("candidateIdInput").value || "").trim();
  if (!enteredId) {
    alert("Please enter a Candidate ID");
    return;
  }

  // Read candidates created on careers page
  let candidates = [];
  try {
    candidates = JSON.parse(localStorage.getItem("candidates")) || [];
  } catch {
    candidates = [];
  }

  const c = candidates.find(x => (x.id || "").toLowerCase() === enteredId.toLowerCase());

  details.classList.remove("hidden");
  if (c) {
    details.innerHTML = `
      <div class="row"><div class="key">Candidate ID</div><div class="val">${c.id}</div></div>
      <div class="row"><div class="key">Name</div><div class="val">${c.name || "-"}</div></div>
      <div class="row"><div class="key">Email</div><div class="val">${c.email || "-"}</div></div>
      <div class="row"><div class="key">Phone</div><div class="val">${c.phone || "-"}</div></div>
      <div class="row"><div class="key">Job</div><div class="val">${c.job || "-"}</div></div>
      <div class="row"><div class="key">Location</div><div class="val">${c.location || "-"}</div></div>
      <div class="row"><div class="key">Package</div><div class="val">${c.package || "-"}</div></div>
    `;
  } else {
    details.innerHTML = `<div class="row"><div class="key">Result</div><div class="val" style="color:#ff9e9e">❌ Candidate ID not found!</div></div>`;
  }
});

// ---- Tiny parallax tilt on .tilt cards ----
document.querySelectorAll(".tilt").forEach(card => {
  let rect = null;
  const strength = 10; // degrees

  const move = (e) => {
    rect = rect || card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -2;
    const ry = ((x / rect.width) - 0.5) * 2;
    card.style.transform = `perspective(900px) rotateX(${rx * strength}deg) rotateY(${ry * strength}deg)`;
  };

  const leave = () => {
    card.style.transform = "";
    rect = null;
  };

  card.addEventListener("mousemove", move);
  card.addEventListener("mouseleave", leave);
});
