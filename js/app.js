
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	var compGuess = Math.floor((Math.random() * 100) + 1);
  	

  	

  	

	$("input#guessButton").click(function(e){
		e.preventDefault();
		var userGuess1 = $("input#userGuess").val();
		var guessDifference = absDifference(compGuess, userGuess1);
		function absDifference (a, b) {
  		return Math.abs(a - b);
  	};
  		console.log(compGuess);
  		console.log(userGuess1);
  		if (guessDifference === 0){
  			$("#feedback").html("You guessed exactly right and won the game!");
  		} else if (guessDifference <= 20){
  			$("#feedback").html("you are hot! Keep trying" );
  		} else if (guessDifference > 20){
  			$("#feedback").html("you are cold");
  		};

  		$("#guessList").prepend('<li>' + userGuess1 + '</li>');
  		  	})

  	/*---Start a new game---*/
  	$("a.new").click(function(){

  		
  	});


});


