class Bob{
    constructor(x, y, radius){
        var options={
            "restituion":1.4,
            "friction":1.0,
            "density":1.0
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        

        World.add(world, this.body)
    }
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(rgb(6, 253, 199));
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}
