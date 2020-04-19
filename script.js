$(document).ready(function () {

    // automatically update copyright year
    $("#copyrightYear").text((new Date).getFullYear());
  
    // smooth scroll, https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1
    // Add smooth scrolling to all links
    $(".nav-link").on('click', function (event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function () {
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    });
  
    var rtSiteObj = {
      gif: "./assets/images/rtsite.gif",
      description: "A portfolio site built using HTML, CSS, and Javascript.",
      url: "https://profryanthompson.com/"
    };
  
    var n2moviesObj = {
      gif: "./assets/images/n2movies.gif",
      description: "A web application that populates movie recommendations based off of a movie name.  Built with HTML, CSS, and Javascript, using data from APIs.",
      url: "https://katjones23.github.io/N2Movies/"
    };
  
    $("#portfolioModal").on("show.bs.modal", function (event) {
      var imgClicked = $(event.relatedTarget) // Image that triggered the modal
      var site = imgClicked.data("modal") // Extract info from data-* attributes
  
      // Update the modal's content.
      var modal = $(this)
      modal.find('.modal-title').text(site)
  
      var gif =  modal.find('.gif')
      var description = modal.find(".projectDescription")
      var url = modal.find(".projectLink");
  
      if ($(imgClicked).data("modal") === "Dr. Ryan Thompson Portfolio Site") {
        gif.attr("src", rtSiteObj.gif);
        description.text(rtSiteObj.description);
        url.attr("href", rtSiteObj.url);
        url.text(rtSiteObj.url);
      } else if ($(imgClicked).data("modal") === "N2Movies") {
        gif.attr("src", n2moviesObj.gif);
        description.text(n2moviesObj.description);
        url.attr("href", n2moviesObj.url);
        url.text(n2moviesObj.url);
      };
    });
  
    $(".contactBtn").on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      $(".contactBtn").css("display", "none")
  
      var confirm = $("<p>").text("Thank you!")
      $(confirm).addClass("form-input")
      $(confirm).css( {"font-size": "20px", "font-weight": "bold", "font-family": "serif"})
  
      $("form").append(confirm)
    })
  
  });  