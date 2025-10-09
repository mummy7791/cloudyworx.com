 // Toggle mobile nav
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });


      const currentPage = window.location.pathname.split("/").pop();
  const navLinksMenu = document.querySelectorAll(".nav-links a");

  navLinksMenu.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });