var TICTACTOE = TICTACTOE || {};
TICTACTOE.umpire = function(){
        var checkRows = function(board){return false;}
        var checkColumns = function(board){return false;}
        var checkDiagonals = function(board){ 
            return (board[0][0]===board[1][1])&&(board[1][1]===board[2][2])&&(board[0][0]!==undefined);            
        };
		return{
			checkForWinner : function(board) {
				var winner = checkRows(board) || checkColumns(board) || checkDiagonals(board);
                return winner;
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
        it("has not a winner if board has not 3 in a row", function(){      
            var board = [['X',,],[,,,],['X',,'X']];
            var result = umpire.checkForWinner(board);
            expect(result).toEqual(false);
        });        
	});
	
});
