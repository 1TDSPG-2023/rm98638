if (localStorage.getItem('user-token')) {
    const elementoDeBoasVindas = document.querySelector('#welcome')

    //RECUPERAR O OBJETO USUÁRIO-VALIDADO DO LOCAL-STORAGE
    const usuarioValidado = JSON.parse(localStorage.getItem('user-validado'))

    elementoDeBoasVindas.innerHTML = `<span><strong>Bem vindo : ${usuarioValidado.nomeCompleto}</strong></span>`
} else {
    alert('Faça o login para acessar essa página')
    window.location.href = './login.html'
}
const btnLogout = document.querySelector('#btnSair')
btnLogout.addEventListener('click', () => {
    localStorage.removeItem('user-token')
    localStorage.removeItem('user-validado')
    window.location.href = './login.html'
})
