
function Player(game) {
  this.game = game;
  this.x = 210;
  this.y = 632;
  this.img = new Image();
  this.img.src = "images/barra.png";
  this.w = 150;
  this.h = 20;
  this.setListeners();
}


var RIGHT_KEY = 39;
var LEFT_KEY = 37;


Player.prototype.draw = function () {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  );
}


Player.prototype.setListeners = function () {
  document.onkeydown = function (event) {
    if (event.keyCode == RIGHT_KEY && this.x < this.game.ctx.canvas.width - this.w) {
      this.x += 40;
      
    }
    if (event.keyCode == LEFT_KEY && this.x > 0) {
      this.x -= 40;
    }
  }.bind(this);
}




