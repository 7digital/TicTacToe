var TICTACTOE = TICTACTOE || {};
TICTACTOE.umpire = function(){
        var winningCombos = [
				[[0,0],[1,1],[2,2]],
				[[2,0],[1,1],[0,2]],
				[[0,1],[1,1],[2,1]],
				[[0,0],[1,0],[2,0]],
				[[0,2],[1,2],[2,2]],
				[[0,0],[0,1],[0,2]],
				[[1,0],[1,1],[1,2]],
				[[2,0],[2,1],[2,2]]
			],
			checkCells = function(cell1, cell2, cell3){
				return (cell1===cell2)&&(cell2===cell3)&&(cell3!==undefined);
			};
		return{
			checkForWinner : function(board) {
			return winningCombos.some(
				function(winningCombo){
						var cell1 = board[winningCombo[0][0]][winningCombo[0][1]], 
							cell2 = board[winningCombo[1][0]][winningCombo[1][1]],
							cell3 = board[winningCombo[2][0]][winningCombo[2][1]];
						return checkCells(cell1,cell2,cell3);
					})
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
        it("has a winner if board has 3 in a row diagonally tlbr", function(){      
            var board = [['X',,],[,'X',],[,,'X']];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(true);
        });
		it("has a winner if board has 3 in a row diagonally trbl", function(){      
            var board = [[,,'X'],[,'X',],['X',,]];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(true);
        });
		it("has a winner if board has 3 in a row horizontal top", function(){      
            var board = [['X',,],['X',,],['X',,]];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(true);
        }); 
		it("has a winner if board has 3 in a row horizontal middle", function(){      
            var board = [[,'X',],[,'X',],[,'X',]];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(true);
        });
		it("has a winner if board has 3 in a row horizontal bottom", function(){      
            var board = [[,,'X'],[,,'X'],[,,'X']];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(true);
        }); 
		it("has a winner if board has 3 in a row vertical left", function(){      
            var board = [['X','X','X'],[,,],[,,]];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(true);
        }); 
		it("has a winner if board has 3 in a row vertical middle", function(){      
            var board = [[,,],['X','X','X'],[,,]];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(true);
        });
		it("has a winner if board has 3 in a row vertical right", function(){      
            var board = [[,,],[,,],['X','X','X']];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(true);
        });
        it("has not a winner if board has not 3 in a row", function(){      
            var board = [['X',,],[,,],['X',,'X']];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(false);
        });
		it("has a winner if board has 3 in a row", function(){      
            var board = [['X',,],[,,],['X',,'X']];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(false);
        });
	});
	
});
