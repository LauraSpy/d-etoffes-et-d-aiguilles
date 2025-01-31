var _a;
// FENETRE POPUP COOKIES
document.addEventListener('DOMContentLoaded', function () {
    var cookieModal = new window.bootstrap.Modal(document.getElementById('cookieModal'));
    var acceptCookiesBtn = document.getElementById('acceptCookies');
    var closeCookiesBtn = document.getElementById('closeCookies');
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieModal.show();
    }
    acceptCookiesBtn === null || acceptCookiesBtn === void 0 ? void 0 : acceptCookiesBtn.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieModal.hide();
        enableElfsightWidget(); // Fonction pour activer le widget
    });
    closeCookiesBtn === null || closeCookiesBtn === void 0 ? void 0 : closeCookiesBtn.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieModal.hide();
        disableElfsightWidget(); // Fonction pour désactiver le widget
    });
    // Vérifiez l'état des cookies au chargement de la page
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        enableElfsightWidget();
    }
    else {
        disableElfsightWidget();
    }
});
function enableElfsightWidget() {
    var container = document.getElementById('elfsight-container');
    if (container) {
        // Effacer le contenu existant
        container.textContent = '';
        // Ajouter le script Elfsight
        var script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);
        // Ajouter le div du widget
        var widgetDiv = document.createElement('div');
        widgetDiv.className = "elfsight-app-883fb067-3d15-42bc-bd53-9aa5746ec2a2";
        widgetDiv.setAttribute('data-elfsight-app-lazy', '');
        container.appendChild(widgetDiv);
    }
}
function disableElfsightWidget() {
    var container = document.getElementById('elfsight-container');
    if (container) {
        container.innerHTML = "<p>Widget Instagram not loaded: <strong>accept cookies to see</strong></p>";
        container.style.color = '#F5F5DC';
    }
}
// BOUTON DU SCROLL POUR PASSER LE HERO
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
        image: "/ressources/images/Cr\u00E9ation/robeMedievalFantasy.webp",
        title: "Des Hobbits de la Comté",
        description: "Tenues médiévales/fantasy, corset et jupe. (Modèle à gauche : instagram @texou_cosplay)"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/shanksJacket.webp",
        title: "Veste type pirate H/F",
        description: "Veste de pirate, taille unique, non genré."
    },
    {
        image: "/ressources/images/Cr\u00E9ation/robeBlanche.webp",
        title: "Robe de chambre victorienne",
        description: "Type de robe style Crimson Peak, historique, taille unique"
    },
    {
        image: "/ressources/images/Ciri/Ciri_4.webp",
        title: "Ciri, The Witcher",
        description: "Design original inspiré du personnage de Ciri dans The Witcher"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/robemedieval.webp",
        title: "Robe style médiévale",
        description: "Inspirée de l'univers de The Witcher, style médiéval fantasy, Haut et jupe séparable, Taille XS"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/robeHisto.webp",
        title: "Robe Historique, 1730",
        description: "Création originale, robe historique créée à partir de rideaux, entièrement faite main"
    },
    {
        image: "/ressources/images/AC/Elise/eliseFull.webp",
        title: "Robe 18ème, entre la polonaise et l'anglaise",
        description: "Inspiré de la robe de bal d'Elise de la Serre dans Assassin's Creed Unity, Robe à la polonaise mixé à l'Anglaise pour la longueur, et à la Française pour la pièce d'Estomac"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/elfe.webp",
        title: "Elfe de la forêt",
        description: "Tenue originale d'une tunique en lin avec veste et brassards en simili, taille XS"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/sorciere.webp",
        title: "Sorcière",
        description: "Tenue originale d'une sorcière, avec son bâton lumineux, taille XS"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/jedi.webp",
        title: "Costume de Jedi",
        description: "Tenue et création d'une tenue de Jedi, inspiré des tenues de Star Wars, taille XS à S"
    },
    {
        image: "/ressources/images/Cr\u00E9ation/sith.webp",
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
        var carouselTrack = document.getElementById('carouselTrack');
        if (window.innerWidth <= 1050) {
            if (carouselContainer) {
                carouselContainer.style.overflowX = 'auto';
            }
            if (carouselTrack) {
                carouselTrack.style.transform = 'none';
                carouselTrack.style.width = '100vmax';
                carouselTrack.style.overflowX = 'scroll';
            }
        }
        else {
            if (carouselContainer) {
                carouselContainer.style.overflowX = 'hidden';
            }
            if (carouselTrack) {
                carouselTrack.style.width = ''; // Réinitialiser la largeur
                carouselTrack.style.overflowX = ''; // Réinitialiser l'overflow
            }
            updateCarousel();
        }
    }
    window.addEventListener('resize', function () {
        handleResize();
        updateCarousel();
    });
}
function updateCarousel() {
    var carouselTrack = document.getElementById('carouselTrack');
    var imageContainer = document.querySelector('.imageContainer');
    if (carouselTrack && imageContainer) {
        if (window.innerWidth > 1050) {
            var containerWidth = imageContainer.offsetWidth;
            carouselTrack.style.transform = "translateX(-".concat(currentIndex * containerWidth, "px)");
        }
        else {
            carouselTrack.style.transform = 'none';
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
