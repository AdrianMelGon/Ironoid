//Bloques
function Blocks(game, x, y) {
  this.game = game;
  this.w = 35
  this.h = 25
  this.x = x;
  this.y = y;
  this.img = new Image();
  this.img.src = "images/metalbrick.png"
}


Blocks.prototype.draw = function () {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}










