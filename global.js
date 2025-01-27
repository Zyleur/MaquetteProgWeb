let image1 = document.getElementById('image2');
let image2 = document.getElementById('image3');
let conteur = 1;


image2.addEventListener('click', function() {
    conteur = conteur + 1 ;
    if (conteur>3) {
        conteur=1
    }
    contenuAJour(conteur)
});

function contenuAJour(conteur){
    if (conteur == 1  ) {
        image1.src = './img/img_mocku.png';
        image2.src = './img/shutterstock_2117571818-min-scaled.webp';
    } else if (conteur == 2 ) {
        image1.src = './img/shutterstock_2117571818-min-scaled.webp';
        image2.src = './img/6-erreurs-shopping-que-l-on-fait-toutes.jpg';
    } else{
        image1.src = './img/6-erreurs-shopping-que-l-on-fait-toutes.jpg';
        image2.src = './img/img_mocku.png';
   }
}



document.addEventListener("DOMContentLoaded", () => {
    const iconRecherche = document.getElementById("iconRecherche");
    const zoneRecherche = document.querySelector(".zoneRecherche");

    iconRecherche.addEventListener("click", () => {
        if (zoneRecherche.style.display === "none" || !zoneRecherche.style.display) {
            zoneRecherche.style.display = "flex";
        } else {
            zoneRecherche.style.display = "none";
        }
    });
});


var defile = document.getElementById('bas');
var container = document.getElementById('container');
var pt = 0; 

function imgDefile() {
    if (!defile) defile = document.getElementById('bas');
    if (defile) {
        pt -= 0.5;
        if (pt <= -defile.offsetWidth) {
            pt = 0;
        }
        defile.style.transform = `translateX(${pt}px)`;
    }
    requestAnimationFrame(imgDefile); 
}

imgDefile();




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
