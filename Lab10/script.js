// Week 10  Question 6 Aidan Kearney
//Create a grocery list application where users can add and remove items from a list. The list should be //displayed as a bulleted unordered list

let shoppingList=[];
function listShopping(){
	for (i = 0; i < shoppingList.length; i++)
		document.getElementById("main").innerHTML += "<li>"+ shoppingList[i]+": " + (i) +"</li>";
}
function addToEnd(){
	shoppingList.push(prompt("Enter item"));
		// alert("Removing "+shoppingList.push());
		document.getElementById("main").innerHTML += "<li>"+ shoppingList[i]+": " + (i) +"</li>";
		i++;  //Needed to add this, When adding more than one item to the list.
	// console.table(shoppingList);
	
	
}
function removeFromEnd(){
	
	shoppingList.splice(prompt("Enter item to remove"), 1)
	document.getElementById("main").innerHTML = "";  //Looking for a way to to refresh inner html, without this the list was just being appended.
	for (i = 0; i < shoppingList.length; i++)
	document.getElementById("main").innerHTML += "<li>"+ shoppingList[i]+": " + (i) +"</li>";


	// console.table(shoppingList);
	/* document.getElementById("main").innerHTML = ""; 
	// $('#mydiv').load(document.URL +  ' #mydiv');
	/* location.reload(); */
	
	
	//Code trying to refresh or update the inner html
			// for (i = 0; i < shoppingList.length; i++)
			// document.writeln((i+1) + ": " + shoppingList[i]);
			// for (i = 0; i < shoppingList.length; i++)
			// document.writeln((i+1) + ": " + shoppingList[i]);
			// document.getElementById("main").innerHTML += "<li>"+ shoppingList[i]+": " + (i) +"</li>";
			// window.location.reload();
			// window.setInterval("main()", 20000);

}
//Code trying to refresh or update the inner html
// function reload(){
    // var container = document.getElementById("main");
    // var content = container.innerHTML;
    // container.innerHTML= content; 
   // this line is to watch the result in console , you can remove it later	
    // console.log("Refreshed"); 
// }
        