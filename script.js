$(document).ready(() => {
  $(".play-btn").on("click", function() {
    var audio = new Audio('images/na7la_na7la.mp3');
    audio.play();
  });
})