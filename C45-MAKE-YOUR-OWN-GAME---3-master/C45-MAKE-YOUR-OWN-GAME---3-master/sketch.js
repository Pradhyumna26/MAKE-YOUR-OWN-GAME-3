var canvas;

var player;

var ground;

var obstacles = [];
var obstacles2 = [];
var obstacle,o2;

var coin;
var coin2;

var coins = [];
var coins2 = [];

var pos = 0;
var zpos = 0;

var obstacleX = 0;
var obstacleX2 = 0;
var obstacleZ = -800;

var coinZ = -1000;

var occur;
var occur2;

var noOfCoins;

var planet;
var planets = [];

var a;
var a2;
var x;

function setup(){
canvas = createCanvas(window.innerWidth,window.innerHeight,WEBGL);

player = new Player(-100);

occur = 300;
occur2 = 500;

x = 15;
a = 0;
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW && x === 15){
    x = 150;
    player.setDir(150,150);
  }else if(keyCode === RIGHT_ARROW && x === -130){
    x = 15;
    player.setDir(15,150);
  }else if(keyCode === LEFT_ARROW && x === 15){
    x = -130;
    player.setDir(-130,150);
  }else if(keyCode === LEFT_ARROW && x === 150){
    x = 15;
    player.setDir(15,150);
  }else if(keyCode === UP_ARROW){
    player.jump();
  }
}

function draw(){
background(0);

player.display();
player.fall();

//console.log(mouseY);

noOfCoins = random(2,6);

if(frameCount%occur == 0){
 for(var i = 0; i < noOfCoins; i++){
  coin = new Coin(130,100,coinZ);
  coins.push(coin);
  coinZ += 90;
  }
  coinZ = -500;
}
if(frameCount%occur2 == 0){
  for(var i = 0; i < noOfCoins; i++){
    coin2 = new Coin(-130,100,coinZ);
    coins2.push(coin2);
    coinZ += 90;
  }
  coinZ = -500;
}

if(frameCount%occur2 == 0){
 for(var i = 0; i > -2; i--){
  obstacle = new Obstacle(i+obstacleX+10,125,obstacleZ);
  obstacles.push(obstacle);
  a = 1;
  obstacleX += 90;
 }
}

if(frameCount%occur == 0){
  for(var i = 0; i < 2; i++){
    o2 = new Obstacle(i+obstacleX2,125,obstacleZ);
    obstacles2.push(o2);
    a2 = 1;
    obstacleX2 -= 90;
  }
}

if(obstacleX === 180){
  obstacleX = null;
}

if(obstacleX2 === -180){
  obstacleX2 = null;
}

for(var i of obstacles){
  if(player.zdir == i.z && 
    player.xdir - i.x <= 100 && 
    i.x - player.xdir <= 100 &&
    i.y - player.ydir <= 50 &&
    player.ydir - i.y <= 50){
    noLoop();
  }
  i.z += 5;
  i.display();
 }

 for(var j of obstacles){
   if(player.zdir < j.z-180){
     obstacles.shift();
   }
 }

 for(var i2 of obstacles2){
  if(player.zdir == i2.z && 
    player.xdir - i2.x <= 100 && 
    i2.x - player.xdir <= 100 &&
    i2.y - player.ydir <= 50 &&
    player.ydir - i2.y <= 50){
     noLoop();
   }
  i2.z += 5;
  i2.display();
 }

 for(var j of obstacles2){
    if(player.zdir < j.z-180){
      obstacles2.shift();
    }
 }

 for(var co of coins){
   if(player.zdir <= co.z && player.xdir - co.x <= 100 && co.x - player.xdir <= 100){
    coins.pop();
  }
  co.z += 5;
  co.display();
 }

 for(var co2 of coins2){
   if(player.zdir <= co2.z && player.xdir - co2.x <= 100 && co2.x - player.xdir <= 100){
     coins2.pop();
   }
  co2.z += 5;
  co2.display();
 }

}