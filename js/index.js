
function openGame() {
  var game = new Game("canvas");
  $("#intro").css("display", "none");
  mFondo.play();
  game.start();
}