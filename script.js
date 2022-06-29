const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nome = document.getElementById('nome').value;
        let tel = document.getElementById('tel').value; 
        let service = document.getElementById('service').value;
        let numero= 5571982246892;
        
        
var win= window.open(`https://wa.me/${numero}?text=LarryFashion %0A%0A------------------------ %0A%0ACliente:%20${nome} %0A%0ATelefone:%20${tel}%0A%0A------------------------ %0A%0AServiço:%20${service}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)