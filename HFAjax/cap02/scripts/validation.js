window.onload = initPage;
console.log("iniciando pagina");

function initPage() {
    document.getElementById("username").onblur = checkUsername;

    //Debug simples para testar o evento
//    alert("Estou em init page");
}


//Busca no servidor o usuário
function checkUsername() {

    // Seta o ícone de status da requisição - Processando
    document.getElementById("username").className = "thinking";

    //Cria request object criado em utils.js
    request = createRequest();

    if (request == null) {
        alert("Não foi possível criar requisição");
    } else {
//        alert("consegui um request!");
        var theName = document.getElementById("username").value;

//        alert("Valor original de username: " + theName);

        var username = escape(theName);
//        alert("Valor escaped de username: " + username);

        var url = "checkName.php?username=" + username;
//        alert("URL: " + url);

        request.onreadystatechange = showUsernameStatus;
        request.open("GET", url, true);
        request.send(null);
    }


}

/* 
 Esta função atualiza a página HTML
 para mostrar se * o usuário já existe ou não 
 */
function showUsernameStatus() {

    // Debug não invasivo
//    console.log('Checando...');
//    console.log("Ready State: " + request.readyState);
//    console.log("Status: " + request.status);

    if (request.readyState == 4) {
        if (request.status == 200) {
            if (request.responseText == "okay") {
                // se não tiver pego o usuário, mostra CHECK
                // Seta o ícone de status da requisição
                document.getElementById("username").className = "approved";
            } else {
                
                // Seta o ícone de status da requisição
                document.getElementById("username").className = "denied";
            }
        }
    }
}
