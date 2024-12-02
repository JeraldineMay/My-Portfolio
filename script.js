const navLinks = document.querySelectorAll('.navbar ul li a');

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    
    navLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
    // Show Home section when "See More" is clicked
    const showHomeBtn = document.getElementById('show-home');
    const initialContent = document.getElementById('initial-content');
    const homeSection = document.getElementById('home-section');
    const aboutSection = document.getElementById('about');
    const aboutLink = document.getElementById('about-link');
    const exploreBtn = document.getElementById('explore');
    const skillsButton = document.querySelector('.v-sign-btn');
    const skillsSection = document.querySelector('#Skills');

    // Hide initial content and show home section
    showHomeBtn.addEventListener('click', function (event) {
        event.preventDefault();
        initialContent.style.display = 'none'; 
        homeSection.style.display = 'block'; 
    });

    // Handle smooth scroll for "Explore More"
    exploreBtn.addEventListener('click', function (event) {
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: 'smooth' }); 
        
        // Make "About" link visible
        aboutLink.style.display = 'inline-block'; 
        aboutLink.classList.add('active'); 
    });

    // Enable the "About" link after clicking Explore More
    aboutLink.addEventListener('click', function () {
        alert('You have clicked the About link!');
    });

    // Smooth scroll to the skills section when button is clicked
    skillsButton.addEventListener('click', function () {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    });
});
// Get references to the button and the additional text
const readMoreBtn = document.getElementById('read-more-btn');
const moreText = document.getElementById('more-text');

// Add a click event listener to the button
readMoreBtn.addEventListener('click', () => {
    // Check if the extra text is currently hidden
    if (moreText.classList.contains('hidden')) {
        // Show the extra text
        moreText.classList.remove('hidden');
        // Update the button text to "Read Less"
        readMoreBtn.querySelector('.text').textContent = 'Read Less';
    } else {
        // Hide the extra text
        moreText.classList.add('hidden');
        // Update the button text to "Read More"
        readMoreBtn.querySelector('.text').textContent = 'Read More';
    }
});


const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;

    for(let i = 0; i < dots; i++){
        points += ` <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwkPFkEl4FzqTfG_cK9M0VPTUnGWVZUyOxCUzI8gMTeTAaReDR-RJjifwqWYAdvuemLqw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// JavaScript for toggle functionality
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('navbar-links');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});
