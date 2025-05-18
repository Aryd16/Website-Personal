// Menangani pergantian section dengan smooth dan animasi
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll(".section");
  const doors = document.querySelectorAll(".door");

  function setActiveSection(id) {
    sections.forEach((section) => {
      if (section.id === id) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  // Set awal section About tampil
  setActiveSection("about");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Door open animation
      doors[0].classList.add("door-open-left");
      doors[1].classList.add("door-open-right");

      // Delay ganti halaman 2 detik sesuai animasi
      setTimeout(() => {
        const targetId = link.getAttribute("href").substring(1);
        setActiveSection(targetId);

        // Door tutup kembali
        doors[0].classList.remove("door-open-left");
        doors[1].classList.remove("door-open-right");

      }, 2000);
    });
  });
});
