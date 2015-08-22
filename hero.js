function Hero(x, y, speed, maxJumpFuel){
  Entity.apply(this, arguments);
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.maxJumpFuel = maxJumpFuel;
  this.jumpFuel = maxJumpFuel;
  this.spriteY = 1;
}
Hero.prototype = Object.create(Entity.prototype);
Hero.prototype.move = function(direction){
  this.falling?this.y++:null;
  if(direction == "right"){this.x += this.speed;}
  if(direction == "left"){this.x -= this.speed;}
  if(direction == "up"){this.jump();}
}