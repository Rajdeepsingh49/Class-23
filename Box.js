class Box{
    constructor(x,y,width,height){
        var ops = {
            restitution:0.5,
            density:1,
            friction:1
          }
        
          this.body = Bodies.rectangle(x,y,width,height,ops);

          World.add(mywor,this.body);

          this.width = width;
          this.height = height;

    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();
    }

}