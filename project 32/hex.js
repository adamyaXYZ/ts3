class Hex {
        
    constructor (x,y){
        var options = {
            'friction':1.0,
            'restitution':0.7,
            'density':3
        }
        this.body = Bodies.polygon(x,y,6,10,options);
        this.image = loadImage("polygon.png")
        World.add(world,this.body)
         
        
        
        
    }
        display() {
            var pos = this.body.position;
            push()
                translate(pos.x,pos.y)
                imageMode(CENTER)
                image(this.image,0,0)
            pop()
        }
    }
