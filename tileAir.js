function TileAir(x, y){
  this.x = x;
  this.y = y;
}
TileAir.prototype.getX = function() {
  return this.x;
}
TileAir.prototype.getY = function() {
  return this.y;
}
TileAir.prototype.draw = function() {
  ctx.drawImage(spriteSheet, 0, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}