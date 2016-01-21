var T = {
	readStick: function readStick(stick, xsize, ysize) {
		if (xsize * ysize !== stick.length) throw "Size does not check out";
		this.stick = stick;
		this.xsize = xsize;
		this.ysize = ysize;
	},

	getTile: function getTile(x, y) {
		var tileIdx = y * this.xsize + x;
		return this.stick[tileIdx];
	},

	setTile: function setTile(x, y, val) {
		var tileIdx = y * this.size + x;
		return this.stick[tileIdx] = val;
	}
};
