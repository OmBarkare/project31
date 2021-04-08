class Ball{
    constructor(radius){
        var options = {
            restitution: 0.8,
            density: 0.2,
            isStatic: false
        }
        this.body = Bodies.circle(mouseX,mouseY,radius,options);
        this.radius = radius;
        this.color = rgb(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

        if(this.body.position.y > 700){
            World.remove(world,this.body);
          }        
          
        pop();
    }
}