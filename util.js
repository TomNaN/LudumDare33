var canvas,
  ctx;
function begin(){
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  tiles.push(new TileBasic(50,50));
  entitys.push(new Hero(200, 200, 10, 10));
  setInterval(game, 1000/60);

}
function game() {
  ctx.clearRect(0, 0, 640, 480);
  //TODO: Järjestys olisi jotakin: tarkista tuleeko komentoja (käyttäjän liike + AI:n liike) -> tarkista törmäykset -> liiku jos mahdollista -> piirrä.
  for(var i=0; i<entitys.length; i++) {
    checkCollision();
	entitys[i].move();
    entitys[i].draw();
	entitys[i].spriteX+=0.2;
  }
  for(var i=0; i<tiles.length; i++){  
    tiles[i].draw();
  }
  
}