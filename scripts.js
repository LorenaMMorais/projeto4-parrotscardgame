let qtdCartas, jogadas;
let cartasEscolhidas =  [];
let virarCartaEscolhida = true;

function adicionarCartas(){
    while(qtdCartas %2 !== 0 || qtdCartas < 4 || qtdCartas > 14){
        qtdCartas = parseInt(prompt("Escolha a quantidade de cartas(números pares entre 4 e 14):"));
    }
    let imagens = [
        'imagens/bobrossparrot.gif',
        'imagens/explodyparrot.gif',
        'imagens/fiestaparrot.gif',
        'imagens/metalparrot.gif',
        'imagens/revertitparrot.gif',
        'imagens/tripletsparrot.gif',
        'imagens/unicornparrot.gif'
    ];
    let paresDeCartas = [];
    for(let i = 0; i < (qtdCartas/2); i++){
        paresDeCartas.push(imagens[i], imagens[i]);
    }    
    paresDeCartas.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
    let cartas = document.querySelector("main");
    for (let i = 0; i < qtdCartas; i++){
        cartas.innerHTML += `
            <div class="carta" data-identifier="card">
                <div class="frente-carta face">
                    <img src="imagens/front.png" data-identifier="back-face"/>
                 </div>
                <div class="verso-carta face">
                    <img src="${paresDeCartas[i]}" data-identifier="front-face"/>
                </div>
            </div>
        `
    }
}

function comparador() { 
    return Math.random() - 0.5; 
}

adicionarCartas();