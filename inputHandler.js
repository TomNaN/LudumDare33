function movement(){
  window.addEventListener("keydown",eventHandler,true);  
}
function eventHandler(e){
  switch(e.keyCode){
    case 65: entitys[0].move("left");
    case 69: entitys[0].move("right");
    case 87: entitys[0].jump();
    default:
  }
}