class Planets{
    constructor(x,y,z){
     this.x = x;
     this.y = y;
     this.z = z;

     this.image = loadImage("images/moon.png");
    }

    display(){
      push();
      translate(this.x,this.y,this.z);
      fill(100);
      noStroke();
      texture(this.image);
      box(500);
      pop();
    }
}