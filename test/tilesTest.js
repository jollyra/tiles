var assert = require('assert');
var tiles = require('../tiles');

describe('tiles', function() {
	describe('#init()', function () {
		it('should return a stick with the specified size', function () {
			var tiles = Object.create(tiles);
			var stick = tiles.init(3);
			assert.equal(stick.length === 3, true);
		});
	});
});
