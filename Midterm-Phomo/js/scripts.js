function goToDownload(){

	var element = document.getElementById('changeMe');
	if (element.classList.contains('downloadPage')){
		element.classList.remove('downloadPage');
		console.log("downloadPage removed")
		} else {
			element.classList.add('downloadPage');
			console.log("downloadPage added");

		}
	}

// how do I link to another already existing page, instead of just changing the CSS?