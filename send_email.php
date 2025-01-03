<?php
require_once 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = CLIENT_EMAIL;
    $subject = "Nouveau message reçu depuis le site";
    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n\n";
    $contenu .= "Message:\n$message\n\n";

    // Gestion du fichier uploadé
    if(isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
        $filename = $_FILES['file']['name'];
        $filetype = $_FILES['file']['type'];
        $filesize = $_FILES['file']['size'];
        $filetmp = $_FILES['file']['tmp_name'];

        // Vérification de la taille du fichier (exemple : limite à 5 Mo)
        if($filesize > 5000000) {
            echo "Le fichier est trop volumineux.";
            exit;
        }

        // Déplacer le fichier uploadé vers un dossier permanent
        $upload_dir = "./uploads/";
        $upload_file = $upload_dir . basename($filename);
        if(move_uploaded_file($filetmp, $upload_file)) {
            $contenu .= "Fichier joint: $filename\n";
            $contenu .= "Lien vers le fichier: http://votre-site.com/$upload_file\n"; //ajout l'url du site final
        } else {
            echo "Erreur lors du téléchargement du fichier.";
            exit;
        }
    }

    $headers = "From: $email";
    
    if (mail($to, $subject, $contenu, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}
?>
