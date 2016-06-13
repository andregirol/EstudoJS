window.onload = initPage;
console.log("iniciando página");

function initPage() {
    document.getElementById("selectRevenda").onchange = getClients;
}

function getClients() {
	request = createRequest();
	console.log("Rodou getClients");

	if (request == null) {
		alert("Não foi possível criar requsição!");
			
	} else {
		
		
		var idRevenda = document.getElementById("selectRevenda").value;
		
//		var url = "checkClients.php?id_domain="+idDomain;
		var url = "checkClients.php?id_revenda=" + idRevenda;
		console.log("idRevenda é:" + idRevenda);		
		
		request.onreadystatechange = showClients;
		
		request.open("POST", url, true);
		request.open("GET", url, true);
		request.send(idRevenda);
		
	}
	
}

function showClients() {
	
	if (request.readyState == 4 && request.status == 200){
		 
		if (request.responseText == false) {
				alert("Não existem clientes vinculados a essa revenda.")
		} else {
			var response = document.getElementById("selectCliente");
			
			response.innerHTML = request.responseText;
		}
	}
}

