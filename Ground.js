class Ground{
    constructor(x,y,width,height){
        var ops = {
            isStatic:true
          }
        
          this.body = Bodies.rectangle(x,y,width,height,ops);

          World.add(mywor,this.body);

          this.width = width;
          this.height = height;

    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}