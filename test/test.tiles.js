describe('tiles', function() {
	describe('#readStick()', function () {
		it('should read a stick and record dimensions', function () {
			var stick = ['0','0','0','0','0','8','0','0','0'];
			var tiles = Object.create(T);
			var xsize = 3;
			var ysize = 3;
			tiles.readStick(stick, xsize, ysize);
			expect(tiles.xsize).to.be(3);
			expect(tiles.ysize).to.be(3);
			expect(tiles.stick.length).to.be(9);
		});
	});
});
