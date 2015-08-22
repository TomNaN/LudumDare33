var canvas,
    ctx,
    xmlhttp = new XMLHttpRequest(),
    listeners = [readFile],
    mapData;
function begin(){
  getFile("resources/level.txt")
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  drawMap(mapData);
  movement();
  setInterval(game, 1000/60);

}
function game() {
  ctx.clearRect(0, 0, 640, 480);
  ctx.fillStyle = "#1122FF";
  ctx.fillRect(0,0,640,480);
  //TODO: Järjestys olisi jotakin: tarkista tuleeko komentoja (käyttäjän liike + AI:n liike) -> tarkista törmäykset -> liiku jos mahdollista -> piirrä.
  for(var i=0; i<entitys.length; i++) {
    checkCollision();
    entitys[i].move();
    entitys[i].draw();
	  entitys[i].spriteX+=0.2;
  }
  tiles.forEach(function(e){e.draw()}); 
}
function errorHandler(error){
  throw error;
}
function getFile(file){
  listeners.forEach(function(e){xmlhttp.removeEventListener("readystate",e)});
  xmlhttp.addEventListener("readystatechange",readFile);
  xmlhttp.open("GET",file,false);
  xmlhttp.send(); 
}
function readFile(){
  mapData = xmlhttp.readyState==4?xmlhttp.responseText:null;
}
function drawMap(text){
  map = text.replace(/\r/g,"").split('\n'); // FOR SOME REASON text HAD AN ODD \r
  map.forEach(function(e,y){
    e.split('').forEach(function(e,x){
      switch(+e){
        case 1:tiles.push(new TileBasic(x*spriteWidth, y*spriteWidth));break;    
        case 2:entitys.push(new Hero(x*spriteWidth, y*spriteWidth, 4, 4, 10));break;
        case 3:tiles.push(new TileLantern(x*spriteWidth, y*spriteWidth));break; 
        default:tiles.push(new TileAir(x*spriteWidth, y*spriteWidth));
      }
    })
  });
}