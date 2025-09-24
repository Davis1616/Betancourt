// Lightbox
const slides = document.querySelectorAll('.slide img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const img = document.createElement('img');
const closeBtn = document.createElement('span');
const prevBtn = document.createElement('span');
const nextBtn = document.createElement('span');

closeBtn.innerHTML = '&times;';
prevBtn.innerHTML = '&#10094;';
nextBtn.innerHTML = '&#10095;';

closeBtn.classList.add('close');
prevBtn.classList.add('prev');
nextBtn.classList.add('next');

lightbox.appendChild(img);
lightbox.appendChild(closeBtn);
lightbox.appendChild(prevBtn);
lightbox.appendChild(nextBtn);

let currentIndex = 0;

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    img.src = slide.src;
    currentIndex = index;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  img.src = slides[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  img.src = slides[currentIndex].src;
});
