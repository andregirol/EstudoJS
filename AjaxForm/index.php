<?php
include './includes/header.html';
require_once './includes/functions.php';
require_once './includes/db_functions.php';

$revendas = Select_revendas();


?>
<form class="form-horizontal">
<fieldset>

<!-- Form Name -->
<legend>Estudo Ajax</legend>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="selectbasic">Selecionar Domínio</label>
  <div class="col-md-4">
    <select id="selectRevenda" name="selectRevenda" class="form-control">
			<?php while($row = $revendas->fetch_assoc()): ?>
					<option value="<?= $row['id_revenda']?> "><?= $row['nome'] ?></option>
			<?php endwhile;?>
    </select>
  </div>
</div>

<!-- Select Basic -->
<div class="form-group">
  <label class="col-md-4 control-label" for="selectCliente">Selecionar Cliente</label>
  <div class="col-md-4">
    <select id="selectCliente" name="selectCliente" class="form-control">
	    
    
    </select>
  </div>
</div>

</fieldset>
<div id="response">

</div>

</div>
<script src="js/utils.js" type="text/javascript"></script>
<script src="js/cliente.js" type="text/javascript"></script>
</body>
</html>
