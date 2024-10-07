// primeira parte Habilitado/Desabilitado
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var links = document.querySelector('.links');
    // troca o estado da class .toggle para activo
    menuToggle.classList.toggle('active');
    // troca o estado da class .links para ativo
    links.classList.toggle('active')
}