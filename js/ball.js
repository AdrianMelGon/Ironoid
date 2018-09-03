function Ball(game) {
  this.game = game;
  this.arcX = 40;
  this.arcY = 40;
  this.radius = 5;
  this.vArcX = -4;
  this.vArcY = -4;
}

Ball.prototype.draw = function() {
  this.game.ctx.beginPath();
  this.game.ctx.fillStyle = "red";
  this.game.ctx.arc(this.arcX, this.arcY, this.radius, 0, Math.PI * 2, false);
  this.game.ctx.fill();
  this.game.ctx.closePath();
}

Ball.prototype.move = function() {
  this.arcX += this.vArcX;
  this.arcY += this.vArcY;
  
    if (this.arcX + this.vArcX > canvas.width|| this.arcX + this.vArcX < 0) {
      this.vArcX *= -1;
    }
    if (this.arcY + this.vArcY > canvas.height|| this.arcY + this.vArcY < 0) {
      this.vArcY *= -1;
    }

}





// //Bola

// // var arcX = 20;
// // var arcY = 20;

// // function ballAnimation() {
// //   requestAnimationFrame(ballAnimation);
// //   ctx.beginPath();
// //   ctx.arc(arcX, arcY, 10, 0, Math.PI * 2, false);
// //   ctx.strokeStyle = "red";
// //   ctx.stroke();
// //   arcX += 1;
// //   arcY +=1;
// }

