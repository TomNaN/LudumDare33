var tiles = [];
function TileBasic(x, y){
  this.x = x;
  this.y = y;
}
TileBasic.prototype.getX = function(){
  return this.x;
}
TileBasic.prototype.getY = function(){
  return this.y;
}
TileBasic.prototype.draw = function(){
  ctx.drawImage(spriteSheet, spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}