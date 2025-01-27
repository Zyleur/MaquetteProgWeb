let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
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