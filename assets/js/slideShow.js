
const listImages = document.querySelector('.list-imges');
const images = document.querySelectorAll('.list-imges img');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let currentIndex = 0; // Vị trí ảnh hiện tại
const totalImages = images.length;

function updateSlide(position) {
    listImages.style.transform = `translateX(-${position * images[0].offsetWidth}px)`;
}

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1; // Quay lại ảnh cuối cùng nếu đang ở ảnh đầu tiên
    }
    updateSlide(currentIndex);
});

btnNext.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Quay lại ảnh đầu tiên nếu đang ở ảnh cuối
    }
    updateSlide(currentIndex);
});
