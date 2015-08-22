var entitys = [];
function Entity(x, y, speed, maxJumpFuel){
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.maxJumpFuel = maxJumpFuel;
  this.jumpFuel = maxJumpFuel;
  this.spriteX = 0;
  this.spriteY = 0;
  this.onGround = true;
  this.falling = false;
}
Entity.prototype.getX = function(){
  return this.x;
}
Entity.prototype.getY = function(){
  return this.y;
}
Entity.prototype.draw = function(){
  if(this.spriteX > 3) this.spriteX = 0;
  ctx.drawImage(spriteSheet, Math.floor(this.spriteX) * spriteWidth, this.spriteY*spriteHeight, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}
Entity.prototype.jump = function(){
  //TODO
  if(this.onGround) {
	if(this.jumpFuel > 0) {
	  this.y += this.speed;
	  this.jumpFuel--;
	  if(this.jumpFuel == 0) this.falling = true;
	}
  }
  else this.jumpFuel++;
}