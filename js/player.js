
function Player(game) {
  this.game = game;
  this.x = 210;
  this.y = 632;
  this.img = new Image();
  this.img.src = "images/barra.png";
  this.w = 150;
  this.h = 20;
  this.setListeners();
  this.vX = 0;
}

Player.prototype.draw = function () {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  );
}


var RIGHT_KEY = 39;
var LEFT_KEY = 37;


Player.prototype.setListeners = function () {
  document.onkeydown = function (event) {
    if (event.keyCode == RIGHT_KEY && this.x < this.game.ctx.canvas.width - this.w) {
      this.vX += 5;

    }
    if (event.keyCode == LEFT_KEY && this.x > 0) {
      this.vX -= 5;
    }
  }.bind(this);
  document.onkeyup= function (event) {
    if (event.keyCode == RIGHT_KEY) {
      this.vX = 0;

    }
    if (event.keyCode == LEFT_KEY) {
      this.vX = 0;
    }
  }.bind(this);
}

Player.prototype.move = function () {
  this.x += this.vX
}

