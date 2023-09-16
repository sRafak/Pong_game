//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function velocidadeBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBordaBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}