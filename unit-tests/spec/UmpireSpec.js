describe("Umpire", function () {
	"use strict";	
	var umpire;
	beforeEach(function(){
		umpire = TICTACTOE.umpire();
	});

	describe("checkForWinner", function () {
	
		['X','0'].forEach(function(player){
		
			describe(player + " winning", function() {
				it("has a winner if board has 3 in a row diagonally tlbr", function(){      
					var board = [[player,,],[,player,],[,,player]];
					var result = umpire.checkForWinner(board);
					expect(result).toEqual(true);
				});
				it("has a winner if board has 3 in a row diagonally trbl", function(){      
					var board = [[,,player],[,player,],[player,,]];
					var result = umpire.checkForWinner(board);
					expect(result).toEqual(true);
				});
				it("has a winner if board has 3 in a row horizontal top", function(){      
					var board = [[player,,],[player,,],[player,,]];
					var result = umpire.checkForWinner(board);
					expect(result).toEqual(true);
				}); 
				it("has a winner if board has 3 in a row horizontal middle", function(){      
					var board = [[,player,],[,player,],[,player,]];
					var result = umpire.checkForWinner(board);
					expect(result).toEqual(true);
				});
				it("has a winner if board has 3 in a row horizontal bottom", function(){      
					var board = [[,,player],[,,player],[,,player]];
					var result = umpire.checkForWinner(board);
					expect(result).toEqual(true);
				}); 
				it("has a winner if board has 3 in a row vertical left", function(){      
					var board = [[player,player,player],[,,],[,,]];
					var result = umpire.checkForWinner(board);
					expect(result).toEqual(true);
				}); 
				it("has a winner if board has 3 in a row vertical middle", function(){      
					var board = [[,,],[player,player,player],[,,]];
					var result = umpire.checkForWinner(board);
					expect(result).toEqual(true);
				});
				it("has a winner if board has 3 in a row vertical right", function(){      
					var board = [[,,],[,,],[player,player,player]];
					var result = umpire.checkForWinner(board);
					expect(result).toEqual(true);
				});
			});
		});
        
		describe("not winning", function () {
		
			it("returns no winner for an empty board", function(){      
				var board = [[,,],[,,],[,,]];
				var result = umpire.checkForWinner(board);
				expect(result).toEqual(false);
			});
			
			it("has not a winner if board has not 3 in a row", function(){      
				var board = [['X',,'0'],[,'0',],['X','0','X']];
				var result = umpire.checkForWinner(board);
				expect(result).toEqual(false);
			});
			
			it("returns no winner for a drawn board", function(){      
				var board = [['X','0','X'],['0','0','X'],['0','X','0']];
				var result = umpire.checkForWinner(board);
				expect(result).toEqual(false);
			});
		});
	});
	
});
