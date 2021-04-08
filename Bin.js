class Bin{
    constructor(x,y){
        var options = {
            isStatic: true,
            density: 1.5
        }
        this.base = Bodies.rectangle(x,y,80,8,options);
        this.leftBody = Bodies.rectangle(x-40,y-50,8,100,options);
        this.rightBody = Bodies.rectangle(x+40,y-50,8,100,options);

        World.add(world,this.base);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }
    display(){
        push();

        fill("white");
        rectMode(CENTER);
        rect(this.base.position.x,this.base.position.y,80,8);
        rect(this.leftBody.position.x,this.rightBody.position.y,8,100);
        rect(this.rightBody.position.x,this.rightBody.position.y,8,100);

        pop();
    }
}