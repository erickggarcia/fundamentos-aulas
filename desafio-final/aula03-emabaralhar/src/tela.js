const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
class Tela {
    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;">
                <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
                </div>
                <br>
        </div>
        `
    }

    static alterarConteudoHtml(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }

    static gerarStringPelaImagem(itens) {
        //Para cada item da lista, vai executar a funcao obterCodigoHtml
        //ao final, vai concatenar tudo em uma única string
        //muda de array para string
        return itens.map(Tela.obterCodigoHtml).join('')
    }

    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringPelaImagem(itens)
        Tela.alterarConteudoHtml(codigoHtml)
    }

    static configurarBotaoJogar(funcaoOnClick) {
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }
}