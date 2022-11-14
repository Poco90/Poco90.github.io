function send() {
			var user = prompt("Enter your selection: 0 for rock, 1 for paper, 2 for scissors");
			let computer =  Math.floor(Math.random()*3);
				alert("You picked "+user+" and the computer picked "+computer+".\n 0 for rock, 1 for paper, 2 for scissors");
				// alert(computer);
			if(computer==0&&user ==1){
				alert("You beat the computer with paper against rock");
			}	
			else if (computer==1&&user==2){
				alert("You beat the computer with scissors against paper");
			}	
			else if ((computer==2&&user==0)){
				alert("You beat the computer with rock against scissors");
			}	
			else if ((computer==0&&user==2)){
				alert("Computer beat you with rock against scissors");
			}	
			else if ((computer==1&&user==0)){
				alert("Computer beat you with paper against rock");
			}	
			else if ((computer==2&&user==1)){
				alert("Computer beat you with scissors against paper");
			}	
			else if (computer==user){
				alert("Tied Game!!");
			}
			else{
				alert("Invalid Input, try again");
			}

        }
// }
        