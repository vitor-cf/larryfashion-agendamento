/* Dados Formulário */ 

const evento = document.getElementById('send');
function forms() {
        let nome = document.getElementById('nome').value;
        let tel = document.getElementById('tel').value;
        let service = document.getElementById('service').value; 
        let msg = document.getElementById('msg');
        let numero = 5571991182502; 
        let valor1 = 'R$ 20,00';
        let valor2 = 'R$ 25,00';
        let valor3 = 'R$ 30,00';
        

        if (service === 'Mão') {
                 
                var win = window.open(`https://wa.me/${numero}?text=%20%20%20*LarryFashion*%20%20%20 %0A%0A------------------------ 
        %0A%0ACliente:%20${nome} %0A%0ATelefone:%20${tel}%0A%0A------------------------ 
        %0A%0AServiço:%20${service}%0A%0A------------------------ %0A%0A*Valor*: ${valor1}`,'_blank');
        }  

        if (service === 'Pé') {
                 
                var win = window.open(`https://wa.me/${numero}?text=%20%20%20*LarryFashion*%20%20%20 %0A%0A------------------------ 
        %0A%0ACliente:%20${nome} %0A%0ATelefone:%20${tel}%0A%0A------------------------ 
        %0A%0AServiço:%20${service}%0A%0A------------------------ %0A%0A*Valor*: ${valor2}`,'_blank');
        }  

        if (service === 'Mão e Pé') {
                
                var win = window.open(`https://wa.me/${numero}?text=%20%20%20*LarryFashion*%20%20%20 %0A%0A------------------------ 
        %0A%0ACliente:%20${nome} %0A%0ATelefone:%20${tel}%0A%0A------------------------ 
        %0A%0AServiço:%20${service}%0A%0A------------------------ %0A%0A*Valor*: ${valor3}`,'_blank');
        } 

        if (service === 'Selecione') {
                msg.innerHTML = `Selecione um serviço !`
        }
                

        
}

 

evento.addEventListener('click', forms);



        

