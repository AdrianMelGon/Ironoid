function Ball(game) {
  this.game = game;
  this.arcX = 40;
  this.arcY = 40;
  this.radius = 5;
  this.vArcX = -1.2;
  this.vArcY = -1.2;
}


Ball.prototype.draw = function () {
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = "red";
  this.game.ctx.arc(this.arcX, this.arcY, this.radius, 0, Math.PI * 2, false);
  this.game.ctx.fill();
  this.game.ctx.closePath();
}


Ball.prototype.move = function () {
  this.arcX += this.vArcX;
  this.arcY += this.vArcY;

  if (this.arcX + this.vArcX > canvas.width || this.arcX + this.vArcX < 0 ) {
    this.vArcX *= -1;
  }
  if (this.arcY < 0 || this.arcY > 632 && this.arcX > this.game.player.x && this.arcX < this.game.player.x + this.game.player.w) {
    this.vArcY *= -1;
  }

}
