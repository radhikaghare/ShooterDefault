class ball{
    constructor(x,y){
      console.log("in ball")
    var options = {
           isStatic:true
            }
    this.body = Bodies.circle(x,y,20,20);

    World.add(world,this.body); 
    }
    display(){
      console.log("in display")
      var pos = this.body.position;
       
    ellipseMode(CENTER);
   // fill("gold")
    //fillStroe("orange")
    ellipse(pos.x,pos.y,20,20);
    
    
    }
    } 