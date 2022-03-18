function minhaFuncao1(parametro1) {
    return `aeeee`
}

//Funcao anônima
const minhaFuncao2 = function(parametro1) {
    return `aeee ${parametro1}`
}

//Arrow Function
const minhaFuncao3 = (parametro1) => {
    return `aeee ${parametro1}`
}

//Se você tem somente um parametro não precisa nem de parenteses, é só colocar tudo em uma linha
const minhaFuncao4 = parametro1 => `aee ${parametro1}`

//dentro de objetos
const obj1 = {
    minhaFuncao: parametro1 => `aee ${parametro1}`
}

obj1.minhaFuncao('test')

const obj2 = {
    minhaFuncao(parametro1, parametro2) {
        return `aeeee ${parametro1} ${parametro2}`
    }
}
obj2.minhaFuncao()