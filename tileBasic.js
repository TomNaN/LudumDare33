var tiles = [];
function TileBasic(x, y){
  this.x = x;
  this.y = y;
  this.type = "basic";
  this.hitBox = {top:this.y,left:this.x,right:this.x+40,bottom:this.y+40}
}
TileBasic.prototype = Object.create(Tile.prototype);
TileBasic.prototype.draw = function(){
  ctx.drawImage(spriteSheet, spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}                    
TileBasic.prototype.collision = function(obj){
  var a=obj.hitBox,b=this.hitBox;
  if(a.right-10>b.left&&a.left+10<b.right&&a.bottom+obj.ySpeed<b.top){obj.y=b.top-41;obj.falling=false;}
  if(a.right+40>b.left+obj.xSpeed&&a.bottom+obj.ySpeed>b.top){obj.x=b.left-42+obj.xSpeed;}
}