var canvas,
    ctx,
    xmlhttp = new XMLHttpRequest(),
    listeners = [readFile],
    mapData,
    timerClock = 0,
    timer,
    fps = "60";
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
    entitys[i].collision();
    entitys[i].move();
    entitys[i].draw();
  }
  tiles.forEach(function(e){e.draw()}); 
  getFPS();
}
function getFPS(){
  if(timerClock==0){     // this calculates the current fps the game is running at
    timer = new Date();
    timer = timer.getTime();
  }
  timerClock++;  
  if(timerClock==60){     // related to calculating fps
    var elapsed = new Date();
    elapsed = elapsed.getTime()-timer;
    fps = String(~~(60/(elapsed/1000)));
    timerClock=0;
  }
  ctx.fillStyle = "#000000";
  ctx.font = "30px Verdana";
  ctx.fillText(fps,5,35);
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
        case 2:entitys.unshift(new Hero(x*spriteWidth, y*spriteWidth, 4, 4, 10));tiles.push(new TileAir(x*spriteWidth, y*spriteWidth));break;
        case 3:tiles.push(new TileLantern(x*spriteWidth, y*spriteWidth));break; 
        default:tiles.push(new TileAir(x*spriteWidth, y*spriteWidth));
      }
    })
  });
}