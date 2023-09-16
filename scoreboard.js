
//Variáveis do placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(148,0,211));
  rect(150,11, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(148,0,211));
  rect(450,11, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
  noStroke();
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}