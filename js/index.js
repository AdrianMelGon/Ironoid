// window.onload = function() {
//   var game = new Game("canvas");
//   game.start();
// };


// $(document).ready(function(){
// $( "#boton" ).click(function() {
//   var game = new Game("canvas");
//  game.start();
// };
// })

function openGame() {
  var game = new Game("canvas");
  $("#intro").css("display", "none");
  mFondo.play();
  game.start();
}