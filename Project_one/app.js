

var flipArray = ["imgs/Demotile.jpg","imgs/Demotile.jpg","imgs/Demotile.jpg","imgs/reptile.jpg","imgs/reptile.jpg","imgs/reptile.jpg",]
console.log([0]);


//this is the array after flipped


var i = flipArray.length, j, temp;
while(--i > 0) {
	j = Math.floor(Math.random() * (i+1));
	temp = flipArray[j];
	flipArray[j] = flipArray[i];
	flipArray[i] = temp;
}
console.log(flipArray);


//this shuffles the array!
// That’s a Fisher-Yates shuffle. It was invented by Ronald Fisher and Frank Yates in 1938,
//  originally as a method for researchers to mix stuff up with pencil and paper.

// pesudo code: i need to hide each box on click
// i need to to take an index from the shuffled fliparray and
// show it after click





var closedOne = document.querySelector('#closedOneImg')
closedOne.addEventListener("click", function() {
	closedOne.setAttribute("src", flipArray[0]);
	if (closedOne === "" ) {
	console.log("Democrat Party DRINK!");
}
else

			console.log("Republican Party DRINK!"); {
		}


})

var closedTwo = document.querySelector('#closedTwoImg')
closedTwo.addEventListener("click", function() {
	closedTwo.setAttribute("src", flipArray[1]);
})

var closedThree = document.querySelector('#closedThreeImg')
closedThree.addEventListener("click", function() {
closedThree.setAttribute("src", flipArray[2]);
})

var closedFour = document.querySelector('#closedFourImg')
closedFour.addEventListener("click", function() {
closedFour.setAttribute("src", flipArray[3]);
})


var closedFive = document.querySelector('#closedFiveImg')
closedFive.addEventListener("click", function() {
closedFive.setAttribute("src", flipArray[4]);
});

var closedSix = document.querySelector('#closedSixImg')
closedSix.addEventListener("click", function() {
closedSix.setAttribute("src", flipArray[5]);
});



// console.log(changeImage);
// }
// // which funtion to use????
// var newsrc = (flipArray[0]);
//
// function changeImage() {
//   if ( newsrc == "flipArray[0]" ) {
//     document.images["pic"].src = "/images/program/js/forms/mars.jpg";
//     document.images["pic"].alt = "Mars";
//     newsrc  = "earth.jpg";
//   }
//   else {
//     document.images["pic"].src = "/images/program/js/forms/earth.jpg";
//     document.images["pic"].alt = "Earth";
//     newsrc  = "mars.jpg";
//   }
// }

// function changeImage() {
// 	var closedOne = document.querySelector(flipArray);
// 	if (closedOne.src == "imgs/closed.jpg") {
// 		closedOne.src == ""
// 	}
// }





//
//
// 	var resetGame = function() {
//
//
// 	}
  //pass in the array of tiles
