const timeline = document.querySelector(".timeline");

(function () {
    function scrollH(e) {
        e.preventDefault(); // Prevent default vertical scrolling behavior
        const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)); // Normalize scroll delta
        timeline.scrollLeft -= delta * 20; // Adjust horizontal scroll
    }

    // Add event listeners for horizontal scrolling
    if (timeline) {
        timeline.addEventListener("wheel", scrollH, { passive: false }); // Modern browsers use 'wheel' event
    }
})();

document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "p") { 
        const rotatingElement = document.querySelector(".front-image");
        if (rotatingElement) {
            if (rotatingElement.classList.contains("rotate")) {
                const computedStyle = window.getComputedStyle(rotatingElement);
                const currentTransform = computedStyle.transform;
                rotatingElement.style.transform = currentTransform;
                rotatingElement.classList.remove("rotate");
            } else {
                const computedStyle = window.getComputedStyle(rotatingElement);
                const currentTransform = computedStyle.transform;
                rotatingElement.style.transform = currentTransform;
                rotatingElement.classList.add("rotate"); // Add rotation
            }
        }
    }
});

// Get references to the elements
const blurElement = document.querySelector('.blur');
const rotatingImage = document.querySelector('.rotate');
const timelineElement = document.querySelector('.timeline');
const timelineSections = document.querySelectorAll('.timeline section');
const timelineHeadings = document.querySelectorAll('.timeline h1');

// Initial z-index valuest

// Initial z-index values
let isBehind = false;

// Add event listener for 't' key
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 't') {
        if (isBehind) {
            // Set blur and rotating image z-index to 10 and 20 respectively
            blurElement.style.zIndex = '10';
            rotatingImage.style.zIndex = '20';
            timelineElement.classList.remove('small')
            timelineSections.forEach(section => {
                section.classList.remove('no-scroll');
                section.classList.add('scroll');
            });
            timelineHeadings.forEach(heading => {
                heading.classList.remove('small-time');
            });
        } else {
            // Set blur and rotating image z-index to -1 to move them behind
            blurElement.style.zIndex = '-10';
            rotatingImage.style.zIndex = '-5';
            timelineElement.classList.add('small')
            timelineSections.forEach(section => {
                section.classList.remove('scroll');
                section.classList.add('no-scroll');
            });
            timelineHeadings.forEach(heading => {
                heading.classList.add('small-time');
            });
        
            
        }
        isBehind = !isBehind;
    }
});