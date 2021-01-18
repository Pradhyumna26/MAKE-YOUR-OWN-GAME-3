class Obstacle{
   constructor(x,y,z){
     this.x = x;
     this.y = y;
     this.z = z;

     this.obsModel = loadModel("objects/obstacle.obj",true);
   }

   display(){
       colorMode(RGB);
       push();
        translate(this.x,this.y,this.z);
        fill(255,10,10);
        scale(0.5);
        stroke(255,255,255);
        strokeWeight(0.5);
        model(this.obsModel);
       pop();
   }
}