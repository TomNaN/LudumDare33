var moveCommands = {"left":function(){entitys[0].move.call(entitys[0],"left");},
      "right":function(){entitys[0].move.call(entitys[0],"right");},
      "jump":function(){entitys[0].jump.call(entitys[0],null);},
      "none":function(){return null;}
    },
    dirCommand="none";
function movement(){
  window.addEventListener("keydown",keyDownHandler,true);
  window.addEventListener("keyup",keyUpHandler,true);  
}
function keyUpHandler(){
  dirCommand="none";
}
function keyDownHandler(e){
  switch(e.keyCode){
    case 65:case 37: dirCommand="left";break;
    case 68:case 39: dirCommand="right";break;
    case 87:case 38: dirCommand="jump";break;             
    default:dirCommand="none";
  }
}