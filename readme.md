---
title: 'Rapport - TP2 - IFT3225'
---

Rapport TP2 - Technologie de l'Internet
=======================================

<div id="infos">

[Nom: ]{.bold}Jonathan Caspar

[Matricule: ]{.bold}20059041

[Courriel: ]{.bold}jonathan.caspar@umontreal.ca

</div>

Choix de représentation :
-------------------------

------------------------------------------------------------------------

<div class="presentation-box">

La présentation du jeu est largement inspirée du jeu officiel
[2048](http://gabrielecirulli.github.io/2048/) de Gabriele Cirulli
notamment pour les couleurs utilisées.

<div id="box1">

<div>

J'ai fait le choix d'afficher la grille de jeu dans un élement
[table]{.bold} avec une largeur/hauteur de cases fixée à [100px]{.bold}.

Le pattern qui définit le nombre de lignes/colonnes de [table]{.bold}
est défini en Javascript (Game.js) en fonction de la taille de grille
fourni en paramètres lors de l'instanciation de [Game]{.bold}.

La valeur des tuiles est représentée au travers des classes auxquelles
elles sont associées pour facilement adapter l'affichage des tuiles en
CSS. Toutes les tuiles sont de classe CSS [tile]{.bold}. Si elles
n'appartiennent à aucune autre classe CSS, elles sont considérées comme
[vides]{.bold}.\
Auquel cas, elles sont aussi de classes CSS [tile-X]{.bold} (avec
[X]{.bold} = la valeur de la tuile).

De plus, la [vue]{.bold} a été séparée du [modèle]{.bold} : le script
Javascript (Game.js) utilise une représentation interne sous forme de
tableau bi-dimensionnel (contenant des objets Tile) pour calculer et
stocker les données liées aux tuiles.

Un objet Tile possède notamment un attribut [merged]{.bold} qui définit
si celui ci a récemment été créée à la suite d'une fusion entre deux
autres Tile.

</div>

![2048 game user interface](img/2048-UI.png)

</div>

Cela permet ainsi d'éviter d'agréger toutes les tuiles de valeur
similaire d'un seul coup et de restreindre la fusion de tuiles (au cours
d'un mouvement) aux tuiles qui n'ont pas encore été fusionnées.

[Par exemple, un mouvement vers la gauche de
]{}![\[4\]\[4\]\[4\]\[4\]](img/4tiles.png){.merging-tiles} [doit
donner]{} ![\[8\]\[8\]\[ \]\[ \]](img/8tiles.png){.merging-tiles} [et
non]{} ![\[16\]\[ \]\[ \]\[ \]](img/16tiles.png){.merging-tiles}.

Lorsque les calculs sont terminées, on fait appel à
[updateView()]{.bold} pour mettre à jour la vue (i.e.
[\#game-container]{.bold})

Lorsqu'un statut de terminaison de jeu est détecté, un message
d'information transparent vient s'apposer sur la grille de jeu afin
d'informer le joueur de son score et lui proposer de recommencer une
partie. Le déplacement des tuiles est également désactivé.

Cette boîte de message ([\#message-wrapper]{.bold}) est présente dans le
fichier HTML mais reste cachée jusqu'à ce que le script Javascript la
fasse apparaître.

<div id="box2">

<div>

Lorsque le joueur réussit à former une tuile 2048 :

![winning message](img/win-message.png)

</div>

<div>

Lorsque le joueur ne peut plus déplacer de tuiles avant d'atteindre une
tuile 2048 :

![game-over message](img/game-over-message.png)

</div>

</div>

Pour finir, ce choix de représentation de l'information en interne
(grâce à un tableau 2D) permet d'éviter aux joueurs de "tricher" en
modifiant directement le code HTML (et donc la valeur des tuiles)
puisque cela aurait été rendu possible dans le cas où la représentation
des données liées aux tuiles étaient stockées et lues directement dans
le DOM.

</div>

Ce que j'ai appris :
--------------------

------------------------------------------------------------------------

<div class="presentation-box">

-   La modification directe du contenu HTML d'un élement grâce à
    l'attribut "innerHTML"
-   Interaction avec CSS depuis JS via l'utilisation de "setAttribute"
    ou "element.style.x"
-   Passage d'éléments du DOM en paramètre (passage de "document" pour
    instancer [Game]{.bold})

</div>

Liens vers le code source :
---------------------------

------------------------------------------------------------------------

<div class="presentation-box">

\
[Le jeu 2048 est disponible à cette [adresse](2048-game.html).]{.bold
.border}

\
Le projet est organisée de la manière suivante:

-   img/ (images du rapport)
    -   [2048-UI.png](img/2048-UI.png)
    -   [game-over-message.png](img/game-over-message.png)
    -   [win-message.png](img/win-message.png)
    -   [4tiles.png](img/4tiles.png)
    -   [8tiles.png](img/8tiles.png)
    -   [16tiles.png](img/16tiles.png)
-   js/
    -   [App.js](js/App.js) (script principal appelé au chargement du
        DOM pour instancier Game avec le paramètre "size")
    -   [Game.js](js/Game.js) (logique du jeu 2048)
    -   [Tile.js](js/Tile.js) (représentation d'une tuile)
    -   [utils.js](js/utils.js) (script avec fonctions utilitaires, dans
        mon cas, il n'y a que celle qui permet de créer un tableau
        bi-dimensionnel initialisé avec une nouvelle instance d'une
        classe d'objet passée en paramètres)
-   styles/
    -   [2048-game-style.css](styles/2048-game-style.css) (style
        d'affichage de l'application (tuiles, compteur, etc...))
-   [2048-game.html](2048-game.html) (la vue du jeu HTML)
-   [index.html](index.html) (le présent rapport)

</div>
