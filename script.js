document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM Loaded");

  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.navbar a');
  const doorLeft = document.querySelector('.door-left');
  const doorRight = document.querySelector('.door-right');

  function openDoors() {
    console.log("Opening doors...");
    doorLeft.classList.add('open-left');
    doorRight.classList.add('open-right');
  }

  function closeDoors() {
    console.log("Closing doors...");
    doorLeft.classList.remove('open-left');
    doorRight.classList.remove('open-right');
  }

  function showSection(id) {
    console.log("Showing section:", id);
    sections.forEach(section => {
      if ('#' + section.id === id) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      closeDoors();
      setTimeout(() => {
        showSection(targetId);
        openDoors();
      }, 800);
    });
  });

  sections.forEach(section => section.classList.remove('active'));

  setTimeout(() => {
    showSection('#about');
    setTimeout(() => {
      openDoors();
    }, 200);
  }, 1000);
});
