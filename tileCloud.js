function TileCloud(x, y, spriteX){
  this.x = x;
  this.y = y;
  this.spriteX = spriteX;
  this.type = "cloud";
  this.hitBox = {top:this.y,left:this.x,right:this.x+40,bottom:this.y+40}
}
TileCloud.prototype = Object.create(Tile.prototype);
TileCloud.prototype.draw = function(){
  ctx.drawImage(spriteSheet, this.spriteX*spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}                    
TileCloud.prototype.collision = function(obj){
  var a=obj.hitBox,b=this.hitBox;
  if(a.right-5>b.left&&a.left+5<b.right&&a.bottom>b.top+30&&a.top<b.bottom){return false;} 
  if(a.right>b.left-40&&a.left+5<b.right&&a.bottom>b.top+30&&a.top<b.bottom){return false;}  
  if(a.right+5>b.left&&a.left<b.right&&a.bottom>b.top+30&&a.top<b.bottom){return false;} 
  if(a.right-5>b.left&&a.left+5<b.right&&a.bottom>b.top-40&&a.top<b.bottom+obj.ySpeed-25){obj.y=b.top-40;obj.falling=false;obj.jumpFlag=false;return "top";}  
  return false;         
} 