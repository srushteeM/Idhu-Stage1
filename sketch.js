var player,ground,bg,player_run,player_jump;
var bground_img;

function preload(){
ground_img=loadImage("ground.png");
player_run=loadAnimation("Running/0.png","Running/1.png","Running/2.png","Running/3.png","Running/4.png","Running/5.png","Running/6.png","Running/7.png","Running/8.png");

}

function setup() {
  createCanvas(800,400);

  bg=createSprite(400,200);
  bg.addImage(ground_img);
  bg.scale=1.2;
  bg.x=bg.width/2;
  player=createSprite(50, 360, 20, 50);
  player.addAnimation("running",player_run);
  player.addAnimation("jumping",player_jump);
  player.scale=0.8;
  player.width=100;
  
  ground=createSprite(400, 380, 1600, 20);
  ground.visible=false;
}

function draw() {
  background(255,255,255);  

bg.velocityX=-2;
if(bg.x<0){
  bg.x=bg.width/2;
}

if(keyDown("space")){
  player.velocityY=-12;
  
}
player.velocityY+=0.5;

player.collide(ground);
  drawSprites();
}