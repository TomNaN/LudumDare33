function Hero(x, y, xSpeed, ySpeed, maxJumpFuel){
  Entity.apply(this, arguments);
  this.x = x;
  this.y = y;
  this.xSpeed = xSpeed;
  this.yMaxSpeed = ySpeed;
  this.ySpeed = 0;
  this.maxJumpFuel = maxJumpFuel;
  this.jumpFuel = maxJumpFuel;
  this.spriteY = 1;
  this.hitBox = {top:this.y,left:this.x,right:this.x+40,bottom:this.y+40}
}
Hero.prototype = Object.create(Entity.prototype);
Hero.prototype.move = function(){
  this.y>canvas.height?this.y=-10:null;
  this.x>canvas.width?this.x=-5:null;
  this.falling?this.y++:null;
  this.hitBox = {top:this.y,left:this.x,right:this.x+40,bottom:this.y+40}
  moveObj.right&&!moveObj.left?(function(){this.x += this.xSpeed;this.facing="right";this.spriteX+=0.2}).call(entitys[0],null):null;
  moveObj.left&&!moveObj.right?(function(){this.x -= this.xSpeed;this.facing = "left";this.spriteX += 0.2}).call(entitys[0],null):null;
  moveObj.jump?this.jump():null;
}