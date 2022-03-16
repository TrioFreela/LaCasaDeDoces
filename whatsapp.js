// Numero do zap de Yasmin para teste: 
// Formato do link: https://wa.me/whatsappphonenumber?text=urlencodedtext

// Pegar valores do whatsapp, nome email e mensagem
function pegaValores() {
    let whatscliente = 5513991394497;
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("whatsapp").value;
    let mensagem = document.getElementById("mensagem").value;

    // Construindo o link
    let link = `https://wa.me/${whatscliente}?text=Olá!%20Meu%20nome%20é%20${nome}%20e%20estou%20interessado(a)%20em%20falar%20com%20você%20sobre%20${mensagem}`;
    
}

let botaoZap = document.getElementById("botao-whatsapp");

botaoZap.addEventListener("click", pegaValores);

// Construir o link

// Redirecionar para o whatsapp