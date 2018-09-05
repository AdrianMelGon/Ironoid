function Game(canvasId) {
  this.canvas = document.getElementById(canvasId)
  this.ctx = this.canvas.getContext('2d');
  this.fps = 200;
  this.reset();

}

Game.prototype.start = function () {
  this.interval = setInterval(function () {
    this.clear();
    this.moveAll();
    this.draw();
  }.bind(this), 1000 / this.fps)

}


Game.prototype.stop = function () {
  clearInterval(this.interval);
}


Game.prototype.gameOver = function () {
  this.stop();

  if (confirm("GAME OVER. New game?")) {
    this.reset();
    this.start();
  }
}


Game.prototype.reset = function () {
  this.blocksArr = [];
  this.crossesArr = [];
  this.player = new Player(this);
  this.ball = new Ball(this);
  this.background = new Background(this);
  this.score = 0;
  this.bonusArr = [];
  this.generateBlocks();
  // this.generateCrosses();
}


Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}


Game.prototype.draw = function () {
  this.background.draw();
  this.player.draw();
  this.ball.draw();
  this.blocksArr.forEach(function (e) {
    e.draw();
  })
  this.bonusArr.forEach(function (e) {
    e.draw();
  })
  this.crossesArr.forEach(function (e) {
    e.draw();
  })
  // this.bonus.draw();
  this.drawScore();
}


Game.prototype.moveAll = function () {
  this.ball.move();
  this.isCollision();
  this.bonusArr.forEach(function (e) {
    e.move();
  })
  this.bonusCollision();
}


Game.prototype.generateBlocks = function () {
  var x = 50;
  for (var i = 0; i < 30; i++) {
    x += 35;
    var y = 100;
    for (var j = 0; j < 8; j++) {
      y += 25
      var block = new Blocks(this, x, y)
      this.blocksArr.push(block);
    }
  }
}


Game.prototype.isCollision = function () {
  this.blocksArr.forEach(function (e, index) {
    if (this.ball.arcY < e.y + e.h && this.ball.arcY > e.y && this.ball.arcX > e.x && this.ball.arcX < e.x + e.w) {
      this.ball.vArcY *= -1
      this.blocksArr.splice(index, 1);
      if (index == 64) {
        this.bonus = new Bonus(this, "css");
        this.bonusArr.push(this.bonus)
        this.bonus.x = e.x
        this.bonus.y = e.y;

      }
      if (index == 8) {
        this.bonus = new Bonus(this, "jazmin");
        this.bonusArr.push(this.bonus)
        this.bonus.x = e.x
        this.bonus.y = e.y;

      }
      if (index == 112) {
        this.bonus = new Bonus(this, "javascript");
        this.bonusArr.push(this.bonus)
        this.bonus.x = e.x
        this.bonus.y = e.y;

      }
      this.score++;
    }
  }.bind(this))
}


Game.prototype.bonusCollision = function () {
  this.bonusArr.forEach(function (e, index) {
    if (e.y > 632 && e.x > this.player.x && e.x < this.player.x + this.player.w) {
      this.bonusArr.splice(index, 1)
      switch (e.type) {
        case "jazmin":
        this.generateCrosses();
        setTimeout(function(){
          this.crossesArr = [];
        }.bind(this),6000)
          // console.log("Hola")
          break;
        case "javascript":
          this.ball.vArcY -= 2
          break;
        case "css":
          this.ball.vArcY -= 2
          break;
      }
    }
  }.bind(this))
}


Game.prototype.generateCrosses = function () {
  var x = 0;
  for (var i = 0; i < 33; i++) {
    x += 35;
    var y = 0;
    for (var j = 0; j < 22; j++) {
      y += 25
      var cross = new JazminEffect(this, x, y)
      this.crossesArr.push(cross);
    }
  }
}


Game.prototype.drawScore = function () {
  this.ctx.font = "30px Arial";
  this.ctx.fillStyle = "white";
  this.ctx.fillText(this.score, 625, 50);
}


// if (e.y < 0 || e.y > 632 && e.x > this.game.player.x && this.e < this.game.player.x + this.game.player.w)