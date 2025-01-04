// CAROUSSEL HERO AUTO

const images: string[] = [
    'ressources/images/AC/Elise/elisebal5.jpg',
    'ressources/images/hobbit/hobbit2.jpg',
    'ressources/images/Ciri/Ciri_4.jpg',
    'ressources/images/Création/robeHisto.jpg',
    'ressources/images/Yennefer/yenn3-2.jpg'
];

let currentImageIndex: number = 0;
let loadedImages: string[] = [];

function preloadImages(): Promise<string[]> {
    const promises = images.map((image) => {
        return new Promise<string>((resolve) => {
            const img = new Image();
            img.src = image;
            img.onload = () => resolve(image);
        });
    });

    return Promise.all(promises);
}

function updateBackgroundImage(): void {
    const background = document.querySelector('.blurredBackground') as HTMLElement;
    if (background && loadedImages.length > 0) {
        background.style.backgroundImage = `url(${loadedImages[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % loadedImages.length;
    }
}

function initHero(): void {
    preloadImages().then((results) => {
        loadedImages = results;
        updateBackgroundImage();
        setInterval(updateBackgroundImage, 4000);
    });

    const scrollButton = document.querySelector('.scrollButton');
    if (scrollButton) {
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', initHero);



// CAROUSSEL MANUEL

interface CarouselItem {
    image: string;
    title: string;
    description: string;
}

const carouselItems: CarouselItem[] = [
    {
        image: `/ressources/images/Création/robeMedievalFantasy.jpg`,
        title: "Des Hobbits de la Comté",
        description: "Tenues médiévales/fantasy, corset et jupe. (Modèle à gauche : instagram @texou_cosplay)"
    },
    {
        image: `/ressources/images/Création/shanksJacket.jpg`,
        title: "Veste type pirate H/F",
        description: "Veste de pirate, taille unique, non genré."
    },
    {
        image: `/ressources/images/Création/robeBlanche.jpg`,
        title: "Robe Blanche, type robe de nuit",
        description: "Façon Dame Blanche, robe type médiéval, robe de nuit, taille unique"
    },
    {
        image: `/ressources/images/Ciri/ciri_4.jpg`,
        title: "Ciri, The Witcher",
        description: "Design original inspiré du personnage de Ciri dans The Witcher"
    },
    {
        image: `/ressources/images/Création/robemedieval.jpg`,
        title: "Robe type médiévale",
        description: "Description"
    },
    {
        image: `/ressources/images/Création/robeHisto.jpg`,
        title: "Robe Historique, 1730",
        description: "Création originale, robe historique créée à partir de rideaux, entièrement faite main"
    },
    {
        image: `/ressources/images/AC/Elise/eliseFull.jpg`,
        title: "Robe de bal, Elise de la Serre, The Witcher",
        description: "Redesign de la robe de bal du personnage d'Elise de la Serre dans The Witcher, corrigé pour être historiquement correct"
    },
    {
        image: `/ressources/images/Création/elfe.jpg`,
        title: "Elfe de la forêt",
        description: "Création d'un costume en cuir pour une elfe guerrière de la forêt"
    },
    {
        image: `/ressources/images/Création/sorciere.jpg`,
        title: "Sorcière",
        description: "Création orginal d'une sorcière"
    },
    {
        image: `/ressources/images/Création/jedi.jpg`,
        title: "Jedi",
        description: "Création et design d'un costume de jedi, univers Star Wars"
    },
    {
        image: `/ressources/images/Création/sith.jpg`,
        title: "Sith",
        description: "Création d'un costume inspiré des Sith, univers Star Wars"
    }
];

let currentIndex = 0;

function initCarousel(): void {
    const carouselTrack = document.getElementById('carouselTrack');
    if (carouselTrack) {
        carouselItems.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'imageContainer';
            itemElement.innerHTML = `
                <div class="image" style="background-image: url(${item.image})"></div>
                <div class="overlay">
                    <h2 class="title">${item.title}</h2>
                    <p class="description">${item.description}</p>
                </div>
            `;
            carouselTrack.appendChild(itemElement);
        });
    }

    document.querySelector('.navButtonLeft')?.addEventListener('click', handlePrev);
    document.querySelector('.navButtonRight')?.addEventListener('click', handleNext);
}

function handleNext(): void {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
}

function handlePrev(): void {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
}

function updateCarousel(): void {
    const carouselTrack = document.getElementById('carouselTrack');
    const imageContainer = document.querySelector('.imageContainer') as HTMLElement;
    if (carouselTrack && imageContainer) {
        const containerWidth = imageContainer.offsetWidth;
        carouselTrack.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
    }
}

document.addEventListener('DOMContentLoaded', initCarousel);
window.addEventListener('resize', updateCarousel);



// MENU BURGER

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menuButton') as HTMLButtonElement;
    const navbar = document.querySelector('.Navbar') as HTMLElement;

    function toggleMenu(): void {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', (!isExpanded).toString());
        navbar.classList.toggle('open');
    }

    function handleResize(): void {
        if (window.innerWidth > 800) {
            navbar.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.style.display = 'none';
            navbar.style.display = 'block';
        } else {
            menuButton.style.display = 'block';
            navbar.style.display = navbar.classList.contains('open') ? 'block' : 'none';
        }
    }

    menuButton.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);

    // Initial call to set correct state
    handleResize();
});


// FORMULAIRE CONTACT

document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('messageContainer');

    if (messageContainer) {
        const message = <?php 
        echo isset($_SESSION['message']) ? json_encode($_SESSION['message']) : 'null';
        unset($_SESSION['message']); // Effacer le message après l'avoir affiché
      ?>;

        if (message) {
            if (message.status === 'success') {
                messageContainer.innerHTML = `<p class="success-message">${message.text}</p>`;
            } else {
                messageContainer.innerHTML = `<p class="error-message">${message.text}</p>`;
            }
        }
    }
});


document.getElementById('file')?.addEventListener('change', function (this: HTMLInputElement) {
    const fileName = document.querySelector('.fileName');
    if (fileName && this.files && this.files[0]) {
        fileName.textContent = this.files[0].name;
    }
});
