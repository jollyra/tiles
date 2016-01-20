var assert = require('assert');
var Tiles = require('../tiles');

describe('tiles', function() {
	describe('#init()', function () {
		it('should return a stick with the specified size', function () {
			var tiles = Object.create(Tiles);
			console.log(tiles);
			tiles.init(3);
			console.log(tiles);
			assert.equal(map.stick.length === 9, true);
		});
	});

	describe('#getTile()', function () {
		it('should return the tile 8 at location (1,2)', function () {
			debugger;
			var map = tiles(3);
			map.stick = ['0','0','0','0','0','8','0','0','0'];
			console.log("@@@", map);
			var tile = map.getTile(1,2);
			console.log("@@@", tile);
			assert( tile === '8');
		});
	});
});
