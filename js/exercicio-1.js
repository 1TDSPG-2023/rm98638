// 1
const bgBtn = document.querySelector('#background-btn')

bgBtn.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

//pra conseguir enxergar depois
bgBtn.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'white'
})

// 2
const itemForm = document.querySelector('#item-form')
const itemInput = document.querySelector('#item-input')
const itemList = document.querySelector('#item-list')
itemForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (itemInput.value === '') return // se o input estiver vazio, não faz nada
    const newItem = document.createElement('li')
    newItem.innerText = itemInput.value
    itemList.appendChild(newItem)
    itemInput.value = ''
})

// 3
const wolfImg = document.querySelector('#wolf-img')
const wolfBtn = document.querySelector('#wolf-btn')
wolfBtn.addEventListener('click', () => {
    let position = wolfImg.src.indexOf('lobo') + 4 // pega a posição do número
    position = Number(wolfImg.src.charAt(position)) // pega o número
    position = position === 6 ? 1 : position + 1
    wolfImg.src = `./img/lobo${position}.jpg`
})

// 4
const msgText = document.querySelector('#msg-text')
const msgBtn = document.querySelector('#msg-btn')
msgBtn.addEventListener('click', () => {
    msgText.innerText = 'Mensagem alterada com sucesso!'
    msgBtn.disabled = true
})

// 5
const gitImg = document.querySelector('#git-img')
const gitBtn = document.querySelector('#git-btn')
gitBtn.addEventListener('click', () => {
    const isHidden = gitImg.style.opacity === '0'
    gitImg.style.opacity = isHidden ? '1' : '0'
    gitBtn.innerText = isHidden ? 'Esconder Imagem' : 'Mostrar Imagem'
})
