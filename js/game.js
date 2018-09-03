function Game(canvasId) {
  this.canvas = document.getElementById(canvasId)
  this.ctx = this.canvas.getContext('2d');
  this.fps = 100;
  this.reset();

}

Game.prototype.start = function () {
  this.interval = setInterval(function() {
    this.clear()
    this.moveAll();
    this.draw();
    // this.borderCollision();

  }.bind(this), 1000/this.fps)

}

Game.prototype.stop = function() {
  clearInterval(this.interval);
}

Game.prototype.reset = function() {
  this.blocksArr  = []
  this.player = new Player(this);
  this.ball = new Ball(this)
}
Game.prototype.generateBlocks = function () {
  this.blocksArr.push(new Blocks(this));
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

Game.prototype.draw = function () {
  // this.blocks.draw();
  this.player.draw();
  this.ball.draw();
}

Game.prototype.moveAll = function() {
  this.ball.move();
}

// Game.prototype.borderCollision = function() {
//   if (ball.arcX + ball.vArcX > canvas.width || ball.arcX + ball.vArcX > 0) {
//     ball.vArcX *= -1;
//   }
//   if (ball.arcY + ball.vArcY > canvas.height || ball.arcY + ball.vArcY > 0) {
//     ball.vArcY *= -1;
//   }
// }