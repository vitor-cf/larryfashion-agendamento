<?php 
    if(isset($_POST['submit']))
    {
        // print_r('Nome:' . $_POST['nome']); 
        // print_r('<br>');
        // print_r('Telefone:' . $_POST['telefone']);
        // print_r('<br>');
        // print_r('Serviço:' . $_POST['service']);
        // print_r('<br>');
        // print_r('Funcionária(o):' . $_POST['func']);

        include_once('config.php');

        $nome = $_POST['nome'];
        $telefone = $_POST['telefone'];
        $funcionario = $_POST['func']; 

        $result = mysqli_query($conexao, "INSERT INTO usuarios(nome,telefone,funcionario) VALUES ('$nome','$telefone','$funcionario')");
        
        
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LarryFashion - Agendamento</title>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="style.css"> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet"> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,800&display=swap" rel="stylesheet">
</head>
<body>
    <!-- LOGO -->
    <div class="container-logo">
        <h1 class="logo">LARRY FASHION</h1>
    </div> 
    
    <!-- Formulário Agendamento -->  
    <form action="index.php" method="POST">
        <fieldset>
            <div class="border">
                <div class="container-input"> 
                
                    <div class="box-cliente">
                        <label>Cliente:</label>
                        <input type="text" placeholder="Digite seu nome" id="nome" required autocomplete="off" name="nome"> 
                    </div>
                    <div class="box-telefone">
                        <label>Contato:</label>
                        <input type="tel" placeholder="(XX) XXXXX-XXXX" id="telefone" maxlength="11" required autocomplete="off" name="telefone">
                    </div> 
                    <div class="box-func">
                        <label>Funcionária(o):</label> 
                        <select name="func" id="func" required>
                            <option value="Bruna" class="bruna">Bruna</option>
                    </div>
                        <div class="box-hora">
                            
                        </div>
                            
                        </select> 
                    
                        <label>Serviços:</label> 
                        <select name="service" id="service" required>
                            <option value="Selecione" class="selec">Selecione</option>
                            <option value="Mão">Mão</option>
                            <option value="Pé">Pé</option>
                            <option value="Mão e Pé">Mão e pé</option>
                        </select>  
                        
                        <div id="valor">
                            <p></p>
                        </div>
                        
                    </div> 
                    <div class="button">
                        <input type="submit" id="submit" name="submit"></input> 
                    </div>
                      
                </div> 
                
                
            </div>
           
    
            
        </fieldset>   
    </form>
    

    <!-- mensagem  -->
    <div class="box-msg" id="d-msg">
        <p id="msg"></p> 
        <button id="close">Fechar</button>
    </div>

    

   
    <script src="#"></script>
</body>
</html>
