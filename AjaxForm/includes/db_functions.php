<?php

# Arquivo de funções da aplicação
##############################################
# configuracao de conexao com o banco de dados
##############################################

function conectaDB() {

    # Adiciona os parâmetros da conexão parâmetros '` `
    require('config.php');

    # Prepara a conexao
    $connect = mysqli_connect($dbaddress, $dbuser, $dbpass) or die("Não foi possível conectar ao banco de dados");

    # Configura as transações para UTF-8
    mysqli_set_charset($connect, 'utf8');

    # Caso a conexão seja reprovada, exibe na tela uma mensagem de erro
    if (!$connect):
        echo "<h1>Falha na conexao com o Banco de Dados!</h1>";
        mysqli_error($connect);
    else:
        # Caso a conexão seja aprovada, então conecta o Banco de Dados.
        $db = mysqli_select_db($connect, $dbname) or die("Não foi possível selecionar o banco ." . mysqli_error($connect));
    endif;
    return $connect;
}


// Select Revendas
function Select_revendas() {

    $link = conectaDB();

    $query = "SELECT `id_revenda`, `nome` FROM  `revenda`";

    $result = mysqli_query($link, $query);

    if ($result->num_rows > 0):
        return $result;

    else:
        return FALSE;
    endif;
}

// TESTING
// Select Domains
function Select_clientes($id_revenda) {

    $link = conectaDB();

    $query = "SELECT `id_cliente`, `nome`, `sobrenome` FROM  `cliente` WHERE `id_revenda_fk` = {$id_revenda} ";

    $result = mysqli_query($link, $query);

    if ($result->num_rows > 0):
        return $result;

    else:
        return FALSE;
    endif;
}


