function TileLantern(x, y){
  this.x = x;
  this.y = y;
}
TileLantern.prototype = Object.create(Tile.prototype);
TileLantern.prototype.draw = function(){
  ctx.drawImage(spriteSheet, 2*spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}
