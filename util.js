var canvas,
    ctx,
    xmlhttp = new XMLHttpRequest(),
    listeners = [readFile],
    mapData,
    timerClock = 0,
    timer,
    fps = "60",
    level=0,
    levels = [],
    entityBox = [],
    interval,
    screenShot=[],
    debug=false,
    img=new Image(),
    score = 0;
function begin(){
  getFile("resources/level.txt")
  canvas = document.getElementById("gameCanvas");
  bgm.play();
  bgm.volume = 0.2;
  sfxJump.volume = 0.5;
  deadLantern.volume = 0.2;
  deadPlayer.volume = 0.2;
  win.volume = 0.5;

  ctx = canvas.getContext("2d");
  drawMap(mapData);
  movement();
  interval = setInterval(game, 1000/60);
}
function game() {
  bgm.currentTime>=bgm.duration-0.5?bgm.currentTime=0:null;
  ctx.clearRect(0, 0, 640, 480);
  ctx.fillStyle = "#1122FF";
  ctx.fillRect(0,0,640,480);
  //TODO: J�rjestys olisi jotakin: tarkista tuleeko komentoja (k�ytt�j�n liike + AI:n liike) -> tarkista t�rm�ykset -> liiku jos mahdollista -> piirr�.
  for(var i=0; i<entitys.length; i++) {
    checkCollisions(entitys[i]);
    entitys[i].move();
    entitys[i].draw();
  }
  tiles.forEach(function(e){e.draw()}); 
  //getFPS();
  if(debug){
    screenShot.push(canvas.toDataURL("png"));
  }
}
function getFPS(){
  if(timerClock==0){     // this calculates the current fps the game is running at
    timer = new Date();
    timer = timer.getTime();
  }
  timerClock++;  
  if(timerClock==60){
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
  if(debug){
    clearInterval(interval);
    img.src = screenShot[screenShot.length-1];    
    setTimeout(function(){ctx.drawImage(img,0,0);},5);
  }
  throw error;
}
function getFile(file){
  listeners.forEach(function(e){xmlhttp.removeEventListener("readystatechange",e)});
  xmlhttp.addEventListener("readystatechange",readFile);
  xmlhttp.open("GET",file,false);
  xmlhttp.send(); 
}
function readFile(){
  mapData = xmlhttp.readyState==4?xmlhttp.responseText:null;
}
function blurred(){
  for(var i in moveObj){
    moveObj[i] = false;
  }
}
