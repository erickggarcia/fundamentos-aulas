const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})
 
function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('O campo não pode ser vazio!!!'))
        })
    })
}
 
async function main() {
    try {
        const nome = await questionAsync('Qual é o seu nome?')
        const telefone = await questionAsync('Qual é seu telefone?')
        console.log(`Nome: ${nome} Telefone: ${telefone}`)
    } catch(error) {
        console.log('Deu ruim***', error.stack)
    }
    finally {
        terminal.close()
    }
}
main()