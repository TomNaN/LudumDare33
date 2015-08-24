function TileSchool(x, y, spriteX, spriteY){
  this.x = x;
  this.y = y;
  this.spriteX = spriteX;
  this.spriteY = spriteY;
  this.type = "school";
  this.hitBox = {top:this.y,left:this.x,right:this.x+40,bottom:this.y+40}
}
TileSchool.prototype = Object.create(Tile.prototype);
TileSchool.prototype.draw = function(){
  ctx.drawImage(spriteSheet, this.spriteX*spriteWidth, this.spriteY*spriteHeight, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}                    
TileSchool.prototype.collision = function(obj){
  var a=obj.hitBox,b=this.hitBox;
  if(a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top){win.play();ending(true,"You made it to school");return false;}
}  