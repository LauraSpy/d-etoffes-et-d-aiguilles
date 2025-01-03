// CAROUSSEL HERO AUTO
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
var carouselItems = [
    {
        image: "/ressources/images/Cr\u00E9ation/robeMedievalFantasy.jpg",
        title: "Des Hobbits de la Comté",
        description: "Tenues médiévales/fantasy, corset et jupe. (Modèle à gauche : instagram @texou_cosplay)"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/shanksJacket.jpg",
        title: "Veste type pirate H/F",
        description: "Veste de pirate, taille unique, non genré."
    },
    {
        image: "/ressources/images/Cr\u00E9ation/robeBlanche.jpg",
        title: "Robe Blanche, type robe de nuit",
        description: "Façon Dame Blanche, robe type médiéval, robe de nuit, taille unique"
    },
    {
        image: "/ressources/images/Ciri/ciri_4.jpg",
        title: "Ciri, The Witcher",
        description: "Design original inspiré du personnage de Ciri dans The Witcher"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/robemedieval.jpg",
        title: "Robe type médiévale",
        description: "Description"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/robeHisto.jpg",
        title: "Robe Historique, 1730",
        description: "Création originale, robe historique créée à partir de rideaux, entièrement faite main"
    },
    {
        image: "/ressources/images/AC/Elise/eliseFull.jpg",
        title: "Robe de bal, Elise de la Serre, The Witcher",
        description: "Redesign de la robe de bal du personnage d'Elise de la Serre dans The Witcher, corrigé pour être historiquement correct"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/elfe.jpg",
        title: "Elfe de la forêt",
        description: "Création d'un costume en cuir pour une elfe guerrière de la forêt"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/sorciere.jpg",
        title: "Sorcière",
        description: "Création orginal d'une sorcière"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/jedi.jpg",
        title: "Jedi",
        description: "Création et design d'un costume de jedi, univers Star Wars"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/sith.jpg",
        title: "Sith",
        description: "Création d'un costume inspiré des Sith, univers Star Wars"
    }
];
var currentIndex = 0;
function initCarousel() {
    var _a, _b;
    var carouselTrack = document.getElementById('carouselTrack');
    if (carouselTrack) {
        carouselItems.forEach(function (item, index) {
            var itemElement = document.createElement('div');
            itemElement.className = 'imageContainer';
            itemElement.innerHTML = "\n                <div class=\"image\" style=\"background-image: url(".concat(item.image, ")\"></div>\n                <div class=\"overlay\">\n                    <h2 class=\"title\">").concat(item.title, "</h2>\n                    <p class=\"description\">").concat(item.description, "</p>\n                </div>\n            ");
            carouselTrack.appendChild(itemElement);
        });
    }
    (_a = document.querySelector('.navButtonLeft')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handlePrev);
    (_b = document.querySelector('.navButtonRight')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', handleNext);
}
function handleNext() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
}
function handlePrev() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
}
function updateCarousel() {
    var carouselTrack = document.getElementById('carouselTrack');
    var imageContainer = document.querySelector('.imageContainer');
    if (carouselTrack && imageContainer) {
        var containerWidth = imageContainer.offsetWidth;
        carouselTrack.style.transform = "translateX(-".concat(currentIndex * containerWidth, "px)");
    }
}
document.addEventListener('DOMContentLoaded', initCarousel);
window.addEventListener('resize', updateCarousel);
