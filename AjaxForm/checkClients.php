<?php

require_once './includes/functions.php';
require_once './includes/db_functions.php';

/*echo"Valor de Request: ";
var_dump($_REQUEST);
echo "<hr>";*/


if(isset($_GET['id_revenda'])){

	$id_revenda = $_GET['id_revenda'];	
	
	$clientes = Select_clientes($id_revenda);
	if($clientes == FALSE):
		echo false;
	else:		
		while($row = $clientes->fetch_assoc()):?>
					<option value="<?= $row['id_cliente']?>" 	><?= $row['nome'] .' '. $row['sobrenome'] ?></option>
	<?php endwhile;
	
	endif;
}

