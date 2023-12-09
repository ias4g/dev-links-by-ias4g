const html = document.documentElement
const cache = localStorage.getItem('mode')

if (cache === 'light') {
  html.classList.add(cache)
}

function toggleMode() {
  html.classList.toggle('light')

  const imgProfile = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    localStorage.setItem('mode', 'light');
    imgProfile.setAttribute('src', 'https://github.com/ias4g.png')
    imgProfile.setAttribute('alt', 'Imagem de Izael com terno preto, camisa preta, cabelo preto, pele parda e barba curta com o fundo branco.')
  } else {
    localStorage.setItem('mode', null);
    imgProfile.setAttribute('src', 'https://www.github.com/ias4g.png')
    imgProfile.setAttribute('alt', 'Imagem de Izael com terno preto, camisa preta, cabelo preto, pele parda e barba curta com o fundo branco.')
  }
}