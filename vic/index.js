const boton = document.querySelector('#dark-mode');
const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

boton.addEventListener('click', () => {
  console.log('diste click')
  console.log(prefresDarkScheme)
  if (prefresDarkScheme.matches) {
    document.body.classList.toggle('light-theme')
  } else {
    document.body.classList.toggle('dark-theme')
  }
})