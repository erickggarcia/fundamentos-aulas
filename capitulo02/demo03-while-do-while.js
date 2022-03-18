//enquanto nao mudar, nao para!
let tempoDeParada = true
let contador = 0
while(tempoDeParada) {
    tempoDeParada = contador < 10
    if(contador % 2 === 0) {
        console.log('Número par', contador)
    }
    contador += 1
    //contador = contador + 1
}

// roda a primeira vez e testa a variável depois
do {
    console.log('Só uma vez! pois tempoDeParada é', tempoDeParada)

} while (tempoDeParada)

while(tempoDeParada) {
    //nao vai executar 
    console.log('Nem vai executar!')
}

