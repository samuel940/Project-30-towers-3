class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
        
    }
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    
    this.image = loadImage("images/Block.png")
    //super(x,y,30,40);3
    World.add(world, this.body);
  }
  display(){
    
    if(this.body.speed >= 3){
       tint(255,0);
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 30, 40);
       pop();
     }

     
    
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    tint(255,this.Visiblity);
    rectMode(CENTER);
    fill('grey');
    rect(0, 0, this.width, this.height);
    pop();
  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -105){
      score++;
    }
  }
};
