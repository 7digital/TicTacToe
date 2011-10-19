var TICTACTOE = TICTACTOE || {};
TICTACTOE.umpire = function(){
        var winningCombos = [
				[{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}],
				[{x: 2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}],
				[{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
				[{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}],
				[{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}],
				[{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}],
				[{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}],
				[{x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}]
			],
			getCell = function(board, point){
				return board[point.x][point.y];
				},
			checkCells = function(cell1, cell2, cell3){
				return (cell1===cell2)&&(cell2===cell3)&&(cell3!==undefined);
			};
		return{
			checkForWinner : function(board) {
			return winningCombos.some(
				function(winningCombo){
						var cell1 = getCell(board,winningCombo[0]), 
							cell2 = getCell(board,winningCombo[1]),
							cell3 = getCell(board,winningCombo[2]);
						return checkCells(cell1,cell2,cell3);
					})
				}      
			}
	};