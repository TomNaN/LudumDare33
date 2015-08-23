var tiles = [];
function TileBasic(x, y){
  this.x = x;
  this.y = y;
  this.type = "basic";
  this.hitBox = {top:this.y,left:this.x,right:this.x+40,bottom:this.y-40}
}
TileBasic.prototype = Object.create(Tile.prototype);
TileBasic.prototype.draw = function(){
  ctx.drawImage(spriteSheet, spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}                    
TileBasic.prototype.collision = function(obj){
  var x=obj.hitBox,y=this.hitBox;
  if(x.bottom<y.top&&x.right>y.left&&x.left<y.right){obj.y=y.top-41;}
  if(x.right>y.left&&x.left>y.left&&x.bottom<y.top){obj.x=y.left;}
}