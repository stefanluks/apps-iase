const frases = [
  // NÍVEL INICIAL

  "o mouse esta na mesa",

  "use o teclado",

  "abra o computador",

  "ligue o monitor",

  "mova o mouse",

  "clique no botao",

  "abra uma pasta",

  "salve o arquivo",

  "feche a janela",

  "use o teclado com calma",

  // INFORMÁTICA BÁSICA

  "o computador recebe dados",

  "o monitor mostra imagens",

  "o teclado permite escrever",

  "o mouse controla o ponteiro",

  "uma pasta organiza arquivos",

  "um arquivo pode ser salvo",

  "o sistema possui programas",

  "o usuario controla o computador",

  "a area de trabalho possui icones",

  "o navegador permite acessar sites",

  // PEÇAS DO COMPUTADOR

  "o processador executa instrucoes",

  "a memoria ram armazena dados temporarios",

  "o ssd pode armazenar arquivos",

  "a placa mae conecta os componentes",

  "a fonte fornece energia ao computador",

  "o gabinete protege os componentes",

  "o cooler ajuda a resfriar o processador",

  "o monitor utiliza uma placa de video",

  "o teclado e um dispositivo de entrada",

  "a impressora e um dispositivo de saida",

  // SENAI

  "o senai oferece educacao profissional",

  "no senai aprendemos novas tecnologias",

  "a tecnologia esta presente nas empresas",

  "os alunos desenvolvem novas habilidades",

  "a informatica ajuda no ambiente de trabalho",

  "o conhecimento transforma oportunidades",

  "a pratica ajuda no aprendizado de informatica",

  "os computadores sao importantes nas empresas",

  "o senai prepara profissionais para o mercado",

  "a tecnologia pode melhorar processos de trabalho",

  // SOFTWARE DE ESCRITÓRIO

  "um editor de texto permite criar documentos",

  "uma planilha permite organizar dados em tabelas",

  "uma apresentacao pode utilizar textos e imagens",

  "os arquivos devem ser organizados em pastas",

  "salvar o documento evita perder o trabalho realizado",

  "copiar e colar sao operacoes comuns no computador",

  "o usuario pode selecionar textos utilizando o mouse",

  "um documento pode possuir diferentes tipos de formatacao",

  "as planilhas podem realizar calculos automaticamente",

  "as apresentacoes ajudam a comunicar ideias de forma visual",

  // INTERMEDIÁRIO

  "o sistema operacional controla os recursos do computador",

  "o processador interpreta e executa instrucoes dos programas",

  "a memoria ram guarda informacoes enquanto o computador esta ligado",

  "os dispositivos de entrada enviam informacoes para o computador",

  "os dispositivos de saida apresentam informacoes para o usuario",

  "organizar corretamente os arquivos facilita encontrar documentos",

  "utilizar atalhos do teclado pode aumentar a produtividade no trabalho",

  "um bom profissional deve aprender a utilizar diferentes ferramentas digitais",

  "os computadores podem ser utilizados para estudar trabalhar criar e comunicar",

  "a informatica basica desenvolve habilidades importantes para diferentes profissoes",

  // AVANÇADO

  "antes de desligar o computador e importante salvar todos os documentos que estiverem abertos",

  "uma boa organizacao de arquivos utiliza nomes claros e pastas separadas por assunto",

  "o uso correto do teclado e do mouse pode aumentar a velocidade na realizacao das atividades",

  "os programas de escritorio sao utilizados para criar textos planilhas apresentacoes e documentos",

  "aprender informatica ajuda o profissional a utilizar recursos digitais de maneira mais eficiente",

  "a seguranca digital depende de cuidados como utilizar senhas fortes e evitar arquivos desconhecidos",

  "os alunos do senai desenvolvem competencias tecnicas por meio de atividades praticas e desafios",

  "a tecnologia da informacao esta presente em praticamente todos os setores das empresas modernas",

  "o computador e formado por diferentes componentes que trabalham juntos para executar programas",

  "o conhecimento sobre hardware e software facilita a utilizacao e manutencao dos computadores",
];

let fraseAtual = 0;

let acertos = 0;

let erros = 0;

const fraseElemento = document.getElementById("frase");

const campo = document.getElementById("campoDigitacao");

const proximaTecla = document.getElementById("proximaTecla");

const dedoRecomendado = document.getElementById("dedoRecomendado");

const numeroFrase = document.getElementById("fraseNumero");

const acertosElemento = document.getElementById("acertos");

const errosElemento = document.getElementById("erros");

const barraProgresso = document.getElementById("barraProgresso");

const mensagem = document.getElementById("mensagemDigitacao");

const mapaDedos = {
  // MÃO ESQUERDA

  q: {
    dedo: "left-pinky",
    nome: "Mínimo esquerdo",
  },

  a: {
    dedo: "left-pinky",
    nome: "Mínimo esquerdo",
  },

  z: {
    dedo: "left-pinky",
    nome: "Mínimo esquerdo",
  },

  w: {
    dedo: "left-ring",
    nome: "Anelar esquerdo",
  },

  s: {
    dedo: "left-ring",
    nome: "Anelar esquerdo",
  },

  x: {
    dedo: "left-ring",
    nome: "Anelar esquerdo",
  },

  e: {
    dedo: "left-middle",
    nome: "Médio esquerdo",
  },

  d: {
    dedo: "left-middle",
    nome: "Médio esquerdo",
  },

  c: {
    dedo: "left-middle",
    nome: "Médio esquerdo",
  },

  r: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  f: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  v: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  t: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  g: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  b: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  // MÃO DIREITA

  y: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  h: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  n: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  u: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  j: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  m: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  i: {
    dedo: "right-middle",
    nome: "Médio direito",
  },

  k: {
    dedo: "right-middle",
    nome: "Médio direito",
  },

  o: {
    dedo: "right-ring",
    nome: "Anelar direito",
  },

  l: {
    dedo: "right-ring",
    nome: "Anelar direito",
  },

  p: {
    dedo: "right-pinky",
    nome: "Mínimo direito",
  },

  ç: {
    dedo: "right-pinky",
    nome: "Mínimo direito",
  },

  " ": {
    dedo: "thumb",
    nome: "Polegar",
  },
};

function carregarFrase() {
  campo.value = "";

  campo.classList.remove("erro");

  mensagem.textContent = "";

  numeroFrase.textContent = `${fraseAtual + 1} / ${frases.length}`;

  atualizarFrase();

  atualizarDedo();

  atualizarProgresso();

  campo.focus();
}

function atualizarFrase() {
  const frase = frases[fraseAtual];

  const textoDigitado = campo.value;

  fraseElemento.innerHTML = "";

  for (let i = 0; i < frase.length; i++) {
    const span = document.createElement("span");

    span.textContent = frase[i];

    if (i < textoDigitado.length && textoDigitado[i] === frase[i]) {
      span.classList.add("char-correto");
    } else if (i < textoDigitado.length) {
      span.classList.add("char-errado");
    } else if (i === textoDigitado.length) {
      span.classList.add("char-atual");
    }

    fraseElemento.appendChild(span);
  }
}

function verificarDigitacao() {
  const frase = frases[fraseAtual];

  const digitado = campo.value;

  atualizarFrase();

  if (frase.startsWith(digitado)) {
    campo.classList.remove("erro");

    if (digitado === frase) {
      concluirFrase();

      return;
    }
  } else {
    erroDigitacao();
  }

  atualizarDedo();

  atualizarProgresso();
}

function erroDigitacao() {
  erros++;

  errosElemento.textContent = erros;

  campo.classList.add("erro");

  tremerTela();
}

function tremerTela() {
  document.body.classList.remove("shake");

  // Força o navegador a reiniciar
  // a animação.

  void document.body.offsetWidth;

  document.body.classList.add("shake");

  setTimeout(function () {
    document.body.classList.remove("shake");
  }, 450);
}

function concluirFrase() {
  acertos++;

  acertosElemento.textContent = acertos;

  mensagem.textContent = "Frase concluída!";

  mensagem.classList.add("sucesso");

  campo.disabled = true;

  barraProgresso.style.width = "100%";

  setTimeout(function () {
    fraseAtual++;

    if (fraseAtual >= frases.length) {
      fraseAtual = 0;
    }

    campo.disabled = false;

    mensagem.classList.remove("sucesso");

    carregarFrase();
  }, 900);
}

function atualizarDedo() {
  const frase = frases[fraseAtual];

  const digitado = campo.value;

  let posicao = 0;

  while (posicao < digitado.length && digitado[posicao] === frase[posicao]) {
    posicao++;
  }

  if (posicao >= frase.length) {
    return;
  }

  let letra = frase[posicao].toLowerCase();

  proximaTecla.textContent = letra === " " ? "ESPAÇO" : letra.toUpperCase();

  removerDestaqueDedos();

  const info = mapaDedos[letra];

  if (info) {
    dedoRecomendado.textContent = info.nome;

    const dedos = document.querySelectorAll(`[data-finger="${info.dedo}"]`);

    dedos.forEach(function (dedo) {
      dedo.classList.add("active");
    });
  } else {
    dedoRecomendado.textContent = "Observe a tecla";
  }
}

function removerDestaqueDedos() {
  document.querySelectorAll(".finger").forEach(function (finger) {
    finger.classList.remove("active");
  });
}

function atualizarProgresso() {
  const frase = frases[fraseAtual];

  const digitado = campo.value;

  let corretos = 0;

  for (let i = 0; i < digitado.length; i++) {
    if (digitado[i] === frase[i]) {
      corretos++;
    } else {
      break;
    }
  }

  const porcentagem = (corretos / frase.length) * 100;

  barraProgresso.style.width = porcentagem + "%";
}

campo.addEventListener("input", verificarDigitacao);

campo.addEventListener("paste", function (evento) {
  evento.preventDefault();
});

document.addEventListener("click", function () {
  campo.focus();
});

carregarFrase();
