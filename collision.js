function checkCollisions(entity){
  var collisions = 0;
  entity.collision();
  entity.collisionArray.forEach(function(e,i){
    if((i==2||i==5||i==6)&&e){
      e.collision(entity)?collisions++:null;
    }
    else if(e){e.collision(entity);}  
  });  
  !collisions?entity.falling=true:null;
}