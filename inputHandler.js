var moveObj = {};
function movement(){
  window.addEventListener("keydown",keyDownHandler,true);
  window.addEventListener("keyup",keyUpHandler,true);  
}
function keyUpHandler(e){
  switch(e.keyCode){
    case 65:case 37: moveObj.left=false;entitys[0].spriteX=0;break;
    case 68:case 39: moveObj.right=false;entitys[0].spriteX=0;break;
    case 87:case 38: moveObj.jump=false;entitys[0].falling=true;break;             
    default:;
  }
}
function keyDownHandler(e){
  switch(e.keyCode){
    case 65:case 37: moveObj.left=!false;break;
    case 68:case 39: moveObj.right=!false;break;
    case 87:case 38: moveObj.jump=!false;break;             
    default:;
  }
}