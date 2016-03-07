

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



dem_count = [];
rep_count = [];

function checkCount(){
	console.log("called");
	if (dem_count.length == 3) {
    // alert("DEMS WON!")
    var winning_image = document.getElementById("load-start");
    winning_image.href = "imgs/funny/bottoms.jpg";
    winning_image.click();
	} else if (rep_count.length == 3) {
    // alert("REPS WON!")
    var winning_image = document.getElementById("load-start");
    winning_image.href = "imgs/funny/bottoms.jpg";
    winning_image.click();
	}

}
//check count


var closedOne = document.querySelector('#closedOneImg')
closedOne.addEventListener("click", function() {
	closedOne.setAttribute("src", flipArray[0]);

	if (flipArray[0] === "imgs/Demotile.jpg"){
		document.getElementById('pop-demtile').click();
		dem_count.push("D");
		checkCount();
	}
	else {
		document.getElementById('pop-reptile').click();
    rep_count.push("R");
    checkCount();
	}
	})



var closedTwo = document.querySelector('#closedTwoImg')
closedTwo.addEventListener("click", function() {
	closedTwo.setAttribute("src", flipArray[1]);

	if (flipArray[1] === "imgs/Demotile.jpg"){
			document.getElementById('pop-demtileTwo').click();
			dem_count.push("D");
		  checkCount();
	}
	else {
			document.getElementById('pop-reptileTwo').click();
			rep_count.push("R");
			checkCount();
	}
})

var closedThree = document.querySelector('#closedThreeImg')
closedThree.addEventListener("click", function() {
closedThree.setAttribute("src", flipArray[2]);

if (flipArray[2] === "imgs/Demotile.jpg"){
document.getElementById('pop-demtileThree').click();
	dem_count.push("D");
  checkCount();
}
else {
document.getElementById('pop-reptileThree').click();
rep_count.push("R");
checkCount();
}

})

var closedFour = document.querySelector('#closedFourImg')
closedFour.addEventListener("click", function() {
closedFour.setAttribute("src", flipArray[3]);

if (flipArray[3] === "imgs/Demotile.jpg"){
document.getElementById('pop-demtile').click();
	dem_count.push("D");
  checkCount();
}
else {
document.getElementById('pop-reptile').click();
rep_count.push("R");
checkCount();
}
})


var closedFive = document.querySelector('#closedFiveImg')
closedFive.addEventListener("click", function() {
closedFive.setAttribute("src", flipArray[4]);


if (flipArray[4] === "imgs/Demotile.jpg"){
document.getElementById('pop-demtileTwo').click();
dem_count.push("D");
  checkCount();
}
else {
document.getElementById('pop-reptileTwo').click();
rep_count.push("R");
checkCount();
}
})



var closedSix = document.querySelector('#closedSixImg')
closedSix.addEventListener("click", function() {
closedSix.setAttribute("src", flipArray[5]);


if (flipArray[5] === "imgs/Demotile.jpg"){
document.getElementById('pop-demtileThree').click();
	dem_count.push("D");
  checkCount();

}
else {
document.getElementById('pop-reptileThree').click();
rep_count.push("R");
checkCount();
}
})

document.getElementById("replay").addEventListener("click", function(reload)

{
location.reload();
});
