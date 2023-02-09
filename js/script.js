// links do menu e menu hamburguer

const links = document.querySelectorAll('#menu li a')

function ativarLink( link ) {
  const url = location.href;
  const href = link.href

  if( url.includes(href) ) {
    link.classList.add('ativo')  
  }
}

links.forEach(ativarLink)

const btnHamburguer = document.querySelector("#hamburguer");
const navigation = document.querySelector("#menu");
btnHamburguer.addEventListener("click", () => {
  navigation.classList.toggle('abrir')
  btnHamburguer.classList.toggle("abrir");
});


// /* Titulo pricipal */

// const titlePrimary = document.querySelectorAll('.titulo-primary')


// function handleEntrada( titulo ) {
  
// }

// titlePrimary.forEach( handleEntrada )

/* Sobre */

const btnsSobre = document.querySelectorAll('.btn-time')

function handleMudarTexto(foto) {
  foto.addEventListener('click', handleTrocar)
}

function handleTrocar( event ) {
  const ano = event.target
  const hTitulo = document.querySelector('.historia-conteudo h2')
  const hParag = document.querySelector('.historia-conteudo p')
  const himg = document.querySelector('.historia-imagem img')

  const getDados = async () => {
    const response = await fetch(`../dados.json`)
    const json = await response.json() 

    const anoJson = json.filter(( anos ) => anos.ano === ano.innerHTML)

    if( anoJson ) {
      anoJson.map((item) => {
        hTitulo.innerHTML = item.titulo
        hParag.innerHTML = item.historia
        himg.src = item.foto
      })
    }
  }
  getDados()
}

btnsSobre.forEach( handleMudarTexto )


/* Portfólio */

const fotosGaleria = document.querySelectorAll('.portfolio-galeria.galeria1 img')
const fotoPrincipal = document.querySelector('#galeria1 img')

function trocarPredio( event ) {
  const foto = event.currentTarget
  fotoPrincipal.setAttribute('src', foto.getAttribute('src'))
}

function handleTracarFotoGaleria (foto) {
  foto.addEventListener('click', trocarPredio)
}

fotosGaleria.forEach( handleTracarFotoGaleria )

// Termos

