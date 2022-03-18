const links = ["bombom.html", "brigadeiro.html", "tortinha.html"]
$('#produto0').hide();

function mudaLink(i){
    var foto = document.querySelector(".foto-produto");
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