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

		it('should throw because of bad dimensions', function () {
			var stick = ['0','0','0','0','0','8','0','0','0'];
			var tiles = Object.create(T);
			var xsize = 4;
			var ysize = 3;
			var fn = function () {
				tiles.readStick(stick, xsize, ysize);
			};
			expect(fn).to.throwException(/Size does not check out/);
		});
		it('should throw because of bad dimensions', function () {
			var stick = ['0','0','0','0','0','8','0','0','0'];
			var tiles = Object.create(T);
			var xsize = 2;
			var ysize = 2;
			var fn = function () {
				tiles.readStick(stick, xsize, ysize);
			};
			expect(fn).to.throwException(/Size does not check out/);
		});
	});

	describe('#getTile()', function () {
		it('should return the last tile in a square stick', function () {
			tiles.readStick(stick, xsize, ysize);
			expect(tiles.getTile(2,2)).to.be('9');
		});
	});
});
