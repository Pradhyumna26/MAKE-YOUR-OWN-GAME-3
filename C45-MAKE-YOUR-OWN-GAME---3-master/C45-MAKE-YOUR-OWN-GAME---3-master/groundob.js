class Groundob{
    constructor(x,y,z){
      this.x = x;
      this.y = y;
      this.z = z;
      this.groundob = loadModel("objects/groundOb.obj");
    }

    display(){
        colorMode(RGB);
        push();
        translate(this.x,this.y,this.z);
        scale(50);
        fill(10,10,255);
        strokeWeight(0.7);
        stroke(0);
        model(this.groundob);
        pop();
    }
}