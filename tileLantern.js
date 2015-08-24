function TileLantern(x, y){
  this.x = x;
  this.y = y;
  this.type = "lantern";
  this.hitBox = {top:this.y,left:this.x,right:this.x+40,bottom:this.y+40}
  this.broken = false;
}
TileLantern.prototype = Object.create(Tile.prototype);
TileLantern.prototype.draw = function(){
  ctx.drawImage(spriteSheet, this.broken?3*spriteWidth:2*spriteWidth, 0, spriteWidth, spriteHeight, this.x, this.y, spriteWidth, spriteHeight);
}
TileLantern.prototype.collision = function(obj){
  if(!this.broken){
    var a=obj.hitBox,b=this.hitBox;
    if(a.right-5>b.left&&a.left+5<b.right&&a.bottom>b.top+10&&a.top<b.bottom){return false;} 
    if(a.right>b.left-40&&a.left+5<b.right&&a.bottom>b.top+10&&a.top<b.bottom){return false;}  
    if(a.right+5>b.left&&a.left<b.right&&a.bottom>b.top+10&&a.top<b.bottom){return false;}
    if(a.right-5>b.left&&a.left+5<b.right&&a.bottom>b.top&&a.top<b.bottom-5&&obj.falling&&!obj.jumpFlag){this.broken=true;score++;return false;}    
  }
  return false;
}
