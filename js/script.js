'use strict'
console.log('Hello World!')
const button = document.getElementById('meu-botao') //cspell: disable-line
button?.addEventListener('click', function () {
    let r = 0
    let g = 0
    let b = 0

    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    this.setAttribute('style', `background-color: rgb(${r}, ${g}, ${b})`)
    console.log(
        '%cClick',
        `color: rgb(${r}, ${g}, ${b}); font-size: 3em; font-weight: bold; text-shadow: 0 0 10px rgb(${r}, ${g}, ${b});`
    )
})
const h2 = document.querySelector('.tit-sec')
let tamanho = 40
h2.addEventListener('click', function () {
    tamanho -= 2
    this.style.fontSize = tamanho + 'px'
    console.log(tamanho)
})
