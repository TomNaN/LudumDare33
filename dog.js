function Dog(x, y, xSpeed, ySpeed, maxJumpFuel){
  Entity.apply(this, arguments);
  this.x = x;
  this.y = y;
  this.xSpeed = xSpeed;
  this.yMaxSpeed = ySpeed;
  this.ySpeed = 0;
  this.maxJumpFuel = maxJumpFuel;
  this.jumpFuel = maxJumpFuel;
  this.spriteY = 2;
  this.hitBox = {top:this.y+26,left:this.x,right:this.x+40,bottom:this.y+40}
}
Dog.prototype = Object.create(Entity.prototype);
Dog.prototype.move = function(){
  this.falling?this.y++:null;
  if(this.falling){
    this.ySpeed-=gravity*0.1;
    this.y-=this.ySpeed;
    //Now the gravity works
  }
  this.hitBox = {top:this.y+20,left:this.x,right:this.x+40,bottom:this.y+40}
  if(entitys[0].x>this.x+1+this.xSpeed){
    this.x += this.xSpeed;this.facing="right";this.spriteX+=0.2
  }
  else if(entitys[0].x<this.x-1-this.xSpeed){
    this.x -= this.xSpeed;this.facing="left";this.spriteX+=0.2;
  }
  var a=entitys[0].hitBox,b=this.hitBox;
  if(a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top){ending(false,"You got stopped by a guard dog");return false;}
}