document.addEventListener('DOMContentLoaded', function() {
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

  experienceItems.forEach(item => {
    item.style.cursor = 'pointer'; // biar cursor pointer saat hover

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

  // Tutup modal jika klik tombol close atau di luar modal-content
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // Fungsi buka pintu (animasi)
  function openDoors() {
    doorLeft.classList.add('open-left');
    doorRight.classList.add('open-right');

    // Setelah animasi selesai, hilangkan pintu
    setTimeout(() => {
      document.querySelector('.door-container').style.display = 'none';
    }, 1200);
  }

  // Fungsi untuk menampilkan section yang dipilih
  function showSection(id) {
    sections.forEach(section => {
      if ('#' + section.id === id) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });

    // Update navbar active class
    links.forEach(link => {
      if (link.getAttribute('href') === id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Saat halaman pertama kali dimuat, buka pintu dan tampilkan About
  showSection('#about');
  setTimeout(() => {
    openDoors();
  }, 1500);

  // Event klik navbar
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Buka pintu dulu
      document.querySelector('.door-container').style.display = 'flex';
      doorLeft.classList.remove('open-left');
      doorRight.classList.remove('open-right');

      // Setelah pintu tertutup, ganti section, lalu buka pintu
      setTimeout(() => {
        showSection(link.getAttribute('href'));

        // Buka pintu
        openDoors();
      }, 1000);
    });
  });

});
