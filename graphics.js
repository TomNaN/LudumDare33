var spriteWidth = 40,
    spriteHeight = 40,
    spriteSheet = new Image();
    spriteSheet.src = "resources/spriteSheet.png";
function drawMap(text,cont){
  tiles = [];
  map = text.replace(/\r/g,"").split('-'); // FOR SOME REASON text HAD AN ODD \r
  map[map[level]?level:(function(){level=0;return 0}).call(null,null)].replace(/^\s+/,"").split('\n').forEach(function(e,y){
    e.split('').forEach(function(e,x){
      switch(+e){
        case 1:tiles.push(new TileBasic(x*spriteWidth, y*spriteWidth));break;    
        case 2:cont?null:entitys.unshift(new Hero(x*spriteWidth, y*spriteWidth, 4, 4, 20));tiles.push(new TileAir(x*spriteWidth, y*spriteWidth));break;
        case 3:tiles.push(new TileLantern(x*spriteWidth, y*spriteWidth));break; 
        default:tiles.push(new TileAir(x*spriteWidth, y*spriteWidth));
      }
    })
  });
}