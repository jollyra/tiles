describe('tiles', function() {
    describe('#fromStick()', function () {

        it('should read a stick and record dimensions', function () {
            var stick = ['0','0','0','0','0','8','0','0','0'];
            var tiles = Object.create(T);
            var xsize = 3;
            var ysize = 3;
            tiles.fromStick(stick, xsize, ysize);
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
                tiles.fromStick(stick, xsize, ysize);
            };
            expect(fn).to.throwException(/Size does not check out/);
        });
        it('should throw because of bad dimensions', function () {
            var stick = ['0','0','0','0','0','8','0','0','0'];
            var tiles = Object.create(T);
            var xsize = 2;
            var ysize = 2;
            var fn = function () {
                tiles.fromStick(stick, xsize, ysize);
            };
            expect(fn).to.throwException(/Size does not check out/);
        });
    });

    describe('#zeros()', function () {
        it('should initialize a stick full of zeros', function () {
            var tiles = Object.create(T);
            var xsize = 4;
            var ysize = 10;
            tiles.zeros(xsize, ysize);
            expect(tiles.stick.length).to.be(40);
        });

        it('should initialize a square stick full of zeros', function () {
            var tiles = Object.create(T);
            var xsize = 2;
            var ysize = 2;
            tiles.zeros(xsize, ysize);
            expect(tiles.stick.length).to.be(4);
            expect(tiles.stick[0]).to.be(0);
            expect(tiles.stick[1]).to.be(0);
            expect(tiles.stick[2]).to.be(0);
            expect(tiles.stick[3]).to.be(0);
        });
    });

    describe('for a square stick', function () {
        var stick = ['a','b','c'
                    ,'e','f','g'
                    ,'i','j','k'];
        var tiles = Object.create(T);
        var xsize = 3;
        var ysize = 3;
        tiles.fromStick(stick, xsize, ysize);

        describe('#getTile()', function () {
            it('should return the last tile in a stick', function () {
                expect(tiles.getTile(2,2)).to.be('k');
            });

            it('should return the first tile in a stick', function () {
                expect(tiles.getTile(0,0)).to.be('a');
            });

            it('should return an arbitrary tile in a stick', function () {
                expect(tiles.getTile(1,2)).to.be('j');
            });

            it('should throw range error when y less than 0', function () {
                var fn = function () {
                    tiles.getTile(4,-1);
                };
                expect(fn).to.throwException(function (e) {
                    expect(e).to.be.a(RangeError);
                });
            });
        });

        describe('#setTile()', function () {
            it('should change a tile in a stick', function () {
                tiles.setTile(1,2,'x');
                expect(tiles.getTile(1,2)).to.be('x');
            });
        });
    });

    describe('for a non-square stick', function () {
        var stick = ['a','b','c','d'
                    ,'e','f','g','h'
                    ,'i','j','k','l'];
        var tiles = Object.create(T);
        var xsize = 4;
        var ysize = 3;

        describe('#getTile()', function () {
            tiles.fromStick(stick, xsize, ysize);

            it('should return the last tile in a stick', function () {
                expect(tiles.getTile(3,2)).to.be('l');
            });

            it('should return the first tile in a stick', function () {
                expect(tiles.getTile(0,0)).to.be('a');
            });

            it('should return an arbitrary tile in a stick', function () {
                expect(tiles.getTile(1,2)).to.be('j');
            });

            it('should throw range error when x greater than xsize', function () {
                var fn = function () {
                    tiles.getTile(4,2);
                };
                expect(fn).to.throwException(function (e) {
                    expect(e).to.be.a(RangeError);
                });
            });
        });

        describe('#setTile()', function () {
            it('should change a tile in a stick', function () {
                tiles.setTile(3,1,'x');
                expect(tiles.getTile(3,1)).to.be('x');
            });
            it('should throw range error when y greater than ysize', function () {
                var fn = function () {
                    tiles.setTile(1,7);
                };
                expect(fn).to.throwException(function (e) {
                    expect(e).to.be.a(RangeError);
                });
            });
        });
    });
});
