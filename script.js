var _a;
function initHero() {
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
        title: "Robe de chambre victorienne",
        description: "Type de robe style Crimson Peak, historique, taille unique"
    },
    {
        image: "/ressources/images/Ciri/ciri_4.jpg",
        title: "Ciri, The Witcher",
        description: "Design original inspiré du personnage de Ciri dans The Witcher"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/robemedieval.jpg",
        title: "Robe style médiévale",
        description: "Inspirée de l'univers de The Witcher, style médiéval fantasy, Haut et jupe séparable, Taille XS"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/robeHisto.jpg",
        title: "Robe Historique, 1730",
        description: "Création originale, robe historique créée à partir de rideaux, entièrement faite main"
    },
    {
        image: "/ressources/images/AC/Elise/eliseFull.jpg",
        title: "Robe 18ème, entre la polonaise et l'anglaise",
        description: "Inspiré de la robe de bal d'Elise de la Serre dans Assassin's Creed Unity, Robe à la polonaise mixé à l'Anglaise pour la longueur, et à la Française pour la pièce d'Estomac"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/elfe.jpg",
        title: "Elfe de la forêt",
        description: "Tenue originale d'une tunique en lin avec veste et brassards en simili, taille XS"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/sorciere.jpg",
        title: "Sorcière",
        description: "Tenue originale d'une sorcière, avec son bâton lumineux, taille XS"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/jedi.jpg",
        title: "Costume de Jedi",
        description: "Tenue et création d'une tenue de Jedi, inspiré des tenues de Star Wars, taille XS à S"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/sith.jpg",
        title: "Tenue de Seigneur Sith",
        description: "Tenue originale d'un Sith de l'univers Star Wars, Taille sur mesure, et pièces d'armure en mousse avec leds intégrées"
    }
];
var currentIndex = 0;
function initCarousel() {
    var carouselTrack = document.getElementById('carouselTrack');
    var carouselContainer = document.getElementById('carouselContainer');
    if (carouselTrack) {
        carouselItems.forEach(function (item, index) {
            var itemElement = document.createElement('div');
            itemElement.className = 'imageContainer';
            itemElement.innerHTML = "\n                <div class=\"image\" style=\"background-image: url(".concat(item.image, ")\"></div>\n                <div class=\"overlay\">\n                    <h2 class=\"title\">").concat(item.title, "</h2>\n                    <p class=\"description\">").concat(item.description, "</p>\n                </div>\n            ");
            carouselTrack.appendChild(itemElement);
        });
    }
    var leftButton = document.querySelector('.navButtonLeft');
    var rightButton = document.querySelector('.navButtonRight');
    if (leftButton && rightButton) {
        leftButton.addEventListener('click', handlePrev);
        rightButton.addEventListener('click', handleNext);
    }
    // Gestion du comportement en fonction de la taille de l'écran
    function handleResize() {
        if (window.innerWidth <= 1050) {
            if (carouselContainer) {
                carouselContainer.style.overflowX = 'auto';
            }
            if (carouselTrack) {
                carouselTrack.style.transform = 'none';
            }
        }
        else {
            if (carouselContainer) {
                carouselContainer.style.overflowX = 'hidden';
            }
            updateCarousel();
        }
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Appel initial pour configurer le bon état
}
function updateCarousel() {
    if (window.innerWidth > 1050) {
        var carouselTrack = document.getElementById('carouselTrack');
        var imageContainer = document.querySelector('.imageContainer');
        if (carouselTrack && imageContainer) {
            var containerWidth = imageContainer.offsetWidth;
            carouselTrack.style.transform = "translateX(-".concat(currentIndex * containerWidth, "px)");
        }
    }
}
function handleNext() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
}
function handlePrev() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
}
document.addEventListener('DOMContentLoaded', initCarousel);
window.addEventListener('resize', updateCarousel);
// MENU BURGER
document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menuButton');
    var navbar = document.querySelector('.Navbar');
    function toggleMenu() {
        var isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', (!isExpanded).toString());
        navbar.classList.toggle('open');
        console.log('Menu toggled, open:', navbar.classList.contains('open'));
    }
    function handleResize() {
        if (window.innerWidth > 1050) {
            navbar.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.style.display = 'none';
            navbar.style.display = 'block';
        }
        else {
            menuButton.style.display = 'block';
            navbar.style.display = navbar.classList.contains('open') ? 'block' : 'none';
        }
    }
    function closeMenuOnScroll() {
        if (window.innerWidth <= 1050 && navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
            navbar.style.display = 'none';
        }
    }
    function handleScroll() {
        var header = document.querySelector('.Header');
        if (window.scrollY > 50) {
            header.classList.add('fullOpacity');
        }
        else {
            header.classList.remove('fullOpacity');
        }
    }
    menuButton.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', function () {
        closeMenuOnScroll();
        handleScroll();
    });
    // Initial call to set correct state
    handleResize();
    handleScroll();
});
// FORMULAIRE CONTACT
(_a = document.getElementById('file')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function () {
    var fileName = document.querySelector('.fileName');
    if (fileName && this.files && this.files[0]) {
        fileName.textContent = this.files[0].name;
    }
});
// MESSAGE ALERTE (disparaît au bout de 5s)
document.addEventListener('DOMContentLoaded', function () {
    var alertMessage = document.querySelector('.message');
    if (alertMessage && alertMessage.textContent.trim() !== '') {
        // Afficher le message avec une opacité de 1
        alertMessage.style.opacity = '1';
        alertMessage.style.transition = 'opacity 0.5s ease-in-out';
        alertMessage.style.display = 'block';
        setTimeout(function () {
            // Faire disparaître le message en réduisant son opacité
            alertMessage.style.opacity = '0';
            // Cacher complètement le message après la transition
            setTimeout(function () {
                alertMessage.style.display = 'none';
            }, 500); // Correspond à la durée de la transition
        }, 5000); // Le message disparaîtra après 5 secondes (5000 ms)
    }
    else if (alertMessage) {
        alertMessage.style.display = 'none';
    }
});
