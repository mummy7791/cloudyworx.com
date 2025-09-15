// Hero Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.hero img');
setInterval(() => {
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}, 4000);

// Admin Login
function adminLogin() {
  const adminId = document.getElementById("adminId").value;
  const adminPassword = document.getElementById("adminPassword").value;

  if (adminId === "bhanu7791" && adminPassword === "mummy7791") {
    alert("✅ Admin Login Successful!");
    document.getElementById("adminLoginBox").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("❌ Wrong Admin ID or Password!");
  }
}

// Create Candidate
function createCandidate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const job = document.getElementById("job").value;
  const location = document.getElementById("location").value;
  const packageVal = document.getElementById("package").value;

  if (!name || !email || !phone || !job || !location || !packageVal) {
    alert("All fields are required!");
    return;
  }

  const candidateId = "CW" + Math.floor(Math.random() * 10000);
  const password = Math.random().toString(36).substring(2, 8);

  const candidate = {
    id: candidateId,
    password: password,
    name: name,
    email: email,
    phone: phone,
    job: job,
    location: location,
    package: packageVal
  };

  let candidates = JSON.parse(localStorage.getItem("candidates")) || [];
  candidates.push(candidate);
  localStorage.setItem("candidates", JSON.stringify(candidates));

  alert("Candidate Created! ✅\nID: " + candidateId + "\nPassword: " + password);
}

// Candidate Login
function candidateLogin() {
  const loginId = document.getElementById("loginId").value;
  const loginPassword = document.getElementById("loginPassword").value;

  let candidates = JSON.parse(localStorage.getItem("candidates")) || [];
  const candidate = candidates.find(c => c.id === loginId && c.password === loginPassword);

  if (candidate) {
    const detailsDiv = document.getElementById("candidateDetails");
    detailsDiv.style.display = "block";
    detailsDiv.innerHTML = `
      <h3>Candidate Details</h3>
      <p><b>ID:</b> ${candidate.id}</p>
      <p><b>Name:</b> ${candidate.name}</p>
      <p><b>Email:</b> ${candidate.email}</p>
      <p><b>Phone:</b> ${candidate.phone}</p>
      <p><b>Job:</b> ${candidate.job}</p>
      <p><b>Location:</b> ${candidate.location}</p>
      <p><b>Package:</b> ${candidate.package}</p>
    `;
  } else {
    alert("❌ Invalid Candidate ID or Password!");
  }
}
