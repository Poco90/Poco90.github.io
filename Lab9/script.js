function beer(){
	// First attempt at the code, I wasn't happy with the output.
	 // for (i=99; i>=2; i--){
		// document.getElementById("main").innerHTML+="<br />"+i+" bottles of beer on the wall," +i+" bottles of beer, Take one down and pass it around, " +(i-1);
	// }
	// var bb=99;
	// while(bb>0);{
	// document.getElementById("main").innerHTML+="<br />"+i+" bottles of beer on the wall," +i+" bottles of beer, Take one down and pass it around, "bb--;
	// }

  var bottles;
  var bottlesRem;
  for (i = 99; i >= 1; i--) {
    if (i == 1) {
      bottles = "bottle";
      bottlesRem = "No more bottles of beer on the wall!";
    } else {
      bottles = "bottles";
      bottlesRem = i - 1 + " bottles of beer on the wall";
    }
	document.getElementById("main").innerHTML+="<br />"+i+ " " + bottles + " of beer on the wall, " +i+ " " + bottles + " of beer. Take one down, pass it around "+bottlesRem;
    } 
    
}
function send() {
			// Maybe I picked this up incorrectly but couldn't get this to work.
			// while (playerScore<=0){
			let playerScore = 0;
			let computerScore = 0;
			let tiedScore = 0;
			for (i = 0; i < 3; i++) {
			var user = prompt("Enter your selection: 0 for rock, 1 for paper, 2 for scissors");
			// Computer guess which changes each time.
			let computer =  Math.floor(Math.random()*3);
				alert("You picked "+user+" and the computer picked "+computer+".\n 0 for rock, 1 for paper, 2 for scissors");
				// alert(computer);
			if(computer==0&&user ==1){
				alert("You beat the computer with paper against rock");
				playerScore++;
			}	
			else if (computer==1&&user==2){
				alert("You beat the computer with scissors against paper");
				playerScore++;
			}	
			else if ((computer==2&&user==0)){
				alert("You beat the computer with rock against scissors");
				playerScore++;
			}	
			else if ((computer==0&&user==2)){
				alert("Computer beat you with rock against scissors");
				computerScore++;
			}	
			else if ((computer==1&&user==0)){
				alert("Computer beat you with paper against rock");
				computerScore++;
			}	
			else if ((computer==2&&user==1)){
				alert("Computer beat you with scissors against paper");
				computerScore++;
			}	
			else if (computer==user){
				alert("Tied Game!!");
				tiedScore++;
			}
			else{
				alert("Invalid Input, try again");
			}

        }
		alert ("Player Scores "+playerScore);
		alert ("Computer Scores "+computerScore);
		alert ("Tied Games "+tiedScore);
			// }
1}

	