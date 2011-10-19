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
		
		describe("returns next player", function () {
		
			it("should return 'Player X's turn' if it's player X's turn next", function() {
				var result = controller.play(1, 1);	
				expect(result).toEqual("Player X's turn");
			});
			
			it("should return 'Player 0's turn' if it's player 0's turn next", function() {
				var result = controller.play(1, 1);	
				result = controller.play(1, 2);	
				expect(result).toEqual("Player 0's turn");
			});

		});
		
		describe("draw", function(){
			it("should return expected message if game is drawn", function(){
				var result;
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < 3; j++) {
						result = controller.play(i, j);
					}
				}
				expect(result).toEqual("Game is a draw");
			});	
		});
		
		describe("reset", function(){
			it("should start a new game when reset", function(){
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < 3; j++) {
						controller.play(i, j);
					}
				}
				controller.reset();
				controller.play(1,2);
			});	
			
			it("should set current player to 0 when game is reset", function(){
				controller.play(1,2);
				var currentPlayer =                   controller.reset();
				expect(currentPlayer).toEqual("Player 0's turn");
				currentPlayer = controller.play(2,2);
				expect(currentPlayer).toEqual("Player X's turn");
			});	
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
				controller.play(1, 1);
				expect(function() {					
					controller.play(1, 1);
				}).toThrow({name: "Square already played"});
			});
			
			it("should throw an exception if you try to play on a finished game", function(){
				umpire.checkForWinner = function() {
                    return true;
                }
				controller.play(1, 1);
				expect(function() {					
					controller.play(1, 2);
				}).toThrow({name: "Game has ended"});
			});
			
			it("should throw an exception if you try to play on full board", function(){
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < 3; j++) {
						controller.play(i, j);
					}
				}
				expect(function() {					
					controller.play(1, 2);
				}).toThrow({name: "Game has ended"});
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
	
});
