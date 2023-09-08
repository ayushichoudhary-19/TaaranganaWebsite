
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const header=document.getElementsByTagName("header");
const mediaQuery = window.matchMedia("(min-width: 769px)");


function handleMediaQuery(event) {
    if (event.matches) {
        menuBtn.style.display = "none";
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));
    } else {

        menuBtn.style.display = "block";
    }
}


mediaQuery.addListener(handleMediaQuery);


handleMediaQuery(mediaQuery);


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


        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));
        header[0].style.height = "10%";

        showMenu = false;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const scrollDownArrow = document.getElementById("scroll-down-arrow");

    if (scrollDownArrow) {
        scrollDownArrow.addEventListener("click", function () {

            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth", 
            });
        });
    }
});

const storyButton = document.getElementById('story');
const videoButton = document.getElementById('video');
const storyContent = document.getElementById('story-content');
const videoContent = document.getElementById('video-content');


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


storyButton.click();


const subimages = document.querySelectorAll('.subimage img');
const selectedImage = document.querySelector('.selected-image .active-image');

subimages.forEach((subimage, index) => {
    subimage.addEventListener('click', () => {

        selectedImage.src = subimage.src;

        subimages.forEach((subimg) => {
            subimg.classList.remove('active');
        });

        subimage.classList.add('active');
    });
});

// Note: The image options container is optional in this case as you're changing the active image directly.

