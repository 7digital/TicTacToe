var TICTACTOE = TICTACTOE || {};
TICTACTOE.umpire = function(){
		return{
			checkForWinner : function(board) {
				return true;
			}
		}
	};

describe("Umpire", function () {
	"use strict";	
	var umpire;
	beforeEach(function(){
		umpire = TICTACTOE.umpire();
	});

	describe("checkForWinner", function () {        
        it("has a winner if board has 3 in a row", function(){      
            var board = [['X',,],[,'X',],[,,'X']];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(true);
        });        
	});
	
});
