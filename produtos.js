// Selecionando os elementos
let menuBombom = document.getElementById("menu-bombom");
let menuBrigadeira = document.getElementById("menu-brigadeiro");
let menuTortinha = document.getElementById("menu-tortinha");

let produto0 = document.getElementById("produto0");
let produto1 = document.getElementById("produto1");
let produto2 = document.getElementById("produto2");

function mudaLink(i) {
    switch(i) {
    case 0:
        produto0.style.display = 'block';
        produto1.style.display = 'none';
        produto2.style.display = 'none';
        break;
    case 1:
        produto0.style.display = 'none';
        produto1.style.display = 'block';
        produto2.style.display = 'none';
        break;
    case 2:
        produto0.style.display = 'none';
        produto1.style.display = 'none';
        produto2.style.display = 'block';
        break;
    }
}

mudaLink(0);