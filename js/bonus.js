
function Bonus(game, type) {
  this.game = game;
  this.img = new Image();
  this.x = 0;
  this.y = 0;
  this.w = 50;
  this.h = 60;
  this.vX = 1;
  this.vY = 3;
  this.chooseBonus(type)
}


Bonus.prototype.chooseBonus = function (type) {
  switch (type) {
    case "jazmin":
      this.img.src = "images/jazmin.png"
      break;
    case "javascript":
      this.img.src = "images/javascript.png"
      break;
    case "css":
      this.img.src = "images/css3.png"
      break;

  }
}


Bonus.prototype.draw = function () {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  );
}


Bonus.prototype.move = function () {
  this.x += this.vX;
  this.y += this.vY;
}


