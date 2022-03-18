const Matematica = require('./Matematica')
//console.log(Matematica.somar(1, 4))
const readLine = require('readline')
//const {multiplicar} = require('./Matematica')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Insira o primeiro valor \n', valor1 => {
    terminal.question('Insira o segundo valor \n', valor2 => {
        terminal.question('Insira a operação \n', tipoOperação => {
            const resultado = Matematica[tipoOperação] (
                Number(valor1), Number(valor2)
            )
            console.log(
                `A operação ${tipoOperação} de ${valor1} e ${valor2} é ${resultado}`
            )
            terminal.close()
        }) 
        console.log('valor1', valor1, 'valor2', valor2)
    })
})