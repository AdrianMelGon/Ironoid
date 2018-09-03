//Bloques
function Blocks(game){
  this.game = game;
  this.w = 35
  this.h = 25
  this.x = 40;
  this.y =  100;
}


 Blocks.prototype.draw = function() {
  for (i = 0; i < 30; i++) {
    this.x += this.w;
    for (j = 0; j < 7; j++) {
      this.y += this.h;
      this.ctx.strokeStyle = "red";
      this.ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
  }
}
