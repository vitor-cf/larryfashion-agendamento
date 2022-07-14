/* Dados Formulário */ 

const evento = document.getElementById('send');
function forms() {
        let nome = document.getElementById('nome').value;
        let tel = document.getElementById('tel').value;
        let service = document.getElementById('service').value; 
        let func = document.getElementById('func').value;
        let msg = document.getElementById('msg'); 
        
        let numero = 5571991182502; 
        let valor1 = 'R$ 20,00';
        let valor2 = 'R$ 25,00';
        let valor3 = 'R$ 30,00';
        

        if (service === 'Mão') { 
                
                var win = window.open(`https://wa.me/${numero}?text=%20%20%20*LarryFashion*%20%20%20 %0A%0A------------------------ 
        %0A%0ACliente:%20${nome} %0A%0ATelefone:%20(${tel[0]}${tel[1]})%20${tel[2]}${tel[3]}${tel[4]}${tel[5]}${tel[6]}-${tel[7]}${tel[8]}${tel[9]}${tel[10]}%0A%0A ------------------------ 
        %0A%0AServiço:%20${service}  %0A%0AFuncionária(o):%20${func}%0A%0A------------------------ %0A%0A*Valor*: ${valor1}`,'_blank');
        }  
                 


        if (service === 'Pé') {
                 
                var win = window.open(`https://wa.me/${numero}?text=%20%20%20*LarryFashion*%20%20%20 %0A%0A------------------------ 
        %0A%0ACliente:%20${nome} %0A%0ATelefone:%20(${tel[0]}${tel[1]})%20${tel[2]}${tel[3]}${tel[4]}${tel[5]}${tel[6]}-${tel[7]}${tel[8]}${tel[9]}${tel[10]}%0A%0A ------------------------ 
        %0A%0AServiço:%20${service}  %0A%0AFuncionária(o):%20${func}%0A%0A------------------------ %0A%0A*Valor*: ${valor2}`,'_blank');
        }  

        if (service === 'Mão e Pé') {
                
                var win = window.open(`https://wa.me/${numero}?text=%20%20%20*LarryFashion*%20%20%20 %0A%0A------------------------ 
        %0A%0ACliente:%20${nome} %0A%0ATelefone:%20(${tel[0]}${tel[1]})%20${tel[2]}${tel[3]}${tel[4]}${tel[5]}${tel[6]}-${tel[7]}${tel[8]}${tel[9]}${tel[10]}%0A%0A ------------------------ 
        %0A%0AServiço:%20${service}  %0A%0AFuncionária(o):%20${func}%0A%0A------------------------ %0A%0A*Valor*: ${valor3}`,'_blank');
        } 

        if (service === 'Selecione') {
                document.getElementById('d-msg').style.display ='block';
                msg.innerHTML = `Selecione um serviço !`; 
                
        }
                

        
}  

const feche = document.getElementById('d-msg');
function buttonFechar() {
        document.getElementById('d-msg').style.display = 'none';
}

feche.addEventListener('click', buttonFechar) 

evento.addEventListener('click', forms);



        

