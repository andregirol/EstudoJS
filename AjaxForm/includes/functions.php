<?php





#########################################
# Função para debugar variáveis
#########################################
# Parâmetros:
# - Variável para debugar = $var
# - Var Dump = v
# - Print_r = p

function debug_var($var, $varname = 'var', $debug_type = 'v') {
    echo "Debugando: " . '<span style="color:red;">' . $varname . "</span>";
    echo "<pre>";

    if ($debug_type == 'v') {
        var_dump($var);
    }

    if ($debug_type == 'p') {
        print_r($var);
    }
    echo "</pre>";
}

################################################################
# Função para preparar variáveis recebidas ou retiradas do POST
################################################################

function test_input($data) {
    $data = trim($data);
    $data = addslashes($data);
    $data = htmlspecialchars($data);

    return $data;
}

##############################################################
# Limpa as slashes antes de mostrar ao usuário
##############################################################

function clean_output($data) {
    $data = stripslashes($data);
    return $data;
}

?>