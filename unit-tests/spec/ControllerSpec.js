var TICTACTOE = TICTACTOE || {};
TICTACTOE.controller = function(umpire){
		return{
			currentPlayer : "0",
			
			board : [[],[],[]],
			
			getCurrentPlayer : function() {
					return this.currentPlayer;
				},
							
			play : function(x, y) {
				if (x > 2 || x < 0) {
					throw {name: "Invalid square"};
				}
				if (y > 2 || y < 0) {
					throw{name: "Invalid square"};
				}
				
				if (this.board[x][y]) {
					throw{name: "Square already played"};
				}

				this.board[x][y] = this.currentPlayer;
                
                var hasAWinner = umpire.checkForWinner(this.board); 
                if(hasAWinner) {
                    return "Player " + this.currentPlayer + " rules!";
                }
				
				this.currentPlayer = this.currentPlayer === "0" ? "X" : "0";
				return "Player " + this.currentPlayer + "'s turn";
			}
		}
	};

describe("Controller", function () {
	"use strict";	
	var controller;
    var umpire;
	beforeEach(function(){
        umpire = {
			checkForWinner : function() {
					return false;
				}
        };
		controller = TICTACTOE.controller(umpire);
	});

	describe("play", function () {

		it("should not throw an exception when you play a valid square", function() {
			controller.play(1, 1);		
		});
		
		it("should return 'Player X's turn' if it's player X's turn next", function() {
			var result = controller.play(1, 1);	
			expect(result).toEqual("Player X's turn");
		});
		
		it("should return 'Player 0's turn' if it's player 0's turn next", function() {
			var result = controller.play(1, 1);	
			result = controller.play(1, 2);	
			expect(result).toEqual("Player 0's turn");
		});
		
		describe("fowl", function () {
		
			it("should throw an exception when the square is to the right of the board", function() {
				expect(function() {
					controller.play(4,1);
				}).toThrow({name: "Invalid square"});
			});
			
			it("should throw an exception when the square is to the left of the board", function() {
				expect(function() {
					controller.play(-1,1);
				}).toThrow({name: "Invalid square"});
			});
			
			it("should throw an exception when the square is off the bottom of the board", function() {
				expect(function() {
					controller.play(1,4);
				}).toThrow({name: "Invalid square"});
			});
			
			it("should throw an exception when the square is off the top of the board", function() {
				expect(function() {
					controller.play(1,-1);
				}).toThrow({name: "Invalid square"});
			});
			
			it("should throw an exception when you play a square twice", function() {
				expect(function() {
					controller.play(1, 1);
					controller.play(1, 1);
				}).toThrow({name: "Square already played"});
			});
		});	

        describe("checkForWinner", function () {
            it("asks the umpire if there's a winner after the 1st play is recorded", function(){      
                umpire.checkForWinner = function() {
                    return true;
                }
                var result = controller.play(0, 0);
                expect(result).toEqual("Player 0 rules!");
            });
            
            it("asks the umpire if there's a winner after the 2nd play is recorded", function(){      
                controller.play(0, 0);
                umpire.checkForWinner = function() {
                    return true;
                }
                var result = controller.play(1, 1);
                expect(result).toEqual("Player X rules!");
            });
        });
	});
	
	describe("getCurrentPlayer", function () {		
		
		it("should start with 0", function () {
			var player = controller.getCurrentPlayer();

			expect(player).toEqual("0");
		});
		
		it("should return X after the first move", function () {
			controller.play(0, 0);
			var player = controller.getCurrentPlayer();
						
			expect(player).toEqual("X");
		});
		
		it("should return 0 after the second move", function () {
			controller.play(0, 1);
			controller.play(1, 1);
			var player = controller.getCurrentPlayer();
						
			expect(player).toEqual("0");
		});
		
		
	});
});
