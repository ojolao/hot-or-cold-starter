
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
  	var counter = 0;

  	

	$("input#guessButton").click(function(e){
		e.preventDefault();
		var userGuess1 = $("input#userGuess").val();
		var guessDifference = absDifference(compGuess, userGuess1);
		function absDifference (a, b) {
  		return Math.abs(a - b);
  		};
  		counter++;
  		console.log(compGuess);
  		console.log(userGuess1);
  		if (isNaN(+userGuess1) || 1 >= +userGuess1 || +userGuess1 > 100){
  			$("#feedback").html("Please enter a number between 1 and 100");
  		} else if (guessDifference === 0){
  			$("#feedback").html("You guessed exactly right and won the game!");
  		} else if (guessDifference <= 20){
  			$("#feedback").html("you are hot! Keep trying" );
  		} else if (guessDifference > 20){
  			$("#feedback").html("you are cold");
  		};

  		$("#guessList").prepend('<li>' + userGuess1 + '</li>');
  		$("span#count").html(counter);
  		  	})

  	/*---Start a new game---*/
  	$("a.new").click(function(){
  		location.reload();
	});
  		//a new random number is generated;
  		//the feedback is restored to default;
  		//the guess list is emptied
  		//the counter is set to 0
  		
});




