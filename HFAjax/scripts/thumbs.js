window.onload = initPage();

function initPage() {
	//Encontra thumbnails na página
	var thumbs = document.getElementById("thumbnailPane").getElementsByTagName("img");
	
	
//	console.log("O tamanho de thumbs é: " + thumbs.length);
	
	//Seta o handler para cada imagem
	for (var i=0; i<thumbs.length; i++) {
		var image = thumbs[i];
		
		
		//Cria função onClick:
		image.onclick = function () {
			// Pega nome completo da imagem
			var detailURL = "images/" + this.title + "-detail.jpg";
			
			document.getElementById("itemDetail").src = detailURL;
			
			getDetails(this.title);
		
		
		}		
	}
	
	
	// DEBUG
	console.log("O valor de thumbs é: " + thumbs);
	console.log("To aqui mano");	
}
