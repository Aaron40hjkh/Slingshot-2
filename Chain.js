class Chain{
    constructor(body1,point2) {
    var options = {
    bodyA:body1 , pointB:point2,length:10,stiffness:0.04
    
    
    }
    this.chain= Constraint.create(options);
    World.add(world,this.chain);
    
    }
    fly(){
    this.chain.bodyA = null




    }
    
    display () {
        if(this.chain.bodyA){
        strokeWeight(5);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);

        } 
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    }