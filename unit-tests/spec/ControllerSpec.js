/*global describe: false, toString: false, beforeEach: false, it: false, HATEOAS_CONSOLE: false, expect: false */
TICTACTOE = {};
TICTACTOE.controller = function(){
		return{getCurrentPlayer:function(){
			return "0";
		}}
	};

describe("Controller", function () {
	"use strict";	
	var controllerFactory = TICTACTOE.controller;
	
	describe("getCurrentPlayer", function () {
	
		
		
		it("should start with 0", function () {
		
			var controller = controllerFactory();
			var player = controller.getCurrentPlayer();
						
			expect(player).toEqual("0");
		});	
		
		
	});
});
