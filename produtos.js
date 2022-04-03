// Selecionando os elementos
let menuBombom = document.getElementById("menu-bombom");
let menuBrigadeira = document.getElementById("menu-brigadeiro");
let menuTortinha = document.getElementById("menu-tortinha");

let produto0 = document.getElementById("produto0");
let produto1 = document.getElementById("produto1");
let produto2 = document.getElementById("produto2");

produto0.style.display = 'none';
produto1.style.display = 'none';
produto2.style.display = 'none';

function mudaLink(i) {
    produtoi.style.display = 'block';
}

mudaLink(0);