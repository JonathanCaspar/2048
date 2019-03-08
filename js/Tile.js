class Tile {

	constructor(x, y, val = undefined, merged = false){
		this.x = x;
		this.y = y;
		this.val = val;
		this.merged = merged;
	}

	set(x, y, newVal, merged){
		this.x = x;
		this.y = y;
		this.val = newVal;
		this.merged = merged;
	}
}