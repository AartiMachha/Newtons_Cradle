class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(World, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill('grey');
        rect(pos.x, pos.y, this.width, this.height);
    }
 }
 