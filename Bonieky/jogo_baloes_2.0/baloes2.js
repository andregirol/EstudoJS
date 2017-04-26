function iniciar() {
	setInterval(addBola, 1000);
}

// gera uma cor aleatória para colocar na bolinha
function gera_cor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}


function addBola() {
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	// Seta atributos x e y para posicionar a bola
	var x = Math.floor(Math.random() * 500);
	var y = Math.floor(Math.random() * 400);

	bola.setAttribute("style", "left:"+x+"px; top:"+y+"px;");
	bola.setAttribute("onclick", "estourar(this)");
	bola.style.backgroundColor = gera_cor();

	document.body.appendChild(bola);
}


function estourar(elemento){
	document.body.removeChild(elemento);
}