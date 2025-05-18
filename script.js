document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.navbar a');
  const doorLeft = document.querySelector('.door-left');
  const doorRight = document.querySelector('.door-right');

  function openDoors() {
    doorLeft.classList.add('open-left');
    doorRight.classList.add('open-right');
  }

  function closeDoors() {
    doorLeft.classList.remove('open-left');
    doorRight.classList.remove('open-right');
  }

  function showSection(id) {
    sections.forEach(section => {
      if ('#' + section.id === id) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');

      closeDoors();

      setTimeout(() => {
        showSection(targetId);
        openDoors();
      }, 800);
    });
  });

  // Reset state
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Tampilkan "about" di awal setelah delay
  setTimeout(() => {
    showSection('#about');
    setTimeout(() => {
      openDoors();
    }, 100);
  }, 1000);
});
