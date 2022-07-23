<?php 

    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbName = 'forms-larryfashion'; 

    $conexao = new mysqli($dbHost,$dbUsername,$dbName); 

    if($conexao->connect_errno) 
    {
        echo "Erro";
    } 
    else 
    {
        echo "Conexao efetuada com sucesso";
    }

?>