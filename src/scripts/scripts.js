function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const imgProfile = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    imgProfile.setAttribute('src', 'https://github.com/ias4g.png')
    imgProfile.setAttribute('alt', 'Imagem de Izael com terno preto, camisa preta, cabelo preto, pele parda e barba curta com o fundo branco.')
  } else {
    imgProfile.setAttribute('src', 'https://www.github.com/ias4g.png')
    imgProfile.setAttribute('alt', 'Imagem de Izael com terno preto, camisa preta, cabelo preto, pele parda e barba curta com o fundo branco.')
  }
}