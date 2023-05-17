const INVALID_DUPLICATED_OPERATORS = ['+', '-', '*', '/']
function insereNumeroVisor(botao, visor) {
    // cspell: ignore botao
    if (
        INVALID_DUPLICATED_OPERATORS.includes(botao.value) &&
        INVALID_DUPLICATED_OPERATORS.includes(
            visor.value[visor.value.length - 1]
        )
    ) {
        return
    }
    visor.value += botao.value
}

const resultadoDasOperacoes = (visor) => {
    // cspell: ignore resultadoDasOperacoes
    visor.value = eval(visor.value)
}
