const imageContainer = document.getElementById("image");

imageContainer.innerHTML += imageContainer.innerHTML;
let position = 0;

function scrollImages() {
    position--; 
    imageContainer.style.transform = `translateX(${position}px)`; 

    if (Math.abs(position) >= imageContainer.scrollWidth / 2) {
        position = 0;
    }

    requestAnimationFrame(scrollImages); 
}

scrollImages();
