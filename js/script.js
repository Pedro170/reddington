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

const btnsSobre = document.querySelectorAll(".btn-time");

function handleMudarTexto(foto) {
  foto.addEventListener("click", handleTrocar);
}

// function handleTrocar( event ) {
//   const ano = event.target
//   const hTitulo = document.querySelector('.historia-conteudo h2')
//   const hParag = document.querySelector('.historia-conteudo p')
//   const himg = document.querySelector('.historia-imagem img')

//   const getDados = async () => {
//     const response = await fetch(`../dados.json`)
//     const json = await response.json()

//     const anoJson = json.filter(( anos ) => anos.ano === ano.innerHTML)

//     if( anoJson ) {
//       anoJson.map((item) => {
//         hTitulo.innerHTML = item.titulo
//         hParag.innerHTML = item.historia
//         himg.src = item.foto
//       })
//     }
//   }
//   getDados()
// }

// btnsSobre.forEach( handleMudarTexto )

/* Portfólio */

const galeria1 = document.querySelectorAll(".portfolio-galeria img");
const foto1 = document.querySelector("#galeria1 img");
const galeria2 = document.querySelectorAll(".portfolio-galeria.galeria2 img");
const foto2 = document.querySelector("#galeria2 img");
const galeria3 = document.querySelectorAll(".portfolio-galeria.galeria3 img");
const foto3 = document.querySelector("#galeria3 img");

function trocarPredio(event) {
  const foto = event.currentTarget;
  // foto.classList.add('border')
  // // if( foto.includes(event.currentTarget) ) {
  // //   foto.classList.remove('border')
  // // }
  foto1.setAttribute("src", foto.getAttribute("src"));
}

function handleTracarFotoGaleria(foto) {
  foto.addEventListener("click", trocarPredio);
}

galeria1.forEach(handleTracarFotoGaleria);

/* Anima Scroll */

const articlesLeft = document.querySelectorAll(".js-scroll");
const articlesRight = document.querySelectorAll(".js-scroll");

if (articlesLeft.length || articlesRight.length) {
  const windowMetade = window.innerHeight * 0.5;

  function animaScroll() {
    articlesLeft.forEach((articleLeft) => {
      const articleTop = articleLeft.getBoundingClientRect();
      const isArticleVisible = articleTop.top - windowMetade < 0;
      // const isArticleVisible = (articleTop.top -windowMetade) < 0;

      if (isArticleVisible) {
        articleLeft.classList.add("anima-scroll-left");
      } else {
        articleLeft.classList.remove("anima-scroll-left");
      }
    });

    articlesRight.forEach((articlesRight) => {
      const articleTop = articlesRight.getBoundingClientRect();
      const isArticleVisible = articleTop.top - windowMetade < 0;

      if (isArticleVisible) {
        articlesRight.classList.add("anima-scroll-right");
      } else {
        articlesRight.classList.remove("anima-scroll-right");
      }
    });
  }
  window.addEventListener("scroll", animaScroll);
}

/* Sbre anima números */

const numeros = document.querySelectorAll('[data-numero]')

numeros.forEach((numero) => {
  const total = +numero.innerText
  const incremento = Math.floor(total / 100);
  
  let start = 0;
  const timer = setInterval(() => {
    start+= incremento;
    numero.innerText = start;
    if(start > total) {
      numero.innerText = total
      clearInterval(timer)
    }
  }, 25 * Math.random())
})