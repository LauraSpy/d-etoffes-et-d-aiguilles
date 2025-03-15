<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
require_once 'config.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
if (isset($_POST['mailform'])) {
    $nom = $_POST['name'];
    $email = $_POST['email'];
    $user_message = $_POST['message'];

    if(!empty($nom) && !empty($email) && !empty($user_message)) {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host       = 'ssl0.ovh.net';
            $mail->SMTPAuth   = true;
            $mail->Username = SMTP_USERNAME;
            $mail->Password = SMTP_PASSWORD;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465;

            $mail->setFrom('noreply@d-etoffes-et-d-aiguilles.fr', 'D\'Etoffes et d\'Aiguilles');
            $mail->addAddress('noreply@d-etoffes-et-d-aiguilles.fr');

            $mail->isHTML(true);
            $mail->Subject = "CONTACT - d-etoffes-et-d-aiguilles.fr";
            $mail->Body    = "
                <div align='center'>
                    <u>Nom de l'expediteur :</u> {$nom}<br />
                    <u>Mail de l'expediteur :</u> {$email}<br />
                    <br />
                    " . nl2br($user_message) . "
                </div>";

            $mail->send();
            $msg = "Votre message a bien été envoyé !";
        } catch (Exception $e) {
            $msg = "Le message n'a pas pu être envoyé. Erreur: {$mail->ErrorInfo}";
        }
    } else {
        $msg = "Une Erreur est survenue. Veuillez réessayer plus tard.";
    }
}


?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D'étoffes et d'Aiguilles</title>
    <link rel="stylesheet" href="index.css">
    <link rel="icon" type="image/png" href="./ressources/logo/logo_favicon.png" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
    <div class="homepage">
        <header class="Header">
            <nav>
                <div class="Container">
                    <a href="./index.php" class="logo">
                        <img src="ressources/logo/logo_dark_full.jpg" alt="Logo">
                    </a>
                    <button class="menuButton" aria-controls="navbar" aria-expanded="false">
                        <span class="sr-only" style="display: none;">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 17 14">
                            <path stroke="#184A45" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="#184A45"
                                d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div class="Navbar" id="navbar">
                        <ul>
                            <li><a href="#services" class="navbarLink">Mes Services</a></li>
                            <li><a href="#creation" class="navbarLink">Portfolio</a></li>
                            <li><a href="./location.html#location" class="navbarLink">Locations</a></li>
                            <li><a href="#presentation" class="navbarLink">Qui Suis-je</a></li>
                            <li><a href="#contact" class="navbarLink">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <section class="heroSection">
            <div class="heroBackground">
                <div class="blurredBackground"></div>
                <h1 style="display: none;">D'étoffes et d'Aiguilles</h1>
                <img src="ressources/logo/logo_fond_noir_transp.png" alt="logo site" class="logoSite" />
                <div class="scrollButton">
                    Scroll Down
                    <div class="arrow"></div>
                </div>
            </div>
        </section>

        <!-- section to present services -->
        <section class="nextSection" id="services">
            <div class="content">
                <div class="flexContainer">
                    <div class="leftText">
                        <p class="quoteText">
                            <span></span>
                            Fais de ta vie un rêve, et d'un rêve, une réalité.
                            <span></span>
                        </p>
                        <p class="authorText">Françoise St Exupéry</p>
                    </div>
                    <div class="rightText">
                        <h3 class="servicesTitle">Mes Services & Tarifs</h3>
                        <p class="serviceDetails">Création, Location, Retouches</p>
                    </div>
                </div>
                <!-- three boxes where the service are explain -->
                <div class="case">
                    <div class="caseBox">
                        <div class="number">1</div>
                        <div class="caseBoxContent">
                            <h3 class="caseTitle">Création de costumes et cosplay sur-mesure</h3>
                            <p>Remplir le <a href="#" class="download" target="_blank"
                                    rel="noopener noreferrer">formulaire</a> avec votre contact et le brouillon de votre
                                projet pour estimer le devis selon votre budget. Vous pouvez me le renvoyer via le
                                formulaire de contact ou directement sur les réseaux sociaux.</p>
                        </div>
                    </div>
                    <div class="caseBox">
                        <div class="number">2</div>
                        <div class="caseBoxContent">
                            <h3 class="caseTitle">Location de costumes</h3>
                            <p>Découvrez le catalogue disponible à la location pour vos événements et autres festivals !
                            </p>
                            <p class="construction">- en cours de construction -</p>
                        </div>
                    </div>
                    <div class="caseBox">
                        <div class="number">3</div>
                        <div class="caseBoxContent">
                            <h3 class="caseTitle">Services de retouches couture</h3>
                            <p>Retrouvez la liste des retouches proposées et leur tarifs :</p>
                            <br />
                            <a href="pdf/Listes_des_retouches.pdf" class="download" target="_blank"
                                rel="noopener noreferrer">télécharger la grille des retouches</a>
                        </div>
                    </div>
                </div>
                <!-- link to send to the contact form -->
                <p class="questionsText">
                    <a href="#contact">Des questions ? Me Contacter ! →</a>
                </p>
            </div>
        </section>

        <!-- Section for the portfolio carousel -->
        <section class="contentCrea" id="creation">
            <h2 class="contentCreaTitle">Découvrez mes créations</h2>
            <!-- component for the carousel -->
            <div class="contentCreaCarousel">
                <div class="caroussel">
                    <!-- component where the image will be loaded with js -->
                    <div class="carouselContainer">
                        <button class="navButton arrowLeft" aria-label="button to scroll left" onclick="handlePrev()"></button>
                        <div class="carousel">
                            <!-- placement of the image -->
                            <div class="carouselTrack" id="carouselTrack"></div>
                        </div>
                        <button class="navButton arrowRight" aria-label="button to scroll right" onclick="handleNext()"></button>
                    </div>
                </div>
            </div>
        </section>

        <!-- section for the presentation -->
        <section class="presentation" id="presentation">
            <div class="presentationBoxLeft">
                <!-- place for the portrait image -->
                <div class="presentationImage" style="background-image: url('./ressources/images/background/portrait.jpg');">
                </div>
            </div>
            <!-- place for the presentation text -->
            <div class="presentationBoxRight">
                <h2 class="presentationBoxTitle">Qui Suis-je ?</h2>
                <p class="presentationBoxText">
                    Salut ! Moi, c'est Lise. <br>
                    Bienvenue sur mon site ! <br>
                    <br>
                    Il vous présentera le portfolio de mes créations, les divers services que je vous propose et le
                    catalogue de location de costumes. <br>
                    <br>
                    Pour me présenter brièvement, je suis passionnée par le costume depuis 2014. J’aime la manière qu’un
                    costume a de raconter et compléter
                    l’histoire d’un personnage ; ce que la tenue peut dire de la personnalité d'une personne ; et j’aime
                    quand un costume historique nous fait
                    traverser les époques et nous embarque dans le passé. En bref, j'aime la création de costumes, le
                    dessin de personnage, et mon parcours m’a
                    aussi amené à étudier l'histoire du costume de mode. <br>
                    <br>
                    En effet, j’ai appris le dessin et l'art au travers de l'histoire de l'art. Avec une Licence
                    d'Études Théâtrales, obtenue en 2020, j’ai pu
                    m'immerger dans les Arts du Spectacle, et plus particulièrement dans le monde du spectacle vivant.
                    Suite à quoi j'ai enchaîné en Master,
                    pendant lequel j’ai réalisé un mémoire de recherche. Il portait sur les Costumes du théâtre tragique
                    entre 1680 à 1815, et il m’a permis
                    d’étudier en détail l'histoire de la mode féminine et les inspirations des tenues féminines dans la
                    tragédie. <br>
                    <br>
                    Au cours de mes études, j'ai également effectué plusieurs stages auprès de Costumiers, notamment au
                    Théâtre National de Bretagne, à Paris pour
                    des costumes historiques de Molière, et avec une association de reconstitution de tenue médiévale.
                    J'ai réalisé également les costumes de
                    plusieurs pièces de théâtre, dont "Le Triomphe de l'Amour" de Marivaux pour la Compagnie Bain-Marie.
                    <br><br>
                    Pour compléter mes compétences, j’ai obtenu un diplôme de CAP couture, effectué en candidature
                    libre.<br>
                    <br>
                    Aujourd'hui, je vous propose de créer des tenues sur mesure et adaptées à vos projets, ayant des
                    affinités pour le théâtre, le fantastique,
                    l’époque médiévale et historique plus généralement.<br>

                </p>
                <!-- place for the social network logo and link -->
                <div class="presentationBoxLogo">
                    <div class="logo">
                        <a href="https://www.instagram.com/d.etoffes_et_d.aiguilles/" class="icon" aria-label="logo for instagram">
                            <svg fill="#3C2F2F" viewBox="0 0 17 17" height="1.5em" width="1.5em">
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/EyilinArt" class="icon" aria-label="logo for facebook">
                            <svg fill="#3C2F2F" viewBox="0 0 19 19" height="1.5em" width="1.5em">
                                <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- contact section -->
        <section class="contact" id="contact">
            <!-- background image added -->
            <div class="contactBackground"
                style="background-image: url('./ressources/images/background/machine_a_coudre.jpg');"></div>
            <h2 class="contactTitle">
                CONTACTEZ<br />MOI
            </h2>
            <div>
                <!-- contact form -->
                <div>
                    <form id="contactForm" class="contactForm" name="contact" method="POST" action="">
                        <div class="formGroup">
                            <input autocomplete="on" type="text" id="name" name="name" placeholder="Nom Prénom / Pseudo" required />
                        </div>
                        <div class="lineGradient"></div>
                        <div class="formGroup">
                            <input autocomplete="on" type="email" id="email" name="email" placeholder="Mail *" required />
                        </div>
                        <div class="lineGradient"></div>
                        <div class="formGroup">
                            <textarea id="message" name="message" placeholder="Message"
                                title="Ne renseignez jamais de numéros de téléphone"></textarea>
                        </div>
                        <div class="formGroup">
                            <!-- Removed file upload input -->
                            <button type="submit" class="submitButton" name="mailform">Envoyer</button>
                        </div>
                    </form>
                    <!-- popup message to confirm if the message were sent or not -->
                    <div class="message">
                        <?php
                            if(isset($msg))
                            {
                                echo $msg;
                            }
                        ?>
                    </div>
                </div>
                <!-- social network logo added -->
                <div class="ContactLogo">
                    <div class="logo">
                        <a href="https://www.instagram.com/d.etoffes_et_d.aiguilles/" class="icon">
                            <svg fill="#F5F5DC" viewBox="0 0 17 17" height="1.5em" width="1.5em">
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/EyilinArt" class="icon">
                            <svg fill="#F5F5DC" viewBox="0 0 19 19" height="1.5em" width="1.5em">
                                <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <!-- link to CGU -->
            <div class="plusInfoCgu">
                <a href="./TermsOfServices/CGU.html" title="Pour plus d'informations, cliquez ici">*
                    Conditions Générales d'Utilisation</a>
            </div>
        </section>

        <!-- footer section -->
        <footer class="Footer">
            <div class="Instagram" id="elfsight-container">
                
            </div>
            <div class="FooterContent">
                <!-- link to conditions -->
                <div class="condition">
                    <a href="./TermsOfServices/CGU.html">Conditions Générales d'Utilisation</a>
                    <a href="./TermsOfServices/MentionsLegales.html">Mentions Légales</a>
                </div>
                <div class="Title">D'étoffes et d'Aiguilles</div>
                <div class="logo">
                    <a href="https://www.instagram.com/d.etoffes_et_d.aiguilles/" class="icon">
                        <svg fill="#3C2F2F" viewBox="0 0 17 17" height="2em" width="2em">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/EyilinArt" class="icon">
                        <svg fill="#3C2F2F" viewBox="0 0 19 19" height="2em" width="2em">
                            <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="Copyright">
                ©2024 | Site & Design par Krystiinals | Logo & Charte Graphique réalisé par <a href=""
                    style="text-decoration: underline; color: #F5F5DC;">M.R
                    Design</a> - Tous droits réservés.
            </div>
        </footer>

    </div>

    <!-- popup for the cookies -->
    <div class="modal fade" id="cookieModal" tabindex="-1" aria-labelledby="cookieModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="cookieModalLabel">Politique de cookies</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p> Ce site utilise des cookies pour améliorer votre expérience.</p> 
                <p>Il utilise également ceux du service Elfsight Instagram Feed pour afficher du contenu Instagram sur notre site. </p>
                    <p>Pour connaître tous les cookies utilisés par
                    ce service, vous pouvez visiter nos <a href="./TermsOfServices/MentionsLegales.html">Mentions Légales</a>, dans la rubrique "Cookies". </p>
                    <p class="fw-bold text-center" style="font-Size: 12px">Noter qu'à partir de 2025, Google Chrome prévoit de bloquer les cookies tiers. 
                    La fonctionnalité du widget Instagram pourrait être affectée à l'avenir en raison de ces changements. </p>
                <p>En acceptant les cookies essentiels, vous autorisez l'utilisation de ces cookies tiers.
                <br><span style="font-Size: 12px">Si vous fermer la fenêtre, le widget Instagram ne pourra pas s'afficher.</span> </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                <button type="button" class="btn btn-primary" id="acceptCookies">Accepter</button>
            </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>