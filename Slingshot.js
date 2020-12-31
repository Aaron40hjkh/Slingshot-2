class Slingshot{
    constructor(body1,point2) {
    var options = {
    bodyA:body1 , pointB:point2,length:10,stiffness:0.04
    
    
    }
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
    

    this.sling= Constraint.create(options);
    this.pointB = point2;
    this.bodyA = body1;
    World.add(world,this.sling);
    
    }
    fly(){
    this.sling.bodyA = null

    }
    
    display () {
        image (this.sling1,200,20)
        image(this.sling2,170,30);
        if(this.sling.bodyA){
        push();
        stroke(84,39,15);
        if(this.sling.bodyA.position.x<220){
             strokeWeight(7);
             line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.sling.pointB.x-10,this.sling.pointB.y);
              line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.sling.pointB.x +30,this.sling.pointB.y-3);
             image(this.sling3,this.sling.bodyA.position.x - 30, this.sling.bodyA.position.y -10,15,30);
        }
       else{
        strokeWeight(3);
        line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.sling.pointB.x-10,this.sling.pointB.y);
         line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.sling.pointB.x +30,this.sling.pointB.y-3);
        image(this.sling3,this.sling.bodyA.position.x - 25, this.sling.bodyA.position.y -10,15,30); 


       } 
        pop();

        } 
    }
    
    }