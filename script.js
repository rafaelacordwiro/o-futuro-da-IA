const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
enunciado: "Nos próximos anos, a IA provavelmente vai ser capaz de realizar diagnósticos médicos mais precisos que os humanos?"
alternativas: [
    "SIM"
    "NÃO"
]
    },
    {
        enunciado: "A IA poderá substituir empregos em áreas criativas, como música e arte, em um futuro próximo?"
  alternativas: [
    "SIM"
    "NÂO"
  ]
    },
    {
        enunciado: "É possível que, em um futuro não tão distante, as IAs sejam capazes de tomar decisões éticas complexas de forma autônoma?}
alternativas: [
    "SIM"
    "NÃO"
]
    },
    {
        enunciado: "Em um futuro próximo, as IAs vão ser capazes de realizar atividades de pesquisa científica sem a necessidade de supervisão humana?"
    alternativas: [
        "SIM"
        "NÃO"
    ]
    },
    {
        enunciado: "Os veículos autônomos, controlados por IA, se tornarão comuns nas cidades até 2030?"
   alternativas: [
    "SIM"
    "NÃO"
   ]
    },
    ];

    let atual = 0;
       let perguntaAtual;
       let historiaFinal = "";

       function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();

       }
        fuction mostraAlternativas() {
            for(const alternativas of perguntaAtual.alternativas) {
                const botaoAlternativas = document.createElement("button");
                botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas.addEventListerner("click", () => respostaSelecionada(alternativa));
                caixaAlternativas.appendChild(botaoAlternativas);
            }
        }

        function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacao;
            historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
        }

        function mostraResultado() {
            caixaPerguntas.textContent = "Em 2049...";
            textoResultado.text = historiaFinal;
            caixaAlternativas.textContent = "";
        }

        mostraPergunta();