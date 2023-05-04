// links do menu e menu hamburguer

const links = document.querySelectorAll("#menu li a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

const btnHamburguer = document.querySelector("#hamburguer");
const navigation = document.querySelector("#menu");
btnHamburguer.addEventListener("click", () => {
  navigation.classList.toggle("abrir");
  btnHamburguer.classList.toggle("abrir");
});

// /* Titulo pricipal */

// const titlePrimary = document.querySelectorAll('.titulo-primary')

// function handleEntrada( titulo ) {

// }

// titlePrimary.forEach( handleEntrada )

/* Sobre */

function timeLine() {
  const historia = document.querySelector("#sobre .historia");
  const btnsSobre = document.querySelectorAll(".btn-time");
  let anoLimpo = "";

  const elemetHistory = {
    ano: "1998",
    titulo: "Início",
    historia:
      "A sustentabilidade é formada por um tripé, logicamente seguido de três conceitos básicos, onde cada um desses aspectos deverá estar estritamente ligado e de forma bem definida. A sustentabilidade é formada por um tripé, logicamente seguido de estritamente ligado e de forma bem definida.",
    foto: "https://i.im.ge/2023/04/30/LHzxvq.inicio.jpg",
  };

  if (historia) {
    historia.innerHTML = `
        <div class="historia-imagem">
          <img src="${elemetHistory.foto}" alt="imagem de um prédio antigo em preto e branco" width="1040"
            height="1040">
        </div>

        <div class="historia-conteudo">
          <h2 class="font-d-xl cor-p6">${elemetHistory.titulo}</h2>
          <p class="font-s cor-02">${elemetHistory.historia}</p>
        </div>
    `;
  }

  function pegarAno(ano) {
    ano.addEventListener("click", handleTrocar);
  }

  function handleTrocar(event) {
    const ano = event.target;
    if (ano !== ano.innerText) {
      anoLimpo = ano.innerText;
    }
    getDados(anoLimpo);
  }

  const getDados = async () => {
    const response = await fetch(`dados.json`);
    const json = await response.json();
    const datas = json.filter((anos) => anos.ano === anoLimpo);
    const dados = datas[0];
    montarHistoria(dados);
  };

  function montarHistoria(dados) {
    if (dados) {
      historia.innerHTML = `
        <div class="historia-imagem">
          <img src="${dados.foto}" alt="imagem de um prédio antigo em preto e branco" width="1040" height="1040">
        </div>

        <div class="historia-conteudo">
          <h2 class="font-d-xl cor-p6">${dados.titulo}</h2>
          <p class="font-s cor-02">${dados.historia}</p>
        </div>
      `;
    }
  }

  btnsSobre.forEach(pegarAno);
}

timeLine();

/* Portfólio */

const galeria1 = document.querySelectorAll(".portfolio-galeria img");
const foto1 = document.querySelector("#galeria1 img");
const galeria2 = document.querySelectorAll(".portfolio-galeria.galeria2 img");
const foto2 = document.querySelector("#galeria2 img");
const galeria3 = document.querySelectorAll(".portfolio-galeria.galeria3 img");
const foto3 = document.querySelector("#galeria3 img");

function trocarPredio(event) {
  const foto = event.currentTarget;
  foto1.setAttribute("src", foto.getAttribute("src"));
}

function handleTracarFotoGaleria(foto) {
  foto.addEventListener("click", trocarPredio);
}

galeria1.forEach(handleTracarFotoGaleria);

/* Anima Scroll */

function initScroll() {
  const articlesLeft = document.querySelectorAll(".js-scroll");
  const articlesRight = document.querySelectorAll(".js-scroll-right");

  if (articlesLeft.length || articlesRight.length) {
    const windowMetade = window.innerHeight * 0.5;

    function animaScroll() {
      articlesLeft.forEach((articleLeft) => {
        const articleTop = articleLeft.getBoundingClientRect();
        const isArticleVisible = articleTop.top - windowMetade < 0;
        // const isArticleVisible = (articleTop.top -windowMetade) < 0;

        if (isArticleVisible) {
          articleLeft.classList.add("anima-scroll-left");
        }
        // else {
        //   articleLeft.classList.remove("anima-scroll-left");
        // }
      });

      articlesRight.forEach((articlesRight) => {
        const articleTop = articlesRight.getBoundingClientRect();
        const isArticleVisible = articleTop.top - windowMetade < 0;

        if (isArticleVisible) {
          articlesRight.classList.add("anima-scroll-right");
        }
        // else {
        //   articlesRight.classList.remove("anima-scroll-right");
        // }
      });
    }
    window.addEventListener("scroll", animaScroll);
  }
}

initScroll();

/* Sbre anima números */

const numeros = document.querySelectorAll("[data-numero]");

numeros.forEach((numero) => {
  const total = +numero.innerText;
  const incremento = Math.floor(total / 100);

  let start = 0;
  const timer = setInterval(() => {
    start += incremento;
    numero.innerText = start;
    if (start > total) {
      numero.innerText = total;
      clearInterval(timer);
    }
  }, 25 * Math.random());
});

/* Contato */

const parametros = new URLSearchParams(location.search);
const modal = document.querySelector("#container-modal");
const fechar = document.querySelector("#container-modal button");

function ativarParam(param) {
  if (param !== "") {
    modal.classList.add("mostrar");
    fechar.addEventListener("click", () => {
      modal.classList.remove("mostrar");
    });
  }
}

function handleSubmit() {
  // console.log("object");
}

parametros.forEach(ativarParam);
