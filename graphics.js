var spriteWidth = 40,
    spriteHeight = 40,
    spriteSheet = new Image();
    spriteSheet.src = "resources/spriteSheet.png";
function drawMap(text,cont){
  tiles = [];
  entitys = entitys.splice(0,1);
  map = text.replace(/\r/g,"").split('-'); // FOR SOME REASON text HAD AN ODD \r
  if(!levels[level]){
    map[map[level]?level:(function(){level=0;return 0}).call(null,null)].replace(/^\s+/,"").split('\n').forEach(function(e,y){
      e.split('').forEach(function(e,x){
        switch(e){
          case "1":tiles.push(new TileBasic(x*spriteWidth, y*spriteWidth));break;    
          case "2":cont?null:entitys.unshift(new Hero(x*spriteWidth, y*spriteWidth, 5, 4, 20));tiles.push(new TileAir(x*spriteWidth, y*spriteWidth));break;
          case "3":tiles.push(new TileLantern(x*spriteWidth, y*spriteWidth));break;
          case "4":entitys.push(new Dog(x*spriteWidth, y*spriteWidth, 3, 3, 0));tiles.push(new TileAir(x*spriteWidth, y*spriteWidth));break;
          case "5":tiles.push(new TileCloud(x*spriteWidth, y*spriteWidth,4));break;
          case "6":tiles.push(new TileCloud(x*spriteWidth, y*spriteWidth,5));break;
          case "7":tiles.push(new TileCloud(x*spriteWidth, y*spriteWidth,6));break;
          case "8":tiles.push(new TileSchool(x*spriteWidth, y*spriteWidth,0,3));break;
          case "9":tiles.push(new TileSchool(x*spriteWidth, y*spriteWidth,1,3));break;
          case "a":tiles.push(new TileSchool(x*spriteWidth, y*spriteWidth,0,4));break;
          case "b":tiles.push(new TileSchool(x*spriteWidth, y*spriteWidth,1,4));break;
          default:tiles.push(new TileAir(x*spriteWidth, y*spriteWidth));
        }
      })
    });
    levels[level] = [].concat(tiles);
    entityBox[level] = [].concat(entitys.slice(1));
  }
  else{
    tiles = levels[level];
    entitys = entitys.concat(entityBox[level])
  }
}
function ending(win,text){
  ctx.fillStyle="#000000";
  clearInterval(interval);
  setTimeout(function(){
    ctx.font = "50px Verdana";
    ctx.fillText((win?"YOU WIN":"GAME OVER"),100,50);
    ctx.font = "20px Verdana";
    ctx.fillText(text,50,150);
    ctx.fillText("Your destroyed "+score+" lanterns on your way to school",50,200);
    ctx.fillText((score==0?"You are too nice:/":(score<5?"Other kids hate you":(score<10?"You are hated among your neighborhood":(score<15?"You are truly evil":"You truly are a MONSTER")))),50,250);
  },10); 
}