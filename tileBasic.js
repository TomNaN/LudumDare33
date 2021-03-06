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
  if(a.right-5>b.left&&a.left+5<b.right&&a.bottom+obj.ySpeed>b.top-40&&a.top<b.bottom-obj.ySpeed-5){obj.y=b.top-40;obj.falling=false;obj.jumpFlag=false;return "top";}   
  if(a.right-5>b.left&&a.left+5<b.right&&a.bottom+obj.ySpeed>b.top-30&&a.top<b.bottom+8){obj.y=b.bottom+9;obj.falling=true;obj.jumpFlag=false;return "bottom";} 
  if(a.right>b.left-40&&a.left+5<b.right&&a.bottom+obj.ySpeed>b.top&&a.top<b.bottom){obj.x=b.left-41;return "left";}  
  if(a.right+5>b.left&&a.left<b.right&&a.bottom+obj.ySpeed>b.top&&a.top<b.bottom){obj.x=b.right+1;return "right";}      
  return false;         
}                    