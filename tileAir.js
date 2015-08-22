function TileAir(x, y){
  this.x = x;
  this.y = y;
}
TileAir.prototype = Object.create(Tile.prototype);
TileAir.prototype.draw = function() {
  ctx.drawImage(spriteSheet, 0, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}