const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "vamos começa?",
        alternativas: [
            {
                texto: "sim, vamos!",
                afirmacao: "1"
            },
            {
                texto: "começa o que?",
                afirmacao: "2"
            }
        ]
    },
    {
        enunciado: "o que vc acha das IAs ",
        alternativas: [
            {
                texto: "gosto delas",
                afirmacao: "1"
            },
            {
                texto: "não gosto delas",
                afirmacao: "2"
            },
            {
                texto: "o que é IA?",
                afirmacao: "3"

                
            }
        ]
    },
    {
        enunciado: "você acha que uma IA pode fazer o que você faz? exemplo: seu trabalho.",
        alternativas: [
            {
                texto: "acho que sim",
                afirmacao: "1"
            },
            {
                texto: "não sei se ela seria capaz,não",
                afirmacao: "2"
            }
        ]
    },
    {
        enunciado: "quantas decisões humanas você acha que já foram manipuladas por IAs e agente nem percebeu?",
        alternativas: [
            {
                texto: " algumas, muitas pessoas usam para isso!",
                afirmacao: "1"
            },
            {
                texto: "nem uma, não precisamos de IAs para tomar nossas desisões!",
                afirmacao: "2"
            }
        ]
    },
    {
        enunciado: "Como saber se você não está vivendo em uma situação manipulada por uma IA? ",
        alternativas: [
            {
                texto: "eu achou improvável, as IAs só viaram para ajuda.",
                afirmacao: "1"
            },
            {
                texto: "se eu não usa, não tem como.",
                afirmacao: "2"
            },
             {
                texto: "eu vivo numa situação que a ia quer?",
                afirmacao: "3"
            }
        ]
    },
     {
        enunciado: "E se a IA aprendesse a mentir melhor do que qualquer humano ou as IA decidisse que os humanos são o principal obstáculo à preservação da Terra e quisesse  nós eliminar por meio de uma guerrera, o que você faria? ",
        alternativas: [
            {
                texto: "fugiria para um ligar sem internet",
                afirmacao: "1"
            },
            {
                texto: "não seria possivel, os humanos venceriam ",
                afirmacao: "2 "
            },
             {
                texto: "aceitaria meu destino.",
                afirmacao: "3"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.innerHTML = '<a href="senha.html" target="_blank">venha, hahahaha</a>';
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();
