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

