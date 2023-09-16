function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  velocidadeBolinha();
  colisaoBordaBolinha();
  mostraRaquete(xRaquete, yRaquete)
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  //multiplayer();
  //verificacolisaoMinhaRaquete();
}
