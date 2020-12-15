//tela de jogo
var tela =1;
//imagens background;
let telaInform;
let telaresp;
let win;
//imagens objetos;
let triangulo;
let barra1;
let barradiv3;
let barradiv4;
let barradiv5;
let barradiv10;
let retang;
let sime1;
let sime1a;
let sime1b;
let sime1c;
let sime1d;
let fig1;
let fig2;
let div100;
let fra;
let eu;
//posição botoes (tela 1-2)
var alt_botIn_x = 200;
var larg_botIn_y = 70;
let bot_alt = 130;
let bot_larg = 60;
//pontuação
var pontos=[];
//musicas;
let mouse;//som do mause nas fases

function preload() {
    telaInform = loadImage('tela infor.png');
    telaresp = loadImage('tela de resposta.png');
    triangulo= loadImage('triangulo.png'); 
    barra1=loadImage('barra1.png');
    barradiv3=loadImage('barradiv3.jpg');
    barradiv4=loadImage('barradiv4.jpg');
    barradiv5=loadImage('barradiv5.jpg');
    barradiv10=loadImage('barradiv10.jpg');
    sime1=loadImage('Simetrias1.png');
    sime1a=loadImage('Simetrias1a.png');
    sime1b=loadImage('Simetrias1b.png');
    sime1c=loadImage('Simetrias1c.png');
    sime1d=loadImage('Simetrias1D.png');
    retang=loadImage('retangulo.png');
    fig1=loadImage('areafig.png');
    fig2=loadImage('areafig1.png');
    win=loadImage('win.png');
    div100=loadImage('div100.png');
    fra=loadImage('fra.png');
    eu=loadImage('WhatsApp Image 2020-12-14 at 21.37.30.jpeg');
    soundFormats('mp3');
    mouse=loadSound('mouse.mp3');
}//ARQUIVOS EXTERNOS;

function setup() {
  createCanvas(450, 600);
}//CANVAS e musicas;

function draw() {
  textStyle(NORMAL);
  strokeWeight(3);
  textAlign(CENTER);
  if(tela==1){
    background(telaInform);
    //nome do Jogo
    textSize(60);
    textStyle(BOLD);
    stroke('rgb(0,255,0)');
    fill(0);
    textAlign(CENTER, TOP);    
    text('MathQuiz', 225, 90);

    //jogar ao click
    if (mouseX > 120 && mouseX < 120 + alt_botIn_x && mouseY > 230 && mouseY < 230 + larg_botIn_y) {
      fill('rgba(0,255,0, 0.25)');
      if (mouseIsPressed) { //config ao clickar em jagar
        tela = 4;
      }
    } 
    else {
      noFill();
    }
    stroke(250)
    rect(120, 230, alt_botIn_x, larg_botIn_y, 20);

    //botão jogar
    textSize(30);
    fill(250);
    textAlign(CENTER);
    stroke('red');
    text('Jogar', 215, 250);

    // informação ao clickar
    if (mouseX > 120 && mouseX < 120 + alt_botIn_x && mouseY > 310 && mouseY < 310 + larg_botIn_y) {
      fill('rgba(0,255,0, 0.25)');
      if (mouseIsPressed) { //config ao clickar em informação
        tela = 2;
      }
    } 
    else {
      noFill();
    }
    stroke(250);
    rect(120, 310, alt_botIn_x, larg_botIn_y, 20);

    //botão informação
    stroke('red');
    textSize(27);
    textAlign(CENTER);
    fill(250);
    text('Informações', 225, 335);
    noStroke();
    noFill();
  }//tela inicial
  else if(tela==2){
    let escrita="O game MathQuiz é muito simples de se jogar, basta selecionar os botões com o mouse e aproveitar sua trajetória de aprendizagem ao decorrer das questões."
    
    background(telaInform);
    textSize(50);
    textStyle(BOLD);
    fill(255);
    stroke('red');
    text('como Jogar:', 225,120)
    textAlign(CENTER, TOP);
    noStroke();
    
    stroke('blue');
    textSize(20);
    text(escrita, 110,250,270,400);
    noStroke();

    //config bot voltar
    if (mouseX > 285 && mouseX < 285 + bot_alt && mouseY >30 && mouseY <30 + bot_larg) {
      fill('rgba(0,255,0, 0.25)');
      if (mouseIsPressed) { //config ao clickar em jagar
        tela = 1;
      }
    } else {
      noFill();
    }
    stroke('purple')
    rect(285, 30, bot_alt, bot_larg, 20);
    
    //botão voltar
    textSize(30);
    fill(250);
    textAlign(CENTER);
    text('voltar', 351, 45);
    
    //config bot creditos
    if (mouseX > 30 && mouseX < 30 + bot_alt && mouseY >500 && mouseY <500 + bot_larg) {
      fill('rgba(0,255,0, 0.25)');
      if (mouseIsPressed) { //config ao clickar em jagar
        tela = 15;
      }
    } else {
      noFill();
    }
    rect(30, 500, bot_alt, bot_larg, 20);
    
    //botão creditos
    textSize(27);
    fill(250);
    text('créditos',93,520);    
    
    noFill();
    noStroke();
    
  }//tela de informações
  else if(tela==3){
   background(0);
    textSize(50);
    textStyle(BOLD);
    fill('purple');
    stroke(255);
    textAlign(CENTER, TOP);
    text('GAME OVER', 225,180)
    
    //play again ao click
    if (mouseX >30 && mouseX <30 + alt_botIn_x && mouseY > 30 && mouseY < 30 + larg_botIn_y) {
      fill('gray');
      if (mouseIsPressed) { //config ao clickar em jagar
        tela = 4;
        pontos=[];
      }
    } else {
      noFill();
    }
    stroke('purple')
    rect(30,30, alt_botIn_x, larg_botIn_y, 20);

    //botão Play again
    textSize(30);
    fill(250);
    stroke('black');
    text('Play again',130,50);

    
    //config bot MENU
    if (mouseX > 285 && mouseX < 285 + bot_alt && mouseY >30 && mouseY <30 + bot_larg) {
      fill('gray');
      if (mouseIsPressed) { //config ao clickar em jagar
        tela = 1;
        pontos=[];
      }
    } else {
      noFill();
    }
    stroke('red')
    rect(285, 30, bot_alt, bot_larg, 20);

    //botão Menu
    textSize(30);
    fill( 'white');
    stroke('blue');
    text('Menu', 351, 45);
    
    textSize(25)
    text('Pontuação: '+pontuacao(),120,280);
    
    noStroke();
    noFill();
  }//tela de gameover
  else if(tela==4){
  background(telaInform);
  image(triangulo,10,33,200,200);
  analise()
  let tri='Considerando que os quadrados da malha quadriculada tem 1cm de lado, qual a  área  da figura pintada?';  
  
  textSize(22)
  fill('white'); 
  stroke('purple');
  textAlign(LEFT,CENTER);
  text(tri,230,40,220,200)
  noStroke();
    
  textSize(50) 
  
  fill(255)  
  text('77 CM²',30,380)
  text('82 CM²',250,380)
  text('96 CM²',30,528)
  text('62 CM²',250,528)
  
  textSize(14);
  fill('white');
  stroke('purple')  
  text('Dimensões 16 x 14',43,250);    
  
  noStroke();
  noFill();
    
}//fase 1
  else if(tela==5){
  background(telaInform);
  
  analise();  
  
  image(barra1,30,50,170,160);
  image(barradiv3,20,320,180,100);
  image(barradiv4,20,470,180,100);
  image(barradiv5,250,320,180,100);    
  image(barradiv10,250,470,180,100);
    
  let texto1='Chocolate de Joãozinho';
  let texto='Joãozinho quer dividir com seu 4 amigos uma barra de chocolate, qual das alternativas representa a partilha igualitária?' 
  
  textAlign(LEFT,CENTER);  
  fill('white');
  stroke('Brown');  
  textSize(18);
  text(texto,230,40,200,180);
  textSize(12)
  
  noStroke();
  fill('')  
  text(texto1,50,130,200,180);
  noFill();
  
  }//fase 2
  else if(tela==6){
  background(telaInform);
  
  analise();
  
  image(retang,10,35,200,200);  

  let tri='Considerando que os quadrados da malha quadriculada tem 1cm de lado, qual a  área  da figura pintada?';    
    
  textSize(22)
  fill('white'); 
  stroke('brown');
  textAlign(LEFT,CENTER);
  text(tri,230,50,220,200);
  noStroke();
    
  textSize(50); 
  
  fill(255); 
  text('170 CM²',15,380);
  text('158 CM²',235,380);
  text('160 CM²',15,528);
  text('240 CM²',238,528);    
  textSize(14);
  fill('yellow');  
  text('Dimensões 20 x 14',50,250);
  
  noStroke();
  noFill();
    
  }//fase 3
  else if(tela==7){
  background(telaInform);
  
  analise();  
  
  image(sime1,20,50,190,150);
  image(sime1a,20,320,180,100);
  image(sime1c,20,470,180,100);
  image(sime1b,250,320,180,100);    
  image(sime1d,250,470,180,100);
    
  let texto='Qual das imagens abaixo representam Simetria bilateral com relação a imagem ao lado?' 
  
  textAlign(LEFT,CENTER);  
  fill('white');
  stroke('Brown');  
  textSize(20);
  text(texto,230,40,220,180);
  textSize(12)
  
  noStroke(); 
  noFill();
  
  }//fase 4 
  else if(tela==8){
  background(telaInform);
  image(fig1,10,33,200,200);
  analise()
  let tri='Considerando que os quadrados da malha quadriculada tem 1cm de lado, qual a  área  da figura pintada?';  
  
  textSize(22)
  fill('white'); 
  stroke('blue');
  textAlign(LEFT,CENTER);
  text(tri,230,40,220,200)
  noStroke();
    
  textSize(50) 
  
  fill(255)  
  text('100 CM²',10,380)
  text('154 CM²',240,380)
  text('108 CM²',10,528)
  text('118 CM²',240,528)
  
  textSize(14);
  fill('white');
  stroke('blue')  
  text('Dimensões 14 x 11',43,250);    
  
  noStroke();
  noFill();
        
  }//fase 5
  else if(tela==9){
  background(telaInform);
  
  analise();  
  
  image(barra1,30,50,170,160);
  image(barradiv3,250,470,180,100);
  image(barradiv4,20,470,180,100);
  image(barradiv5,250,320,180,100);    
  image(barradiv10,20,320,180,100);
    
  let texto1='chocolate de Percy';
  let texto='Percy quer dividir com seu 9 amigos uma barra de chocolate, qual das alternativas representa a partilha igualitária?' 
  
  textAlign(LEFT,CENTER);  
  fill('white');
  stroke('Brown');  
  textSize(18);
  text(texto,230,40,200,180);
  textSize(12)
  
  noStroke();
  fill('')  
  text(texto1,60,130,200,180);
  noFill();
            
  }//fase 6 
  else if(tela==10){
    background(telaInform);
  
  analise();  
  
  image(barradiv3,20,50,190,150);
    
  let texto='A parte marrom da imagem ao lado representa 0,333... da imagem total. Qual a fração que representa esse valor?' 
  
  textAlign(LEFT,CENTER);  
  fill('white');
  stroke('Brown');  
  textSize(20);
  text(texto,225,40,220,180);
  noStroke();
  
  textSize(60) 
  fill(255)  
  text('1/8',60,380)
  text('1/6',290,380)
  text('1/3',60,528)
  text('1/4',290,528)  
  noFill();       
  }//fase 7
  else if(tela==11){
  background(telaInform);
  image(fig2,10,33,200,200);
  analise()
  let tri='Considerando que os quadrados da malha quadriculada tem 1cm de lado, qual a  área  da figura pintada?';  
  
  textSize(22)
  fill('white'); 
  stroke(color(0, 0, 255));
  textAlign(LEFT,CENTER);
  text(tri,230,40,220,200)
  noStroke();
    
  textSize(50) 
  
  fill(255)  
  text('68 CM²',30,380)
  text('83 CM²',250,380)
  text('94 CM²',30,528)
  text('88 CM²',250,528)
  
  textSize(14);
  fill('white');
  stroke('brown')  
  text('Dimensões 14 x 10',43,250);    
  
  noStroke();
  noFill();
        
  }//fase 8
  else if(tela==12){
  background(telaInform);
  image(div100,10,33,200,200);
  analise()
  let tri='Considerando que os quadrados da malha quadriculada tem 1cm de lado, qual a  fração que repre- senta a área pintada da figura?';  
  
  textSize(22)
  fill('white'); 
  stroke('blue');
  textAlign(LEFT,CENTER);
  text(tri,230,40,220,200)
  noStroke();
    
  textSize(50) 
  
  fill(255)  
  text('1/101',45,380)
  text('2/200',270,380)
  text('10/100',30,528)
  text('2/100',270,528)
  
  textSize(14);
  fill('white');
  stroke('blue')  
  text('Dimensões 10 x 10',43,250);    
  
  noStroke();
  noFill();
      
  }//fase 9
  else if(tela==13){
   background(telaInform);
  image(fra,10,33,200,200);
  analise()
  let tri='Calcule a fração ao lado. Qual a respos- ta em numeros deci- mais ?';  
  
  textSize(22)
  fill('white'); 
  stroke('blue');
  textAlign(LEFT,CENTER);
  text(tri,230,40,220,200)
  noStroke();
    
  textSize(50) 
  
  fill(255)  
  text('0,25',50,380)
  text('2,5',290,380)
  text('0,4',70,528)
  text('0,35',280,528)
  
  noStroke();
  noFill();       
  }//fase 10
  else if(tela==14){
    background(win);
    
    textSize(50);
    fill('GREEN')
    stroke('BLUE')
    text('VENCEDOR',220,190)
    
    fill( 'white');
    stroke('blue');
    textSize(25)
    text('Pontuação: '+pontuacao(),120,390)    
    
    //config bot MENU
    if (mouseX > 285 && mouseX < 285 + bot_alt && mouseY >30 && mouseY <30 + bot_larg) {
      fill('rgba(0,255,0, 0.25)');
      if (mouseIsPressed) { //config ao clickar em jagar
        tela = 1;
        pontos=[];
      }
    } else {
      noFill();
    }
    stroke('brown')
    rect(285, 30, bot_alt, bot_larg, 20);
    
    //botão Menu
    textSize(30);
    fill( 'brown');
    stroke('white');
    text('Menu', 351, 68);
    
    noStroke();
    noFill();    
  }//tela de vitoria
  else if(tela==15){
  background(telaInform); 
  textAlign(CENTER, TOP);  
  image(eu,10,380,100,140); 
    //config bot voltar
    if (mouseX > 285 && mouseX < 285 + bot_alt && mouseY >30 && mouseY <30 + bot_larg) {
      fill('rgba(0,255,0, 0.25)');
      if (mouseIsPressed) { //config ao clickar em jagar
        tela = 1;
      }
    } else {
      noFill();
    }
    stroke('purple')
    rect(285, 30, bot_alt, bot_larg, 20);
    
    //botão voltar
    textSize(30);
    fill(250);
    text('Menu', 351,50);
    
    stroke('red');
    textSize(28);
    text('UFRN - Projeto Educacional',200,120);
    text('Lógica de Programação - (LOP)',220,170);
    text('',260,330);
    textSize(30);
    stroke('Green');
    text('Programador',220,280);
    stroke('blue');
    textSize(25);
    text('Flávio J. N. de Souza ',280,420);
    
    noFill();
    noStroke();
  }
}//TELAS DE JOGO;

function analise(){//mostra se o mause está em cima da alternativa
  if (mouseX >2 && mouseX <222 && mouseY >300 && mouseY <445) {//A=(esquerda superior)
      fill('rgba(0,255,0, 0.25)');
    } else {
      noFill();
    }
   stroke(250)
   rect(2, 300,220,145, 20);
       
  if (mouseX >227 && mouseX <447 && mouseY >300 && mouseY <445) {//B=(direita superior)
      fill('rgba(0,255,0, 0.25)');
    } else {
      noFill();
    }
    stroke(250)
    rect(227, 300,220,145, 20);
  
  if (mouseX >2 && mouseX <222 && mouseY >450 && mouseY <595) {//C=(esquerda Inferior)
      fill('rgba(0,255,0, 0.25)');
    } else {
      noFill();
    }
    stroke(250)
    rect(2,450,220,145, 20);
  
  if (mouseX >227 && mouseX <447 && mouseY >450 && mouseY <595) {//D=(direita inferior)
      fill('rgba(0,255,0, 0.25)');
    } else {
      noFill();
    }
    stroke(250)
    rect(227,450,220,145, 20);
    noStroke();
}//APROXIMAÇÃO DO MOUSE DAS ALTERNATIVAS;

function mousePressed(){
  if(tela==4){
    resp_a(5,45);  
  }
  else if(tela==5){
    resp_b(6,25);        
  }
  else if(tela==6){
    resp_c(7,30)        
  }
  else if(tela==7){
    resp_b(8,50);  
  }
  else if(tela==8){
    resp_d(9,50);        
  }
  else if(tela==9){
    resp_a(10,20);
  }
  else if(tela==10){
    resp_c(11,60);        
  }
  else if(tela==11){
    resp_d(12,60);  
  }
  else if(tela==12){
    resp_b(13,30);
  }
  else if(tela==13){
    resp_a(14,30)
  }
  
}//TRANSIÇÃO DE TELA;
function resp_a(l,P){
  if(mouseX >2 && mouseX <222 && mouseY >300 && mouseY <445||mouseX >227 && mouseX <447 && mouseY >300 && mouseY <445||mouseX >2 && mouseX <222 && mouseY >450 && mouseY <595||mouseX >227 && mouseX <447 && mouseY >450 && mouseY <595){
    if(mouseX >2 && mouseX <222 && mouseY >300 && mouseY <445){//resposta correta
      tela=l;
      pontos[pontos.length]=P;
      mouse.play();
    }else{
      tela=3; //game over(respostas erras)
      mouse.play();
    }
  }
}//RESPOSTA CORRETA A(CANTO SUPERIOR ESQUERDO);
function resp_b(l,P){
  if(mouseX >2 && mouseX <222 && mouseY >300 && mouseY <445||mouseX >227 && mouseX <447 && mouseY >300 && mouseY <445||mouseX >2 && mouseX <222 && mouseY >450 && mouseY <595||mouseX >227 && mouseX <447 && mouseY >450 && mouseY <595){
    if(mouseX >227 && mouseX <447 && mouseY >300 && mouseY <445){//resposta correta
      tela=l;
      pontos[pontos.length]=P;
      mouse.play();
    }else{
      tela=3; //game over(respostas erras)
      mouse.play();
    }
  }  
}//RESPOSTA CORRETA B(CANTO SUPERIOR DIREITO);
function resp_c(l,P){
   if(mouseX >2 && mouseX <222 && mouseY >300 && mouseY <445||mouseX >227 && mouseX <447 && mouseY >300 && mouseY <445||mouseX >2 && mouseX <222 && mouseY >450 && mouseY <595||mouseX >227 && mouseX <447 && mouseY >450 && mouseY <595){
    if(mouseX >2 && mouseX <222 && mouseY >450 && mouseY <595){//resposta correta
      tela=l;
      pontos[pontos.length]=P;
      mouse.play();
    }else{
      tela=3; //game over(respostas erras)
      mouse.play();
    }
  }   
}//RESPOSTA CORRETA C(CANTO INFERIOR ESQUERDO);
function resp_d(l,P){
   if(mouseX >2 && mouseX <222 && mouseY >300 && mouseY <445||mouseX >227 && mouseX <447 && mouseY >300 && mouseY <445||mouseX >2 && mouseX <222 && mouseY >450 && mouseY <595||mouseX >227 && mouseX <447 && mouseY >450 && mouseY <595){
    if(mouseX >227 && mouseX <447 && mouseY >450 && mouseY <595){//resposta correta
      tela=l;
      pontos[pontos.length]=P;
      mouse.play();
    }else{
      tela=3; //game over(respostas erras)
      mouse.play();
    }
  }    
}//RESPOSTA CORRETA D(CANTO INFERIOR DIREITO);

function pontuacao(){
  var somarpontos=0;
  for(var i=0;i<pontos.length;i++){
    somarpontos+=pontos[i];
  }
  return somarpontos;
}//soma total de pontos(game over||winner);