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
  

