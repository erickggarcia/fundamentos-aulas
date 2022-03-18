function onLoad() {
   const dependencias = {
       tela: Tela // a classe tela é global
   }
    //inicializamos o jogo da memória
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
}
window.onload = onLoad