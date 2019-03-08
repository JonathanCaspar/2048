var arrowKey = {37 : "left", 38 : "up", 39 : "right", 40 : "down"};
class Game {
	constructor(size, view) {
		this.size = size;
		this.view = view;
		this.winMessage = this.view.getElementById("win-message");
		this.gameOverMessage = this.view.getElementById("game-over-message");
		this.WIN_VALUE = 2048;

		this.enableKeyboardListener();
		this.setupMessageBox();
		this.setup();
	}

	setup(){
		this.grid = create2DArray(this.size, Tile);
    	this.gameStatus = 'playing';
		this.highestTile = 0;
		this.movementCount = 0;

		//Génération de la grille initiale (HTML)
		let gridHTML = this.view.getElementsByClassName('grid')[0];
		gridHTML.innerHTML = ""; // supprime les anciennes tuiles
		gridHTML.style.gridTemplateRows 	= 'repeat(' + this.size + ',100px)';
    	gridHTML.style.gridTemplateColumns = 'repeat(' + this.size + ',100px)';

    	//Génération des tuiles vides à afficher
		for (var i = 0; i < this.size*this.size; i++) {
			let tile = document.createElement('div');
			tile.setAttribute('class', 'tile');
			gridHTML.appendChild(tile);
		}

		//Génération des 2 premieres tuiles aléatoires
		this.generateRandomTile();
		this.generateRandomTile();

		//Remise à 0 du compteur
		let nbMovements = this.view.getElementById('movement-counter');
		nbMovements.innerHTML = 0;

		this.updateView();
	}

	getEmptyTiles() {
		let emptyTiles = [];

		for (var i = 0; i < this.grid.length; i++) {
			for (var j = 0; j < this.grid[i].length; j++) {
				let tile = this.grid[i][j];
				if(tile.val == undefined) emptyTiles.push(tile);
			}
		}

		return emptyTiles;
	}

	getTile(x, y){
		return this.grid[x][y];
	}

	getNearTile(x, y, direction){
		switch(direction){
			case 'left':
				if(y==0) return undefined;
				else return this.getTile(x,y-1);

			case 'up':
				if(x==0) return undefined;
				else return this.getTile(x-1,y);

			case 'right':
				if(y==this.size-1) return undefined;
				else return this.getTile(x,y+1);

			case 'down':
				if(x==this.size-1) return undefined;
				else return this.getTile(x+1,y);
		}
	}

	setTile(x, y, value, merged){
		this.grid[x][y].set(x, y, value, merged);
	}

	removeTile(x, y){
		this.setTile(x, y, undefined);
	}

	generateRandomTile(){
		let emptyTiles = this.getEmptyTiles();

		if(emptyTiles.length > 0) {
			let randomTile  = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
			let randomValue = Math.pow(2, Math.floor(Math.random() * 2) + 1); //2 ou 4 (2^1 ou 2^2);
			let x = randomTile.x 
			let y = randomTile.y;

			this.setTile(x, y, randomValue);
		}
	}

	resetMergeStatus(){
		for (var i = 0; i < this.grid.length; i++) {
			for (var j = 0; j < this.grid[i].length; j++) {
				let tile = this.grid[i][j];

				if(tile != undefined){
					tile.merged = false;
				}
			}
		}
	}

	shiftAndMergeFrom(x, y, direction, gameOverCheck = false){
		var tile 	 = this.getTile(x, y);
		var nearTile = this.getNearTile(x, y, direction);

		if(tile.val != undefined){ // Tuile avec valeur à déplacer ?

			while(nearTile != undefined){
				if(nearTile.val == undefined){
					this.setTile(nearTile.x, nearTile.y, tile.val);
					this.removeTile(tile.x, tile.y);
				}
				else if(tile.val == nearTile.val){ // merging
					if(!(tile.merged || nearTile.merged)){
						let mergedVal = tile.val*2;
						if(mergedVal > this.highestTile && !gameOverCheck) {
							this.highestTile = mergedVal;
							if(mergedVal >= this.WIN_VALUE) this.gameStatus = 'win';
						}

						this.setTile(nearTile.x, nearTile.y, mergedVal, true);
						this.removeTile(tile.x, tile.y);
					}
				}
				
				 //efface la tuile actuelle
				tile = nearTile;
				nearTile = this.getNearTile(tile.x, tile.y, direction);
			}
		}

		this.resetMergeStatus();
	}
	
	move(direction, gameOverCheck = false) {
		if(this.gameStatus == 'playing'){
			var prevGrid = _.cloneDeep(this.grid); // copie de la configuration du jeu avant le déplacement

			switch(direction){
				case 'left':
					for (var i = 0; i < this.grid.length; i++) {					
						for (var j = 1; j < this.grid.length; j++) {
							this.shiftAndMergeFrom(i, j, direction, gameOverCheck);
						}
					}
					break;

				case 'up':
					for (var j = 0; j < this.grid.length; j++) {					
						for (var i = 0; i < this.grid.length; i++) {
							this.shiftAndMergeFrom(i, j, direction, gameOverCheck);
						}
					}
					break;

				case 'right':
					for (var i = 0; i < this.grid.length; i++) {					
						for (var j = this.grid.length-1; j >= 0; j--) {
							this.shiftAndMergeFrom(i, j, direction, gameOverCheck);
						}
					}
					break;

				case 'down':
					for (var j = 0; j < this.grid.length; j++) {					
						for (var i = this.grid.length-1; i >= 0; i--) {
							this.shiftAndMergeFrom(i, j, direction, gameOverCheck);
						}
					}
					break;
			}
			
			// le jeu a t-il changé de configurations après le déplacement ?
			if(!_.isEqual(prevGrid, this.grid)) {
				// n'incrémente pas le compteur si il s'agit d'une vérification de mouvements par isGameOver
				if(!gameOverCheck) this.movementCount++; 
				this.generateRandomTile();
			}
		}
	}

	isGameOver(){
		var directions = ['left', 'up', 'right', 'down'];
		var initialGrid = _.cloneDeep(this.grid); //sauvegarde la configuration initiale
		var isOver = false;

		//on vérifie si les 4 mouvements modifient la grille
		for (var i = 0; i < directions.length; i++) {
			this.move(directions[i], true);
		}

		//si la grille est restée la même alors on ne peut plus bouger
		if(_.isEqual(initialGrid, this.grid)) isOver = true;

		//restauration de la grille initiale
		this.grid = initialGrid;

		return isOver;
	}

	// Vues
	updateView() {
		var tiles = this.view.getElementsByClassName('tile');
		var nbMovements = this.view.getElementById('movement-counter');

		// Mise à jour des tuiles
		for (var i = 0; i < this.grid.length; i++) {
			for (var j = 0; j < this.grid[i].length; j++) {
				let tile = this.getTile(i, j);
				let tilePosition = this.size*i +j;

				// Case vide
				if(tile.val == undefined){
					tiles[tilePosition].setAttribute('class', 'tile');
					tiles[tilePosition].innerHTML = '';
				}
				// Case avec valeur
				else{
					tiles[tilePosition].setAttribute('class', 'tile tile-' + tile.val);
					tiles[tilePosition].innerHTML = '<span>' + tile.val + '</span>';
				}
			}
		}

		// Mise à jour du compteur
		nbMovements.innerHTML = this.movementCount;

		// Après update de l'affichage: vérifier si le jeu n'est pas terminé
		if(this.gameStatus == 'win') { // option 1 : 2048 atteint
			this.showHideWinMessage();
		}
		else if(this.isGameOver()){ // option 2 : aucun mouvement possible
			this.showHideGameOverMessage();
		}
	}

	//Initialise l'apparence des boites de message et leurs liens d'écoute (bouton Recommencer)
	setupMessageBox(){
		let messageWrapper = this.view.getElementById('message-wrapper');
		let restartButtons = this.view.getElementsByClassName('restart-button');
		let gridHTML	   = this.view.getElementsByClassName('grid')[0];

		if(messageWrapper != undefined && gridHTML != undefined){
			let newSize = (this.size*100 + (this.size+1)*12) + "px";
			messageWrapper.style.width = newSize;
			messageWrapper.style.height = newSize;
		}

		if(restartButtons != undefined){
			for (var i = 0; i < restartButtons.length; i++) {
				let game = this;
				restartButtons[i].onclick = function(){
					// Masquer les messages
					game.showHideWinMessage(false);
					game.showHideGameOverMessage(false);
					// Réinitialiser le tout
					game.setup();
				}
			}
		}
	}

	showHideWinMessage(display = true){
		let winMessage = this.view.getElementById("win-message");
		if(winMessage != undefined){
			if(display){
				winMessage.style.display = 'flex';
				this.view.getElementById('win-movements').innerHTML = this.movementCount;
			}
			else{
				winMessage.style.display = 'none';
			}
		}
	}

	showHideGameOverMessage(display = true){
		let gameOverMessage = this.view.getElementById("game-over-message");
		if(gameOverMessage != undefined){
			if(display){
				gameOverMessage.style.display = 'flex';

				this.view.getElementById('lose-movements').innerHTML = this.movementCount;
				this.view.getElementById('lose-max-tile').innerHTML = this.highestTile;

			}
			else{
				gameOverMessage.style.display = 'none';
			}
		}
	}

	enableKeyboardListener(){
		let game = this;
		this.view.onkeydown = function(e) {
			var key = e.keyCode ? e.keyCode : e.which;
			
			if(key in arrowKey){
				game.move(arrowKey[key]);
				game.updateView();
			}
		}
	}
}