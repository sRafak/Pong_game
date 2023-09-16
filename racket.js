//Varíaveis da raquete
let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10
let alturaRaquete = 90

//Variáveis da raquete do oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;
let chanceDeErrar = 0;

//Variáveis da biblioteca
let colidiu = false

function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10; 
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete/2 -30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
}

function verificacolisaoMinhaRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete &&
      yBolinha - raio < yRaquete + alturaRaquete && 
      yBolinha + raio > yRaquete){
      velocidadeXBolinha *= -1;
      }
}

function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y,comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}


function calculaChanceDeErrar(){
  if (pontosOponente >= meusPontos){
    chanceDeErrar += 1;
    if (chanceDeErrar >39){
      chanceDeErrar = 40;
    }
  }
  else {
    chanceDeErrar -=1
    if ( chanceDeErrar < 35){
      chanceDeErrar = 35
    }
  }
}