class JogoDaMemoria {
    //se mandar um obj = {tela: 1, idade: 2, etc: 3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade
    //tela
    constructor({tela}) {
        this.tela = tela

        this.heroisIniciais = [
            //Caminho sempre relativo ao index.html
            {img: './imagens/Batman.png', name: 'Batman'},
            {img: './imagens/Cyclope.png', name: 'Cyclope'},
            {img: './imagens/Deadpool.png', name: 'Deadpool'},
            {img: './imagens/MulherMaravilha.png', name: 'MulherMaravilha'}
        ]
    }
    //para usar o this, não podemos usar static!
    inicializar() {
        //vai pegar todas as funções da classe tela!
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}