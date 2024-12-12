const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentIndex = 0; // Mulai dari elemen pertama

function updateCarousel() {
  items.forEach((item, index) => {
    const relativeIndex = (index - currentIndex + items.length) % items.length;

    if (relativeIndex === 0) {
      // Elemen yang paling besar
      item.style.transform = `translate(0%, -50%) scale(1)`;
      item.style.zIndex = `5`;
    } else if (relativeIndex === 1) {
      item.style.transform = `translate(50%, -50%) scale(0.9)`;
      item.style.zIndex = `4`;
    } else if (relativeIndex === 2) {
      item.style.transform = `translate(100%, -50%) scale(0.8)`;
      item.style.zIndex = `3`;
    } else if (relativeIndex === 3) {
      item.style.transform = `translate(150%, -50%) scale(0.7)`;
      item.style.zIndex = `2`;
    } else if (relativeIndex === 4) {
      item.style.transform = `translate(200%, -50%) scale(0.6)`;
      item.style.zIndex = `1`;
    }
  });

  // Karena infinite loop, tombol tidak perlu dinonaktifkan
}

// Event listener untuk tombol Next
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length; // Geser ke elemen berikutnya (loop kembali ke 0 jika sudah di akhir)
  updateCarousel();
});

// Event listener untuk tombol Previous
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Geser ke elemen sebelumnya (loop ke elemen terakhir jika sudah di awal)
  updateCarousel();
});

// Inisialisasi posisi awal
updateCarousel();

const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');

    function openModal(videoElement) {
      modalVideo.src = videoElement.src;
      modal.classList.add('active');
    }

    function closeModal() {
      modal.classList.remove('active');
      modalVideo.pause();
      modalVideo.src = '';
    }