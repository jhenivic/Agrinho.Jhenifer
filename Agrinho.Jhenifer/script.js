// Função para aumentar fonte
document.getElementById("aumentar-fonte").addEventListener("click", function() {
    document.body.classList.add("aumento-fonte");
    document.body.classList.remove("diminuir-fonte");
});

// Função para diminuir fonte
document.getElementById("diminuir-fonte").addEventListener("click", function() {
    document.body.classList.remove("aumento-fonte");
    document.body.classList.add("diminuir-fonte");
});

// Função para mudar contraste
document.getElementById("mudar-contraste").addEventListener("click", function() {
    document.body.classList.toggle("alto-contraste");
});

 //conexao-campo-cidade
    assets
        /css
            style.css
        /js
            script.js
    index.html
