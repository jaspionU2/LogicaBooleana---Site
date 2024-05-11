var imagens = ["../img/img-george-booleUniversity.jpg", "../img/img-george-booleHouse.jpg", "../img/img-george-boole3.jpeg", "../img/img-george-booleBook.png"]; 
var descricoes = [
    "Queens’ College, Cork, na Irlanda.", 
    "A casa onde viveu Boole entre 1849 e 1855 em Cork, na Irlanda.", 
    "Estatua de George Boole, localizada em Cork, Irlanda", "Investigação das Leis do Pensamento(1854)"
];
var indiceAtual = 0;

function trocarImagem(passos) {
    indiceAtual += passos;
    
   
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
    
    
    document.getElementById("image").src = imagens[indiceAtual];
    var descricao = document.getElementById("image-description");
    descricao.textContent = descricoes[indiceAtual];
}