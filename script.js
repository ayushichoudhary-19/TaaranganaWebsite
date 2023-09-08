// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const header=document.getElementsByTagName("header");
// Add a media query to hide the menu button on larger screens
const mediaQuery = window.matchMedia("(min-width: 769px)");

// Function to handle the media query event
function handleMediaQuery(event) {
    if (event.matches) {
        // Screen width is 769px or more, hide the menu button
        menuBtn.style.display = "none";
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));
    } else {
        // Screen width is smaller than 769px, show the menu button
        menuBtn.style.display = "block";
    }
}

// Add an event listener to the media query
mediaQuery.addListener(handleMediaQuery);

// Initial check of the media query state
handleMediaQuery(mediaQuery);

// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);


function toggleMenu() {
    
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));
        header[0].style.height = "max-content";


        // Set the menu state to open
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));
        header[0].style.height = "10%";

        // Set the menu state to closed
        showMenu = false;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const scrollDownArrow = document.getElementById("scroll-down-arrow");

    if (scrollDownArrow) {
        scrollDownArrow.addEventListener("click", function () {
            // Scroll to 100vh (viewport height) when arrow is clicked
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth", // Add smooth scrolling effect
            });
        });
    }
});

// Get references to the buttons and content
const storyButton = document.getElementById('story');
const videoButton = document.getElementById('video');
const storyContent = document.getElementById('story-content');
const videoContent = document.getElementById('video-content');

// Add click event listeners to the buttons
storyButton.addEventListener('click', () => {
    storyButton.classList.add('active');
    videoButton.classList.remove('active');
    storyContent.classList.add('active');
    videoContent.classList.remove('active');
});

videoButton.addEventListener('click', () => {
    videoButton.classList.add('active');
    storyButton.classList.remove('active');
    videoContent.classList.add('active');
    storyContent.classList.remove('active');
});

// Auto-click the story button initially
storyButton.click();


// Get all subimages and the selected image
const subimages = document.querySelectorAll('.subimage img');
const selectedImage = document.querySelector('.selected-image .active-image');

// Add a click event listener to each subimage
subimages.forEach((subimage, index) => {
    subimage.addEventListener('click', () => {
        // Set the clicked subimage as the active image
        selectedImage.src = subimage.src;

        // Remove the "active" class from all subimages (if you want to apply styles)
        subimages.forEach((subimg) => {
            subimg.classList.remove('active');
        });

        // Optionally, add the "active" class to the clicked subimage to apply styles
        subimage.classList.add('active');
    });
});

// Note: The image options container is optional in this case as you're changing the active image directly.

