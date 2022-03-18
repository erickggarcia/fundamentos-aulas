const fs = require('fs')
/*//importar o módulo filesystem que é o módulo do nodejs para ler arquivos ou trabalhar com coisas do sistema operacional
//vamos ler o arquivo usando o readfile
fs.readFile('./arq1.txt', (error, resposta) => {
    //se tiver um erro, utilizaremos um console.log, ou console.error, passamos a stack dele e damos um return
    if(error) {
        console.error('Deu ruim***', error.stack)
        return;
    }

    console.log('resposta', resposta.toString()) // retorna um buffer, que no Js é um arquivo binário grande, que podemos cortar em pedaços para processalos sob demanda, ele não necessariamente é um texto nesse momento, só vai ser um texto quando convertermos de fato para um texto.
})
*/
fs.readFile('./arq1.txt', (errorArq1, respostaArq1)=> {
    if(errorArq1) {
        console.error('Deu pau no arq1***', errorArq1)
        return;
    }
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => {
        if(errorArq2) {
        console.error('Deu pau*** no arq2', errorArq2)
        return;
        }
        fs.readFile('./arq3.txt', (errorArq3, respostaArq3) => {
            if(errorArq3) {
                console.error('Deu pau*** no arq2', errorArq3)
                return;
            }
            const conteudo = `${respostaArq1} \n ${respostaArq2}\n ${respostaArq3} `
            console.log(conteudo)
            fs.writeFile('./final.txt', conteudo, (errorWrite,respostaWrite) => {
                if(errorWrite) {
                    console.error('Deu ruim na gravação', errorWrite)
                }
                console.log('Arquivo salvo com sucesso!!')
            })
        })
    })
})