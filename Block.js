class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image=loadImage("block.png")
      this.Visibility-255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
      //console.log(this.body.speed)
      if(this.body.speed < 3){
        super.display
    
      }
else{
  World.remove(world,this.body)
  push() ;
  this.Visiblity = this.Visiblity - 5;
  tint (255,this.Visibility)
  image(this.image, this.body.position.x, this.body.position.y, 50, 50);
  pop ();

}

  
    }
}