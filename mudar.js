// primeira parte Habilitado/Desabilitado
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var links = document.querySelector('.links');
    // troca o estado da class .toggle para activo
    menuToggle.classList.toggle('active');
    // troca o estado da class .links para ativo
    links.classList.toggle('active')
}

// troca o copo grande 
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

// troca a cor do círculo do fundo
function changeCircleColor(color){
    const circulo =document.querySelector('.circulo');
    circulo.style.background = color;
}