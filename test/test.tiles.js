describe('tiles', function() {
	describe('#init()', function () {
		it('should return a stick with the specified size', function () {
			var tiles = Object.create(T);
			tiles.init(3);
			expect(tiles.stick.length).to.be(9);
		});
	});

	describe('#getTile()', function () {
		xit('should return the tile 8 at location (1,2)', function () {
			var map = tiles(3);
			map.stick = ['0','0','0','0','0','8','0','0','0'];
			console.log("@@@", map);
			var tile = map.getTile(1,2);
			console.log("@@@", tile);
			assert( tile === '8');
		});
	});
});
