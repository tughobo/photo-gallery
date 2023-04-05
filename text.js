// Get all the gallery images
const galleryImages = document.querySelectorAll('.gallery-image');

// Create an array to store the image URLs
const imageUrls = ['./images/img1.jpg', './images/img2.jpg', './images/img3.jpg', './images/img4.jpg', './images/img5.jpg', './images/img6.jpg', './images/img7.jpg', './images/img8.jpg'];

// Create variables to keep track of current image index and popup window
let currentImageIndex;
let imgWindow;

// Loop through each gallery image and add a click event listener
galleryImages.forEach((galleryImage, index) => {
  galleryImage.addEventListener('click', () => {
    currentImageIndex = index;
    openImagePopup();
  });
});

// Function to open the image popup window
function openImagePopup() {
  // Create a div element for the popup window
  imgWindow = document.createElement('div');
  imgWindow.classList.add('img-window');

  // Create an img element for the image
  const img = document.createElement('img');
  img.src = imageUrls[currentImageIndex];

  // Create next and previous buttons
  const nextBtn = document.createElement('div');
  nextBtn.textContent = 'Next';
  nextBtn.classList.add('img-btn-next');
  const prevBtn = document.createElement('div');
  prevBtn.textContent = 'Prev';
  prevBtn.classList.add('img-btn-prev');

  // Add event listeners to next and previous buttons
  nextBtn.addEventListener('click', showNextImage);
  prevBtn.addEventListener('click', showPrevImage);

  // Append the elements to the popup window
  imgWindow.appendChild(img);
  imgWindow.appendChild(nextBtn);
  imgWindow.appendChild(prevBtn);
  document.body.appendChild(imgWindow);
}

// Function to show the next image
function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex === imageUrls.length) {
    currentImageIndex = 0;
  }
  const img = document.querySelector('.img-window img');
  img.src = imageUrls[currentImageIndex];
}

// Function to show the previous image
function showPrevImage() {
  currentImageIndex--;
  if (currentImageIndex === -1) {
    currentImageIndex = imageUrls.length - 1;
  }
  const img = document.querySelector('.img-window img');
  img.src = imageUrls[currentImageIndex];
}


