// Toggle mobile menu visibility
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Check if the user is logged in (based on cookie)
window.onload = function () {
    checkUserLoginStatus();
};

// Check User Login Status from Cookies
function checkUserLoginStatus() {
    const loginLink = document.getElementById('login-profile-link');
    const profileLink = document.getElementById('profile-link');
    const userCookie = document.cookie.split('; ').find(row => row.startsWith('user_logged_in='));

    if (userCookie) {
        // User is logged in
        profileLink.textContent = "Profile";
        loginLink.innerHTML += `
            <ul class="nav-links">
                <li><a href="#">Cart</a></li>
                <li><a href="logout.php" id="logout-link">Logout</a></li>
            </ul>
        `;

        // Add logout functionality
        const logoutLink = document.getElementById('logout-link');
        logoutLink.addEventListener('click', () => {
            window.location.href = "logout.php"; // Redirect to logout.php
        });
    } else {
        // User is not logged in
        profileLink.textContent = "Login";
        profileLink.setAttribute('href', 'login/index.php');
    }
}



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);  // Change slide every 5 seconds


// Optional: If you want to add any additional dynamic effects, animations, or interactivity, you can use JavaScript.
// In this example, no additional JavaScript is necessary for the hover effect as it is handled by CSS.
// You can add more complex animations or effects here if needed.



// JavaScript for dynamic animations and transitions
document.addEventListener("DOMContentLoaded", function() {
    const contentBoxes = document.querySelectorAll('.content-box');

    // Trigger animation on page load
    contentBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.opacity = 1;
            box.style.transform = "translateY(0)";
        }, index * 300);  // Delaying each box animation for a smoother effect
    });

    // Hover effect: Changing background color with transition
    contentBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = '#333';
        });

        box.addEventListener('mouseout', () => {
            box.style.backgroundColor = '#222';
        });
    });
});



// Simple form validation or animation (optional)

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');

    // You can add form submission animation here
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your query! We will get back to you soon.');
        contactForm.reset(); // Reset form after submission
    });
});



// Function to handle payment button clicks
const paymentButtons = document.querySelectorAll('.payment-btn');
const paymentMessage = document.getElementById('paymentMessage');

paymentButtons.forEach(button => {
  button.addEventListener('click', function() {
    const paymentMethod = this.innerText;
    paymentMessage.innerText = `You have selected ${paymentMethod} as your payment method. Please proceed to complete the payment.`;
    paymentMessage.style.color = '#4CAF50';
    paymentMessage.style.fontWeight = 'bold';
  });
});





// Optional Smooth Scroll for Navigation Links
document.querySelectorAll('.footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Adjust as needed
          behavior: 'smooth'
        });
      }
    });
  });
  
