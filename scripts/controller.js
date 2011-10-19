var TICTACTOE = TICTACTOE || {};
TICTACTOE.controller = function(umpire){
	var currentPlayer = "0",
		board = [[],[],[]],
		gameOver = false,
		turnsPlayed = 0;
	return {
		reset : function() {
			board = [[],[],[]];
			turnsPlayed = 0;
			gameOver = false;
			currentPlayer = "0";
			return { message : "Player 0's turn" };
		},
	
		play : function(x, y) {	
			if (gameOver){
				throw{name: "Game has ended"}
			}
		
			if (x > 2 || x < 0) {
				throw {name: "Invalid square"};
			}
			if (y > 2 || y < 0) {
				throw{name: "Invalid square"};
			}
			
			if (board[x][y]) {
				throw{name: "Square already played"};
			}
			
			turnsPlayed +=1;

			board[x][y] = currentPlayer;
			
            var result = { playedBy : currentPlayer };
            
			var hasAWinner = umpire.checkForWinner(board); 
			if (hasAWinner) {				
				gameOver = true;
                result.message = "Player " + currentPlayer + " rules!";
                return result;
			}
			
			if (turnsPlayed >= 9){
				gameOver = true;
				result.message = "Game is a draw";
                return result;
			}
						
			currentPlayer = currentPlayer === "0" ? "X" : "0";
			
            result.message = "Player " + currentPlayer + "'s turn";
            return result;
		}
	};
};