// Simple JavaScript to make the portfolio interactive
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('You clicked on a portfolio item! In a real portfolio, this would open a detailed view.');
        });
    });

    // Make the "Send a Message" button work
    const messageButton = document.querySelector('.btn-primary');
    messageButton.addEventListener('click', function() {
        const name = prompt('Please enter your name:');
        if (name) {
            alert(`Thank you ${name}! Hiring Me`);
        }
    });

    // Make the "Poke Portfolio" button work
    const pokeButton = document.querySelector('.btn:not(.btn-primary)');
    pokeButton.addEventListener('click', function() {
        alert('Thanks for download my Resume');
    });
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "/RJEYASUDHAN - OGResume.pdf"; // Make sure cv.pdf is in the same folder
  link.download = "/RJEYASUDHAN - OGResume.pdf"; // Rename the downloaded file (optional)
  link.click();
});
document.getElementById("downloadcertificate1Btn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "/1000070291.pdf"; // Make sure cv.pdf is in the same folder
  link.download = "/1000070291.pdf"; // Rename the downloaded file (optional)
  link.click();
});
document.getElementById("downloadcertificate2Btn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "/artificial-intelligence_certificate_of_achievement_3aipin8_page-0002.pdf"; // Make sure cv.pdf is in the same folder
  link.download = "/artificial-intelligence_certificate_of_achievement_3aipin8_page-0002.pdf"; // Rename the downloaded file (optional)
  link.click();
});

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
  });

