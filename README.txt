STRESS EN STRASS — VERSION INDUSTRIAL DARK TECHNO

STRUCTURE
- index.html : page d'accueil + grille artistes
- artists/severe.html : page artiste SEVERE
- style.css : design global
- assets/ : dossier pour les photos

AJOUTER UNE PHOTO À SEVERE
1. Mets la photo dans assets/
2. Renomme-la severe.jpg
3. Dans artists/severe.html, remplace le bloc :
   <div class="artist-photo large placeholder">...</div>
   par :
   <img class="artist-photo large" src="../assets/severe.jpg" alt="SEVERE" />

AJOUTER UN NOUVEL ARTISTE
1. Duplique artists/severe.html
2. Renomme le fichier : artists/nom-artiste.html
3. Remplace SEVERE par le nom du nouvel artiste
4. Change la bio, les styles, les liens réseaux et le mailto subject
5. Dans index.html, duplique la carte artiste SEVERE dans la section artist-grid
6. Change le lien vers artists/nom-artiste.html

EMAIL BOOKING
Tous les boutons pointent vers : booking@stressenstrass.fr

CONSEIL
Garde cette structure : une page accueil + une page par artiste.
C'est simple, rapide à mettre à jour, et propre pour envoyer un lien aux organisateurs.
