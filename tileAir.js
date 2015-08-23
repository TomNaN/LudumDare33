function TileAir(x, y){
  this.x = x;
  this.y = y;
  this.type = "air";
  this.hitBox = {top:this.y,left:this.x,right:this.x+40,bottom:this.y+40}
}
TileAir.prototype = Object.create(Tile.prototype);
TileAir.prototype.draw = function() {
  ctx.drawImage(spriteSheet, 0, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}
TileAir.prototype.collision = function(){
  return null;
}