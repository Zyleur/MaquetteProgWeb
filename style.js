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