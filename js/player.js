
// Barra


function Player(game) {
  this.game = game;
  this.x = 200;
  this.y = 620;

  this.img = new Image();
  this.img.src = "images/barra.png";

  this.w = 100;
  this.h = 30;

}

Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  );
}




Player.prototype.getCoord = function coord(event) {
  this.x  = event.clientX
  // return this.x
}  
  



// window.addEventListener("mousemove", function (e) {
//   this.x = e.x;
//   this.draw()
// })
