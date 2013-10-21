function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", deviceIsLoaded, false);
}

function deviceIsLoaded(){
	console.log("everything loaded");
	window.requestFileSystem(LocalFileSystem.PERSISTENT,0,gotFS,fail);
}

function gotFS(fileSystem){
	console.log("fileSystem successfully loaded");
}

function fail(error){
	console.log(error);
}


function openAfile(){
	var fileSystemObject = window.requestFileSystem(LocalFileSystem.PERSISTENT,0,gotFS,fail);
	alert("You want to open a file");
}


