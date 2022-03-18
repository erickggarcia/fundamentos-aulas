class JogoDaMemoria {
    //se mandar um obj = {tela: 1, idade: 2, etc: 3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade
    //tela
    constructor({tela}) {
        this.tela = tela

        this.heroisIniciais = [
            //Caminho sempre relativo ao index.html
            {img: './imagens/Batman.png', nome: 'Batman'},
            {img: './imagens/Cyclope.png', nome: 'Cyclope'},
            {img: './imagens/Deadpool.png', nome: 'Deadpool'},
            {img: './imagens/MulherMaravilha.png', nome: 'MulherMaravilha'}
        ]

        this.iconePadrao = './imagens/padrao.png'
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }
    //para usar o this, não podemos usar static!
    inicializar() {
        //vai pegar todas as funções da classe tela!
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        //força a tela a usar o THIS de Jogo da memória
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    }

    embaralhar() {
        const copias = this.heroisIniciais
        //duplicar os itens
        .concat(this.heroisIniciais)
        //entrar em cada idem e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, {id: Math.random() / 0.5})
        })
        // ordenar
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
        //vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
    }

    esconderHerois(herois) {
        //vamos trocar a imagem de todos os herois existentes pelo icone padrao
        //Como fizemos no construtor, vamos extrair somente o necessário
        //usando a sintaxe({chave: 1}) estamos falando que vamos retornar o que estiver dentro dos parenteses
        //quando não usamos: (exemplo do id), o JS entende que o nome é o mesmo do valor. Ex. id: id, vida id,
        const heroisOcultos = herois.map(({nome, id}) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        //atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        //guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos
    }

   exibirHerois(nomeDoHeroi) {
        //vamos procurar esse heroi pelo nome em nossos heroisIniciais
        //vamos obter somente a imagem dele
        const {img} = this.heroisIniciais.find(({nome}) => nomeDoHeroi === nome)
        //vamos criar a função na tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)
    }

    verificarSelecao(id, nome) {
        const item = {id, nome}
        //va,ps verificar a quantidade de herois selecionados e tomar ação se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados) {
            case 0:
                //adiciona a escolha na lista, esperando pela próxima clicada
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // se a quantidade de escolhidos for 1, significa que o usuário só pode escolher mais um 
                //vamos obter o primeiro item da lista
                const [opcao1] = this.heroisSelecionados
                //zerar itens para nao selecionar mais de dois
                this.heroisSelecionados = []
                //conferimos se os nomes e ids batem conforme o esperado
                if(opcao1.nome === item.nome && 
                    //aqui verificamos se são ids diferentes para o usuário nao clicar duas vezes no mesmo
                opcao1.id !== item.id
                ) {
                    this.exibirHerois(item.nome)
                    //como o padrao e true, nao precisa passar nada
                    this.tela.exibirMensagem()
                    //para a execucao
                    return;
                }

                this.tela.exibirMensagem(false)
                //fim do case!
                break;           
    }
}

    jogar() {
        this.embaralhar()
    }
}