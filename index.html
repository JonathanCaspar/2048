<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
                      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  
<html xmlns="http://www.w3.org/1999/xhtml">

  <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <title>Rapport - TP2 - IFT3225</title>
    	<link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet"/>
        <style type="text/css">
        	html * {font-family: 'Work Sans', sans-serif;}
        	h1{text-align: center; border: solid;padding: 4px 0; font-size: 20pt;}
        	h2, #infos{padding-left: 15px; margin-bottom: 0;}
        	img{border: solid 1px;border-radius: 25px;margin: 0 auto; display: block;width: 450px;}
        	.presentation-box{padding-left: 30px}
        	body{margin: 0 20%;}
        	#infos > p {margin: 0;}
            .bold {font-weight: bold;}
            .flex-wrapper{display: flex; align-items: center;justify-content: flex-start;}
            .border{border: solid 1px;border-radius: 10px; padding: 6px 10px;}
            .merging-tiles{border: none;border-radius: 6px;width: auto;height: 46px;display: inline;margin: 3px 6px;}
            #merging-tiles-example{display: flex;flex-wrap: wrap;align-items: center;}
            #box1, #box2 {display: flex;align-items: center;justify-content: space-between;}
            #box1 img {width: auto;height: 450px; margin-left: 15px;}
            #box1 p,#box2 p {margin: 30px 0;}
            #box2 p {margin: 20px 90px;text-align: center;}
            #box2 > * {display: flex;flex-direction: column;align-items: center;}
        </style>
  </head>
  <body>
        <h1>Rapport TP2 - Technologie de l'Internet</h1>

    	<div id="infos">
            <p><span class="bold">Nom: </span>Jonathan Caspar</p>
            <p><span class="bold">Matricule: </span>20059041</p>
            <p><span class="bold">Courriel: </span>jonathan.caspar@umontreal.ca</p>
        </div>

        <h2>Choix de représentation :</h2><hr/>
        <div class="presentation-box">
        	<p>La présentation du jeu est largement inspirée du jeu officiel <a href="http://gabrielecirulli.github.io/2048/">2048</a> de Gabriele Cirulli notamment pour les couleurs utilisées.</p> 
        	<div id="box1">
                <div>
                    <p>J'ai fait le choix d'afficher la grille de jeu dans un élement <span class="bold">table</span> avec une largeur/hauteur de cases fixée à <span class="bold">100px</span>.</p> 
                    <p>Le pattern qui définit le nombre de lignes/colonnes de <span class="bold">table</span> est défini en Javascript (Game.js) en fonction de la taille de grille fourni en paramètres lors de l'instanciation de <span class="bold">Game</span>.</p>
                    <p>La valeur des tuiles est représentée au travers des classes auxquelles elles sont associées pour facilement adapter l'affichage des tuiles en CSS. Toutes les tuiles sont de classe CSS <span class="bold">tile</span>. Si elles n'appartiennent à aucune autre classe CSS, elles sont considérées comme <span class="bold">vides</span>. <br/>Auquel cas, elles sont aussi de classes CSS <span class="bold">tile-X</span> (avec <span class="bold">X</span> = la valeur de la tuile).</p>
                    <p>De plus, la <span class="bold">vue</span> a été séparée du <span class="bold">modèle</span> : le script Javascript (Game.js) utilise une représentation interne sous forme de tableau bi-dimensionnel (contenant des objets Tile) pour calculer et stocker les données liées aux tuiles.</p>
                    <p>Un objet Tile possède notamment un attribut <span class="bold">merged</span> qui définit si celui ci a récemment été créée à la suite d'une fusion entre deux autres Tile. </p>

                </div>
                <img src="img/2048-UI.png" alt="2048 game user interface"/>
            </div>

        	

        	<p>Cela permet ainsi d'éviter d'agréger toutes les tuiles de valeur similaire d'un seul coup et de restreindre la fusion de tuiles (au cours d'un mouvement) aux tuiles qui n'ont pas encore été fusionnées. </p>
        	<p id="merging-tiles-example"><span>Par exemple, un mouvement vers la gauche de </span><img class="merging-tiles" src="img/4tiles.png" alt="[4][4][4][4]"/> <span>doit donner</span> <img class="merging-tiles" src="img/8tiles.png" alt="[8][8][ ][ ]"/> <span>et non</span> <img class="merging-tiles" src="img/16tiles.png" alt="[16][ ][ ][ ]"/>.</p>
        	<p>Lorsque les calculs sont terminées, on fait appel à <span class="bold">updateView()</span> pour mettre à jour la vue (i.e. <span class="bold">#game-container</span>)</p>

        	<p>Lorsqu'un statut de terminaison de jeu est détecté, un message d'information transparent vient s'apposer sur la grille de jeu afin d'informer le joueur de son score et lui proposer de recommencer une partie. Le déplacement des tuiles est également désactivé.</p> 
        	<p>Cette boîte de message (<span class="bold">#message-wrapper</span>) est présente dans le fichier HTML mais reste cachée jusqu'à ce que le script Javascript la fasse apparaître.</p>

            <div id="box2">
                <div><p class="bold">Lorsque le joueur réussit à former une tuile 2048 :</p>
                    <img src="img/win-message.png" alt="winning message"/></div>

                <div><p class="bold">Lorsque le joueur ne peut plus déplacer de tuiles avant d'atteindre une tuile 2048 :</p>
                    <img src="img/game-over-message.png" alt="game-over message"/></div>
            </div>

            <p>Pour finir, ce choix de représentation de l'information en interne (grâce à un tableau 2D) permet d'éviter aux joueurs de "tricher" en modifiant directement le code HTML (et donc la valeur des tuiles) puisque cela aurait été rendu possible dans le cas où la représentation des données liées aux tuiles étaient stockées et lues directement dans le DOM.</p>
        </div>

		<h2>Ce que j'ai appris :</h2><hr/>
		<div class="presentation-box">
			<ul>
                <li>La modification directe du contenu HTML d'un élement grâce à l'attribut "innerHTML"</li>
                <li>Interaction avec CSS depuis JS via l'utilisation de "setAttribute" ou "element.style.x"</li>
                <li>Passage d'éléments du DOM en paramètre (passage de "document" pour instancer <span class="bold">Game</span>)</li>
            </ul>
		</div>

		<h2>Liens vers le code source :</h2><hr/>
		<div class="presentation-box">
            <br/>
            <p><span class="bold border">Le jeu 2048 est disponible à cette <a href="2048-game.html">adresse</a>.</span></p>
            <br/>
			<p>Le projet est organisée de la manière suivante:</p>
			 <ul>
			 	<li>
                    img/ (images du rapport)
                    <ul>
                        <li><a href="img/2048-UI.png">2048-UI.png</a></li>
                        <li><a href="img/game-over-message.png">game-over-message.png</a></li>
                        <li><a href="img/win-message.png">win-message.png</a></li>
                        <li><a href="img/4tiles.png">4tiles.png</a></li>
                        <li><a href="img/8tiles.png">8tiles.png</a></li>
                        <li><a href="img/16tiles.png">16tiles.png</a></li>
                    </ul>
                </li>
			 	<li>
                    js/ 
                    <ul>
                        <li><a href="js/App.js">App.js</a> (script principal appelé au chargement du DOM pour instancier Game avec le paramètre "size")</li>
                        <li><a href="js/Game.js">Game.js</a> (logique du jeu 2048)</li>
                        <li><a href="js/Tile.js">Tile.js</a> (représentation d'une tuile)</li>
                        <li><a href="js/utils.js">utils.js</a> (script avec fonctions utilitaires, dans mon cas, il n'y a que celle qui permet de créer un tableau bi-dimensionnel initialisé avec une nouvelle instance d'une classe d'objet passée en paramètres)</li>
                    </ul>
                </li>
			 	<li>
                    styles/
                    <ul>
                        <li><a href="styles/2048-game-style.css">2048-game-style.css</a> (style d'affichage de l'application (tuiles, compteur, etc...))</li>
                    </ul>
                </li>
			 	<li><a href="2048-game.html">2048-game.html</a> (la vue du jeu HTML)</li>
			 	<li><a href="index.html">index.html</a> (le présent rapport)</li>
			 </ul>
		</div>

  </body>

</html>