const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        "enunciado": "Qual é a sua relação com o horário escolar?",
        "alternativas": [
            {
                "texto": "Meu período de estudo principal é durante a manhã, aproveitando o início do dia.",
                "afirmacao": " frequento a escola no período diurno, o que se alinha com a minha rotina."
            },
            {
                "texto": "Minhas atividades escolares ocorrem no período da tarde, adaptando-se à minha agenda.",
                "afirmacao": " Eu tenho aulas no turno vespertino, o que funciona bem para o meu dia a dia."
            }
        ]
    },
    {
        "enunciado": "Entre as áreas de conhecimento, quais despertam mais o seu interesse?",
        "alternativas": [
            {
                "texto": "Tenho uma forte inclinação para disciplinas que envolvem lógica, como matemática e ciências da natureza.",
                "afirmacao": " As matérias de Exatas são as minhas favoritas, pois me atraem pela precisão e raciocínio lógico."
            },
            {
                "texto": "Me sinto mais conectado(a) a matérias que exploram a comunicação e o pensamento crítico, como português e história.",
                "afirmacao": " As disciplinas de Linguagens e Humanas são as que mais me interessam, pois me desafiam a interpretar e a me expressar."
            }
        ]
    },
    {
        "enunciado": "Em que fase do Ensino Médio você se encontra?",
        "alternativas": [
            {
                "texto": "Estou nos anos finais, prestes a concluir esta etapa.",
                "afirmacao": " Minha formatura do Ensino Médio se aproxima, e estou me preparando para o próximo ciclo."
            },
            {
                "texto": "Ainda tenho um caminho considerável a percorrer até a formatura.",
                "afirmacao": " Sou um(a) aluno(a) mais novo(a) no Ensino Médio e ainda levarei um tempo para me formar."
            }
        ]
    },
    {
        "enunciado": "Como você avalia a sua experiência geral na escola?",
        "alternativas": [
            {
                "texto": "Considero a escola um ambiente enriquecedor, que me estimula a aprender e a me desenvolver.",
                "afirmacao": " Eu aprecio a escola como um lugar de aprendizado e crescimento, que me motiva a ser um(a) melhor estudante."
            },
            {
                "texto": "Prefiro buscar conhecimento por conta própria, fora do formato tradicional de sala de aula.",
                "afirmacao": " O modelo de ensino tradicional não me agrada totalmente; meu interesse está mais em assuntos que posso explorar por conta própria."
            }
        ]
    },
    {
        "enunciado": "Qual a sua perspectiva sobre a continuidade dos estudos após o Ensino Médio?",
        "alternativas": [
            {
                "texto": "Tenho a intenção de seguir para o ensino superior e fazer uma faculdade.",
                "afirmacao": " Meu objetivo é cursar uma faculdade para me especializar em uma área de interesse no futuro."
            },
            {
                "texto": "A faculdade não é o meu foco imediato, mas valorizo outras formas de aprendizado.",
                "afirmacao": " No momento, fazer um curso superior não é meu plano principal. Estou aberto(a) a outras oportunidades de capacitação profissional."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }

}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes +"" ;
    atual++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPerguntas.textContent = "Eu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();