
var tiles = {
	stick: [],
	size: 0,
	init: function init(size) {
		this.size = size;
		this.stick = [];
		for(var i = 0; i < size * size; i++) {
			stick.push(0);
		}
	},
	getTile: function getTile(x, y) {
		var tileIdx = y * this.size + x;
		return this.stick[tileIdx];
	},
	setTile: function getTile(x, y, val) {
		var tileIdx = y * this.size + x;
		return this.stick[tileIdx] = val;
	}
};

module.exports = tiles;
