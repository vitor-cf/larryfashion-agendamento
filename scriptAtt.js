/* Pegando Informações */

const btnTest = document.getElementById("btn-select")
btnTest.addEventListener("click", function selectItem1() {
    let inputRadio = document.getElementById("item1")
    
    let verifica = prompt("Confirmar serviço?") 
    if(verifica == "sim") {
        let nome = prompt("Informe seu nome")
        let numero = prompt("Informe seu numero:") 
        inputRadio = `Serviço: Manicure \nPreço: R$ 45,00 \nCliente: ${nome} \nNumero: ${numero}`
        var win = window.open(`https://wa.me/5571991182502?text=${inputRadio}`,'_blank'); 
    }
    
    
    
}) 





