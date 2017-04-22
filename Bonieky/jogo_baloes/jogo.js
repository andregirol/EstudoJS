function iniciar() {
	setInterval(addBola, 1000);
}


function addBola() {
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	// Seta atributos x e y para posicionar a bola
	var x = Math.floor(Math.random() * 500);
	var y = Math.floor(Math.random() * 400);

	bola.setAttribute("style", "left:"+x+"px; top:"+y+"px;");
	bola.setAttribute("onclick", "estourar(this)");

	document.body.appendChild(bola);
}


function estourar(elemento){
	document.body.removeChild(elemento);
}