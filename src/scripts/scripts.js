const html = document.documentElement
const cache = localStorage.getItem('mode')

if (cache === 'light') {
  html.classList.add(cache)
}

function setMode(mode) {
  localStorage.setItem('mode', mode);
}

function resetMode() {
  localStorage.removeItem('mode')
}

function getMode() {
  return localStorage.getItem('mode')
}

function toggleMode() {
  html.classList.toggle('light')

  const imgProfile = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    setMode('light')
    imgProfile.setAttribute('src', 'https://github.com/ias4g.png')
    imgProfile.setAttribute('alt', 'Imagem de Izael com terno preto, camisa preta, cabelo preto, pele parda e barba curta com o fundo branco.')
  } else {
    setMode(null)
    imgProfile.setAttribute('src', 'https://www.github.com/ias4g.png')
    imgProfile.setAttribute('alt', 'Imagem de Izael com terno preto, camisa preta, cabelo preto, pele parda e barba curta com o fundo branco.')
  }
}