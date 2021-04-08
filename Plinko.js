class Plinko{
    constructor(x,y,radius){
        var options = {
//            restitution: 0.1,
            density: 0.5,
            friction: 1.2,
            isStatic: true 
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
   }
}