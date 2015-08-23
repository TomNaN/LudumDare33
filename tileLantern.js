function TileLantern(x, y){
  this.x = x;
  this.y = y;
  this.type = "lantern";
  this.hitBox = {top:this.y,left:this.x,right:this.x+40,bottom:this.y-40}
}
TileLantern.prototype = Object.create(Tile.prototype);
TileLantern.prototype.draw = function(){
  ctx.drawImage(spriteSheet, 2*spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}
TileLantern.prototype.collision = function(obj){
}
