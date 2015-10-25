function goToDownload(){

	var element = document.getElementById('changeMe');
	if (element.classList.contains('downloadPage')){
		element.classList.remove('downloadPage');
		console.log("downloadPage removed");
		} else {
			element.classList.add('downloadPage');
			console.log("downloadPage added");

		}
	}

function showDescriptions(){
	var element = document.getElementById('showDes');
	if (element.classList.contains('descriptions')){
		element.innerHTML = "";
		element.classList.remove('descriptions');

		var diagram = document.createElement("img");
		diagram.src = 'img/PHOMOdiagram.png';
		element.appendChild(diagram);
		element.classList.add('diagram');

		console.log("descriptions removed, diagram added");

	} else {
		element.classList.add('descriptions');
		element.innerHTML = "<strong>Hey there!</strong> <br> <em>Did you know that with Phomo you can:</em> <br><br> 1. Co-host an event with your friend. <br><br> 2. Set a target fundraising goal. <br><br> 3. Request a certain amount or have guests <br> contribute as much as they like. <br><br> 4. View your event feedback and ratings. <br><br> 5. Attend and rate other events!";
		console.log("descriptions added");
	}
}


//document.getElementById('my-image').ondragstart = function() { return false; };