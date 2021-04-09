class Chain{
    constructor(bodyA,bodyB){
        

        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.04,
            length:200
        }

        this.chain= Constraint.create(options)
        this.bodyB=bodyB;
        World.add(world, this.chain)
    }
    display(){
     if(this.chain.bodyA){
     var pointA = this.chain.bodyA.position;
     this.bodyB = bodyB;
     strokeWeight(4);
     line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
    }
}

