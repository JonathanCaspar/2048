// Initialise un tableau bi-dimensionnel 'size' x 'size' 
// en le remplissant d'instances de 'object'
function create2DArray(size, object) {
	var grid = new Array(size);
	
	for (var i = 0; i < size; i++) {
		grid[i] = new Array(size);
	}

	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			grid[i][j] = new object(i, j);
		}
	}

	return grid;
}