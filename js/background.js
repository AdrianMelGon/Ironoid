
function Background(game) {
  this.game = game;
  this.img = new Image()
  this.img.src = "images/background.jpg";
  this.x = 0;
  this.y = 0;
}

Background.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height)
}

Background.prototype.changeBackground = function() {this.img.src = "images/flowers4.jpg"}