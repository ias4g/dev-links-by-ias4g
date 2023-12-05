function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', './src/assets/avatar.png')
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo')
  } else {
    img.setAttribute('src', 'https://www.github.com/ias4g.png')
    img.setAttribute('alt', 'Imagem de Izael com terno preto, camisa preta, cabelo preto, pele parda e barba curta com o fundo branco.')
  }
}