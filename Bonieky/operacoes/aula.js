function somar() {
	var campo1 = document.getElementById('campo1').value;
	var campo2 = document.getElementById('campo2').value;

	var soma = parseInt(campo1) + parseInt(campo2);

	alert(soma);

}

var array = ['laranja' ,'texto' , 'outro texto' , 'hadouken'];

console.log(array[0]);

var pessoa = {
	name: "André",
	idade: "30",

	show_name: function() {
		alert(this.name);
	}
};

// console.log(pessoa.name);
alert(pessoa.name);
