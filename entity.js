var entitys = [];
var gravity = 4;
function Entity(x, y, xSpeed, ySpeed, maxJumpFuel){
  this.x = x;
  this.y = y;
  this.xSpeed = xSpeed;
  this.ySpeed = 0;
  this.yMaxSpeed = ySpeed;
  this.maxJumpFuel = maxJumpFuel;
  this.jumpFuel = maxJumpFuel;
  this.spriteX = 0;
  this.spriteY = 0;
  this.falling = false;
  this.facing = "right";
  this.collisionArray = [];
}
Entity.prototype.getX = function(){
  return this.x;
}
Entity.prototype.getY = function(){
  return this.y;
}
Entity.prototype.collision = function(){
  var tileNum = 16*(~~(this.y/spriteHeight))+(~~(this.x/spriteWidth));
  this.collisionArray[0] = tiles[tileNum];
  this.collisionArray[1] = tiles[tileNum-16]?tiles[tileNum-16]:null;                    
  this.collisionArray[2] = tiles[tileNum+16]?tiles[tileNum+16]:null;    
  this.collisionArray[3] = tiles[tileNum-1]?tiles[tileNum-1]:null;      
  this.collisionArray[4] = tiles[tileNum+1]?tiles[tileNum+1]:null;
  this.collisionArray[5] = tiles[tileNum+17]?tiles[tileNum+17]:null;
  this.collisionArray[6] = tiles[tileNum+15]?tiles[tileNum+15]:null;
  this.collisionArray[7] = tiles[tileNum-17]?tiles[tileNum-17]:null;
  this.collisionArray[8] = tiles[tileNum-15]?tiles[tileNum-15]:null;
}
Entity.prototype.draw = function(){
  if(this.spriteX > 3){this.spriteX = 0}
  (this.facing=="right")?ctx.drawImage(spriteSheet, Math.floor(this.spriteX) * spriteWidth, this.spriteY*spriteHeight, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight):ctx.drawImage(spriteSheet, Math.floor(4+this.spriteX) * spriteWidth, this.spriteY*spriteHeight, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}
Entity.prototype.jump = function(){
  if(!this.falling) {
    this.ySpeed = this.yMaxSpeed;
    this.y -= this.ySpeed;
  	if(this.jumpFuel > 0) {
  	  this.jumpFuel--;
  	  if(this.jumpFuel <= 0){this.falling = true;}
  	}
  }
  else if(this.jumpFuel < this.maxJumpFuel){this.jumpFuel++}
  //TODO: This goes to the collision function?************if(this.falling){this.ySpeed -= gravity};
}