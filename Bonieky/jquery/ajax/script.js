// Seu código aqui...
$(document).ready(function(){
	$('#cadastro').bind('submit', function(ev){
		ev.preventDefault();

		var dados = $(this).serialize();
		console.log(dados);

		$.ajax({
			type:'GET',
			url:'ajax.php',
			data:dados,
			dataType:'json',
			success:function(retorno){
				console.log(retorno);
				$('.resposta').html(retorno.usuario);
			}

			
		});

	});
});

$(document).ready(function(){
	console.log("Rodando jQuery 3.2.1")
});