var assert = require('assert');
var tiles = require('../tiles');

describe('tiles', function() {
	describe('#init()', function () {
		it('should return a stick with the specified size', function () {
			var map = tiles(3);
			assert.equal(map.stick.length === 9, true);
		});
	});
});
