const links = ["bombom.html", "brigadeiro.html", "tortinha.html"]

document.querySelector('#produto0').hide();
document.querySelector('#produto1').hide();
document.querySelector('#produto2').hide();

function mudaLink(i){
    var section = document.querySelector(".foto-produto");
    const descricao = document.querySelector(".foto-descricao");
    foto.innerHTML = "<div id="produto{i}">";
    <br>
    <br>
    descricao.innerHTML = "<div id="cardapio{i}">";
    <br><br>
  

}

mudaLink(0);

{/* 
$(document).ready(function (event) {
    $('#erro').hide();
    $('#email').blur(function (event) {
        var _email = $('.infobox').val();
        if (validar_email(_email)) {
            $('#erro').hide();
            $('.enviar').click(function(){
                alert("Enviado com sucesso!")
                event.preventDefault();
                
            })
        }
        else {
            $('#erro').show();
           
        }
        
    }); */}