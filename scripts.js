let qtdCartas = 0;
let qtdPares = 0;
let qtdjogadas  = 0;
let tempo = 0;
let time = 0;
let cartaEscolhida = null;
let cartaEscolhidaVirada = false;
let paresCorretos = [];
let relogio = document.querySelector(".reloginho");

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
    qtdPares = (qtdCartas/2);
    let paresDeCartas = [];
    for(let i = 0; i < qtdPares; i++){
        paresDeCartas.push(imagens[i], imagens[i]);
    }    
    paresDeCartas.sort(comparador);
    let cartas = document.querySelector("main");
    for (let i = 0; i < qtdCartas; i++){
        cartas.innerHTML += `
            <div class="carta" onclick="clicarNaCarta(this)" data-identifier="card">
                <div class="frente-carta face">
                    <img src="imagens/front.png" alt="Papagaio bonitinho" data-identifier="front-face"/>
                 </div>
                <div class="verso-carta face">
                    <img src="${paresDeCartas[i]}" data-identifier="back-face"/>
                </div>
            </div>
        `
    }
}

function comparador() { 
    return Math.random() - 0.5; 
}


function virarCarta(carta){
    let verso = carta.querySelector(".verso-carta");
    verso.classList.toggle("verso-escolhida");

    let frente = carta.querySelector(".frente-carta");
    frente.classList.toggle("frente-escolhida");
}

function clicarNaCarta(carta){
    let verso = carta.querySelector(".verso-carta");

    if(qtdjogadas == 0){
        tempo = setInterval(temporizador, 1000);
    }

    if(verso.classList.contains("verso-escolhida") === false){
        virarCarta(carta);
        qtdjogadas++;
        if(cartaEscolhidaVirada === false){
            cartaEscolhida = carta;
            cartaEscolhidaVirada = true;
        } else if(cartaEscolhida.classList[1] !== carta.classList[1]){
            cartaEscolhidaVirada = false;
            setTimeout(virarCarta,1000,cartaEscolhida);
            setTimeout(virarCarta,1000,carta);
            cartaEscolhida = null;
        } else{
            cartaEscolhidaVirada = false;
            paresCorretos.push(carta.classList[1]);
        }
        if(paresCorretos.length == qtdPares){
            clearTimeout(tempo);
            setTimeout(finalizarJogo, 1000);
        }

    }
}

function finalizarJogo(){
    alert(`Você ganhou em ${qtdjogadas} jogadas e em ${relogio} segundos`);
    
    let jogarNovamente = prompt("Quer de jogar novamente? Digite 's' para sim, se não clique em qualquer tecla ou aperte enter.");
        if (jogarNovamente === "s") {
            window.location.reload(true);
        }
}


function temporizador(){
    time = relogio.innerHTML;
    time++;
}

function desvirarCarta() {
    
}

adicionarCartas();