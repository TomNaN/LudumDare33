function Hero(x, y, xSpeed, ySpeed, maxJumpFuel){
  Entity.apply(this, arguments);
  this.x = x;
  this.y = y;
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  this.maxJumpFuel = maxJumpFuel;
  this.jumpFuel = maxJumpFuel;
  this.spriteY = 1;
}
Hero.prototype = Object.create(Entity.prototype);
Hero.prototype.move = function(direction){
  this.y>canvas.height?this.y=10:null;
  this.x>canvas.width?this.x=-5:null;
  this.falling?this.y++:null;
  if(direction == "right"){this.x += this.speed;}
  if(direction == "left"){this.x -= this.speed;}
  if(direction == "up"){this.jump();}
}