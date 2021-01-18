class Ground{
   constructor(x,y,z){
     this.x = x;
     this.y = y;
     this.z = z;

     this.groundModel = loadModel("objects/base.obj",true);
   }

   display(){
    colorMode(RGB);
    push();
    translate(this.x,this.y,this.z);
    fill(10,10,255);
    stroke(0);
    scale(5);
    strokeWeight(0.7);
    model(this.groundModel);
    pop();
   }
}