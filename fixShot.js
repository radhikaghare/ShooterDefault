class fixShot{
    constructor(bodyA, pointB){
        console.log("in fixshot")
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.fix = Constraint.create(options);
         World.add(world, this.fix);
        }
fly(){
    this.fix.bodyA = null;
}

display(){
    console.log("in fix display")
    if(this.fix.bodyA){
      var pointA = this.fix.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}
}