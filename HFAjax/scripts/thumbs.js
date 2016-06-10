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

// Cria um HTTP Request
function createRequest() {
	try {
		
		var request = new XMLHttpRequest();
		
		} catch (tryMS) {
			
			try {
				request = new ActiveXObject("Msxml12.XMLHTTP");
				
				} catch (otherMS) {
					try {				
					request = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (failed) {
					request = null;
					}
			}
			
	}
	return request;
}
/*
* Envia requisição das descrições dos itens para o servidor
* O parâmetro itemName é usado para enviar o nome da imagem para o servidor
*/ 

function getDetails(itemName) {
	request = createRequest();
	
	if(request == null){
		alert("Não deu pra criar a requisição");
		return;	
	}
	var url = "getDetails.php?ImageID=" + escape(itemName);
	request.open("GET",url,true);
	// aqui vai uma callback
	request.onreadystatechange = displayDetails;
	request.send(null);
	 
}
// Mostra os detalhes
function displayDetails() {
	if (request.readyState == 4) {
		if(request.status == 200) {
		var detailDiv = document.getElementById("description");
		detailDiv.innerHTML = request.responseText;		
		}	
	}
}