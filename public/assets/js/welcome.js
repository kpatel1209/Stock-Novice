$(document).ready(function () {
  
  let t = 0;
  let text = "Welcome to Stock Novice!";
  let speed = 50;
  typeWriter();

  // Typewriter effect for Welcome Statement when page loads
  function typeWriter() {    
    if (t < text.length) {
      document.getElementById("welcomeTo").innerHTML += text.charAt(t);
      t++;
      setTimeout(typeWriter, speed);
    }
  }
});