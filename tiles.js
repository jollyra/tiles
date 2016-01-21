var T = {
	readStick: function readStick(stick, xsize, ysize) {
		if (xsize * ysize !== stick.length) throw "Size does not check out";
		this.stick = stick;
		this.xsize = xsize;
		this.ysize = ysize;
	},

	getTile: function getTile(x, y) {
		this.boundsCheck(x, y);
		var tileIdx = y * this.xsize + x;
		return this.stick[tileIdx];
	},

	setTile: function setTile(x, y, val) {
		this.boundsCheck(x, y);
		var tileIdx = y * this.xsize + x;
		return this.stick[tileIdx] = val;
	},

	boundsCheck: function boundsCheck(x, y) {
		if (x < 0 || x >= this.xsize) throw RangeError();
		if (y < 0 || y >= this.ysize) throw RangeError();
	}
};
