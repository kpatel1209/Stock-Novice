$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {


      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $("html, body").animate({
        scrollTop: $(hash).offset().top - $("#mainNav").height() - 20
      }, 1000, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        // Don't need the below code for now.
        // window.location.hash = hash;
      });
    }
  });
});