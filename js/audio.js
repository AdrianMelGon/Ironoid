//sound constructor

function Sound(src) {
  this.sound = document.createElement('audio');
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
      this.sound.play();
  }
  this.pause = function () {
      this.sound.pause();
  }

}


  var mChoque = new Sound('audio/choque');
  

  var mFondo = new Sound("audio/fondo");
  


// Sound.prototype.audioColl = function() {
//   var mChoque = new Sound('audio/choque');
//   audio.play();
// }

// Sound.prototype.audioBack = function() {
//   var mChoque = new Sound("audio/fondo");
//   audio.play();
// }


// FUNCIONA TARDE




// Game.prototype.audioColl = function() {
//   var audio = new Audio("audio/choque");
//   audio.play();
// }

// Game.prototype.audioBack = function() {
//   var audio = new Audio("audio/fondo");
//   audio.play();
// }





// var gameMusic = new Sound('audio/choque');
// var buyRigSound = new Sound('audio/fondo');
