class Box extends BaseClass {
  constructor(x, y,width,height){
    super(x,y,width,height)
    this.b = 255
  }

 display(){
   if(this.body.speed < 4){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.b = this.b-5
     tint(255,this.b);
      
     
     pop();
     
   }
   
   
   
   
  }
  score() {
    if (this.b < 0 && this.b > -1005){
      score++;
    }
   }
 }
 
 
 
 

 

