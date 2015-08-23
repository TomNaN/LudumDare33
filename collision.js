function checkCollisions(entity){
  entity.collision();
  entity.collisionArray.forEach(function(e){
    e?e.collision(entity):null;  
  });
}