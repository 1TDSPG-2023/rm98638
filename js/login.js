// const msgError = document.getElementById('msgError')
// const idUser = document.getElementById('idUser')
// const idPass = document.getElementById('idPass')
// const idGravaDados = document.getElementById('idGravaDados')
// const btnSubmit = document.getElementById('btnSubmit')
// const btnLimpar = document.getElementById('btnLimpar')

const tokenGerado = () => Math.random().toString(16).substring(2)

const user1 = {
    name: 'dede',
    password: '12345',
    gravarDados: true,
    token: tokenGerado(),
}
const user2 = {
    name: 'gege', // cspell: disable-line
    password: '54321',
    gravarDados: true,
    token: tokenGerado(),
}
const users = [user1, user2]
addEventListener('click', (event) => {
    const inputUser = document.querySelector('#idUser')
    const inputPass = document.querySelector('#idPass')
    if (event.target.id == 'btnSubmit') {
        try {
            users.forEach((user) => {
                if (
                    inputUser.value == user.name &&
                    inputPass.value == user.password
                ) {
                    throw 'VALIDADO'
                }
            })
            throw 'NÂO VALIDADO'
        } catch (msg) {
            const msgError = document.querySelector('#msgError')
            if (msg == 'VALIDADO') {
                msgError.style.color = '#00ff00'
                msgError.innerHTML =
                    '<span><strong>Usuário validado com sucesso</strong></span>'
            } else {
                msgError.style.color = '#ff0000'
                msgError.innerHTML =
                    '<span><strong>Usuário ou senha inválidos</strong></span>'
            }
            console.log(msg)
        }
    } else if (event.target.className.match('fa-eye')) {
        if (inputPass.getAttribute('type') == 'password') {
            inputPass.setAttribute('type', 'text')
            event.target.className = 'fa fa-eye-slash'
        } else {
            inputPass.setAttribute('type', 'password')
            event.target.className = 'fa fa-eye'
        }
    }
})
