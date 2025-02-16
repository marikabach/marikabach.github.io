// CONTACT
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        contactForm.reset();
      });
    }
  });
  
  //ROTATION PICTURES
  document.addEventListener('DOMContentLoaded', () => {
    // Select each .image-rotator on the page
    const rotators = document.querySelectorAll('.image-rotator');
  
    rotators.forEach(rotator => {
      let currentIndex = 0;
      const images = rotator.querySelectorAll('img');
      
      // Show the first image by default
      images[currentIndex].classList.add('active');
  
      // Rotate every 3 seconds (3000 ms)
      setInterval(() => {
        // Hide the currently active image
        images[currentIndex].classList.remove('active');
        
        // Move to the next index (or wrap around)
        currentIndex = (currentIndex + 1) % images.length;
        
        // Show the next image
        images[currentIndex].classList.add('active');
      }, 3000);
    });
  });
  
  //FULL SCREEN DIASHOW
  document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.lightbox-overlay');
    const overlayImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    // Gather all .lightbox-trigger images in an array
    const images = Array.from(document.querySelectorAll('.lightbox-trigger'));
  
    let currentIndex = 0;
  
    // Function to show overlay with image at index
    function showImage(index) {
      currentIndex = index;
      const imgSrc = images[currentIndex].getAttribute('src');
      overlayImg.src = imgSrc;
      overlay.classList.add('active');
    }
  
    // Click event on each image to open overlay
    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        showImage(index);
      });
    });
  
    // Close overlay function
    function closeOverlay() {
      overlay.classList.remove('active');
      overlayImg.src = ''; // clear or optionally leave it
    }
  
    // Click X to close
    closeBtn.addEventListener('click', closeOverlay);
  
    // Click outside (overlay background) to close
    overlay.addEventListener('click', (e) => {
      // If clicked area is the overlay (and not the content)
      if (e.target === overlay) {
        closeOverlay();
      }
    });
  
    // Navigation: Previous
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  
    // Navigation: Next
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  
    // Optional: Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeOverlay();
      }
    });
  });
  
  //BURGER 
  document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
  
    if (burgerMenu) { // Check if burger menu exists
      burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
  
      // Close menu when clicking a link
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          burgerMenu.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });
    }
  });
  
// Auto-adjust timeline card heights
function adjustTimelineCards() {
  document.querySelectorAll('.timeline-card').forEach(card => {
    const imgHeight = card.querySelector('img')?.offsetHeight || 0;
    const textHeight = card.querySelector('div').offsetHeight;
    card.style.minHeight = `${Math.max(imgHeight, textHeight) + 30}px`;
  });
}

// Run on load and resize
window.addEventListener('load', adjustTimelineCards);
window.addEventListener('resize', adjustTimelineCards);