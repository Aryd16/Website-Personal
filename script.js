document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.navbar a');
  const doorLeft = document.querySelector('.door-left');
  const doorRight = document.querySelector('.door-right');

  // Modal Elements
  const modal = document.getElementById('detailModal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const modalImg = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close-btn');

  // Ambil semua experience-item
  const experienceItems = document.querySelectorAll('.experience-item');

  experienceItems.forEach((item) => {
    item.style.cursor = 'pointer'; // cursor pointer biar keliatan klikable

    item.addEventListener('click', () => {
      // Ambil data dari atribut data-*
      const title = item.getAttribute('data-title');
      const description = item.getAttribute('data-description');
      const imageSrc = item.getAttribute('data-image');

      // Set konten modal
      modalTitle.textContent = title;
      modalDesc.textContent = description;
      modalImg.src = imageSrc;
      modalImg.alt = title;

      // Tampilkan modal
      modal.style.display = 'block';
    });
  });

  // Tutup modal jika klik tombol close
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Tutup modal jika klik di luar modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Animasi pintu
  function openDoors() {
    doorLeft.classList.add('open-left');
    doorRight.classList.add('open-right');
  }

  function closeDoors() {
    doorLeft.classList.remove('open-left');
    doorRight.classList.remove('open-right');
  }

  // Tampilkan section sesuai id
  function showSection(id) {
    sections.forEach((section) => {
      if ('#' + section.id === id) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  // Event klik navbar
  links.forEach((link) => {
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

  // Saat load pertama, hide semua section
  sections.forEach((section) => {
    section.classList.remove('active');
  });

  // Efek welcome buka pintu
  setTimeout(() => {
    openDoors();
  }, 2000);
});
