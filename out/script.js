// Fonctions scroll de page
function scrollToSection(index) {
    var section = sectionRefs[index];
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function handleScroll() {
    var scrollPosition = window.scrollY;
    showHeader = scrollPosition < 100;
    updateHeaderVisibility();
}
function updateHeaderVisibility() {
    var header = document.querySelector('header');
    if (header) {
        header.classList.toggle('visibleHeader', showHeader);
        header.classList.toggle('hiddenHeader', !showHeader);
    }
}
// Initialisation
document.addEventListener('DOMContentLoaded', function () {
    // Initialiser les références des sections
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section, index) {
        sectionRefs[index] = section;
    });
    // Ajouter l'écouteur d'événement pour le scroll
    window.addEventListener('scroll', handleScroll);
    // Initialiser la visibilité du header
    updateHeaderVisibility();
});
// CAROUSSEL
var images = [
    'ressources/images/AC/Elise/elisebal5.jpg',
    'ressources/images/hobbit/hobbit2.jpg',
    'ressources/images/Ciri/Ciri_4.jpg',
    'ressources/images/Création/robeHisto.jpg',
    'ressources/images/Yennefer/yenn3-2.jpg'
];
var currentImageIndex = 0;
var loadedImages = [];
function preloadImages() {
    var promises = images.map(function (image) {
        return new Promise(function (resolve) {
            var img = new Image();
            img.src = image;
            img.onload = function () { return resolve(image); };
        });
    });
    return Promise.all(promises);
}
function updateBackgroundImage() {
    var background = document.querySelector('.blurredBackground');
    if (background && loadedImages.length > 0) {
        background.style.backgroundImage = "url(".concat(loadedImages[currentImageIndex], ")");
        currentImageIndex = (currentImageIndex + 1) % loadedImages.length;
    }
}
function initHero() {
    preloadImages().then(function (results) {
        loadedImages = results;
        updateBackgroundImage();
        setInterval(updateBackgroundImage, 4000);
    });
    var scrollButton = document.querySelector('.scrollButton');
    if (scrollButton) {
        scrollButton.addEventListener('click', function () {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
}
document.addEventListener('DOMContentLoaded', initHero);
//# sourceMappingURL=script.js.map