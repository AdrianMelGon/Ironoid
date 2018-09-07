
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
    this.checkEnd();
    if (this.gameEnd) {
      this.gameOver();
    }
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
  this.ballsArr = [];
  this.blocksArr = [];
  this.crossesArr = [];
  this.player = new Player(this);
  this.ball = new Ball(this);
  this.ballsArr.push(this.ball);
  this.background = new Background(this);
  this.score = 0;
  this.bonusArr = [];
  this.generateBlocks();
  this.jazminCounter = 0;
  this.javascriptCounter = 0;
  this.cssCounter = 0;
  this.gameEnd = false;
}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

Game.prototype.draw = function () {
  this.background.draw();
  this.player.draw();
  this.blocksArr.forEach(function (e) {
    e.draw();
  })
  this.bonusArr.forEach(function (e) {
    e.draw();
  })
  this.crossesArr.forEach(function (e) {
    e.draw();
  })
  this.ballsArr.forEach(function (e) {
    e.draw();
  })
  this.drawScore();
  this.bonusCollision();
}

Game.prototype.moveAll = function () {
  this.ball.move();
  this.isCollision();
  this.bonusArr.forEach(function (e) {
    e.move();
  })
  this.ballsArr.forEach(function (e) {
    e.move();
  })
  this.bonusCollision();
  this.player.move();
 
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
  this.ballsArr.forEach(function (eb) {
    this.blocksArr.forEach(function (e, index) {
      if (eb.arcY < e.y + e.h && eb.arcY > e.y && eb.arcX > e.x && eb.arcX < e.x + e.w) {
        eb.vArcY *= -1
        mChoque.play();
        this.blocksArr.splice(index, 1);
        if (index == 30 && this.cssCounter < 1) {
          this.bonus = new Bonus(this, "css");
          this.bonusArr.push(this.bonus)
          this.bonus.x = e.x;
          this.bonus.y = e.y;
          this.cssCounter++;

        }
        if (index == 53 && this.jazminCounter < 1) {
          this.bonus = new Bonus(this, "jazmin");
          this.bonusArr.push(this.bonus)
          this.bonus.x = e.x;
          this.bonus.y = e.y;
          this.jazminCounter++;

        }
        if (index == 8 && this.javascriptCounter < 1) {
          this.bonus = new Bonus(this, "javascript");
          this.bonusArr.push(this.bonus)
          this.bonus.x = e.x;
          this.bonus.y = e.y;
          this.javascriptCounter++;
        }
        this.score++;
      }
    }.bind(this))
  }.bind(this))
}

Game.prototype.bonusCollision = function () {
  this.bonusArr.forEach(function (e, index) {
    if (e.y > 632 && e.x > this.player.x && e.x < this.player.x + this.player.w) {
      this.bonusArr.splice(index, 1)
      switch (e.type) {
        case "jazmin":
          this.generateCrosses();
          setTimeout(function () {
            this.crossesArr = [];
          }.bind(this), 6000)
          break;
        case "javascript":
          this.generateBalls()
          break;
        case "css":
          this.background.changeBackground();
          this.blocksArr.forEach(function (e) {
            e.changeBlocks();
          })
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

Game.prototype.generateBalls = function () {
  for (var i = 0; i < 2; i++) {
    var bonusBall = new Ball(this)
    this.ballsArr.push(bonusBall);
  }
}

Game.prototype.checkEnd = function () {
  var count = 0;
  for (var i = 0; i < this.ballsArr.length; i++) {
    if (this.ballsArr[i].arcY + this.ballsArr[i].vArcY > this.canvas.height) {
      count++
    }
  }
  if (count == this.ballsArr.length) {
    this.gameEnd = true;
  }
}

Game.prototype.drawScore = function () {
  this.ctx.font = "30px Arial";
  this.ctx.fillStyle = "white";
  this.ctx.fillText(this.score, 625, 50);
}





// if (e.y < 0 || e.y > 632 && e.x > this.game.player.x && this.e < this.game.player.x + this.game.player.w)