module.exports = function (size) {
	var stick = [];
	for(var i = 0; i < size * size; i++) {
		stick.push(0);
	}
	return {
		stick: stick,
		getTile: function getTile(x, y) {
			var tileIdx = y * this.size + x;
			return this.stick[tileIdx];
		},
		setTile: function getTile(x, y, val) {
			var tileIdx = y * this.size + x;
			return this.stick[tileIdx] = val;
		}
	};
}
