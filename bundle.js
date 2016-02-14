(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Tiles = require('./node_tiles.js');
window.T = Tiles;

},{"./node_tiles.js":2}],2:[function(require,module,exports){
module.exports = {
	fromStick: function fromStick(stick, xsize, ysize) {
		if (xsize * ysize !== stick.length) throw "Size does not check out";
		this.stick = stick;
		this.xsize = xsize;
		this.ysize = ysize;
	},

	zeros: function zeros(xsize, ysize) {
		this.xsize = xsize;
		this.ysize = ysize;
		this.stick = [];
		for(var i = 0; i < xsize * ysize; i++) {
			this.stick.push(0);
		}
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

},{}]},{},[1]);
