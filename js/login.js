// const msgError = document.getElementById('msgError')
// const idUser = document.getElementById('idUser')
// const idPass = document.getElementById('idPass')
// const idGravaDados = document.getElementById('idGravaDados')
// const btnSubmit = document.getElementById('btnSubmit')
// const btnLimpar = document.getElementById('btnLimpar')

const listaUsuarios = [
    //cspell: ignore denden usuario usuarios gege gersu mary
    {
        nomeCompleto: 'Denden da silva',
        nomeUsuario: 'denden',
        senhaUsuario: '123456',
    },
    {
        nomeCompleto: 'Gersu da silva',
        nomeUsuario: 'gege',
        senhaUsuario: '123456',
    },
    {
        nomeCompleto: 'José da silva',
        nomeUsuario: 'Jose',
        senhaUsuario: '123456',
    },
    {
        nomeCompleto: 'Paulo das Couves',
        nomeUsuario: 'paulo',
        senhaUsuario: '123456',
    },
    {
        nomeCompleto: 'Mary Help',
        nomeUsuario: 'mary',
        senhaUsuario: '123456',
    },
    {
        nomeCompleto: 'Pedro Silva',
        nomeUsuario: 'pedro',
        senhaUsuario: '123456',
    },
]
localStorage.setItem('listaUser', JSON.stringify(listaUsuarios))
addEventListener('click', (event) => {
    const inputUser = document.querySelector('#idUser')
    const inputPass = document.querySelector('#idPass')

    const usuarioLogado = {
        nome: inputUser.value,
        senha: inputPass.value,
    }

    let usuarioValidado = {}

    if (event.target.id == 'btnSubmit') {
        try {
            const users = JSON.parse(localStorage.getItem('listaUser'))
            users.forEach((user) => {
                if (
                    usuarioLogado.nome == user.nomeUsuario &&
                    usuarioLogado.senha == user.senhaUsuario
                ) {
                    usuarioValidado = user
                    throw 'VALIDADO'
                }
            })
            throw 'NÂO VALIDADO'
        } catch (msg) {
            const msgError = document.querySelector('#msgError')
            if (msg == 'VALIDADO') {
                msgError.style.color = '#00ff00'
                msgError.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} foi validado com sucesso</strong></span>`

                localStorage.setItem(
                    'user-validado',
                    JSON.stringify(usuarioValidado)
                )
                const token =
                    Math.random().toString(16).substring(2) +
                    Math.random().toString(16).substring(2)
                localStorage.setItem('user-token', token)
                setTimeout(function () {
                    window.location.href = './sucesso.html'
                }, 3000)
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
