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