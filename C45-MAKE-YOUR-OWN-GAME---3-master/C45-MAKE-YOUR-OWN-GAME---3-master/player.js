class Player{
    constructor(z){
       this.player;
       this.xdir = 15;
       this.ydir = 150;
       this.zdir = z

       this.playermodel = loadModel("objects/spaceCraft.obj",true);
    }

    jump(){
      if(this.ydir === 150){
       this.ydir -= 350;
      }
    }

    fall(){
      if(this.ydir < 150 ){
        this.ydir += 5;
      }else if(this.ydir === 150){
        this.ydir += 0;
      }
    }

    setDir(x,y){
      this.xdir = x;
      this.ydir = y;
    }

    display(){
      colorMode(RGB);
      push();
      translate(this.xdir,this.ydir,this.zdir);
      scale(0.7);
      rotateX(millis()/500)
      fill(153,0,153);
      stroke(0);  
      strokeWeight(0.7)    
      model(this.playermodel);
      pop();
    }
}