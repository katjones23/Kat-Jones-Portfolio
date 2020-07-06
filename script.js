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
      const hash = this.hash;

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

  // card carousel controls
  $('.carousel').carousel({
    interval: false
  })

  // objects to populate modals
  const recipeObj = {
    gif: "./assets/images/recipexchangegif.gif",
    description: "“Recipe-Xchange” is a web app built with a group for saving and searching recipes with nutritional information calculated and provided. Utilizes user authentication and built with Sequelize, Node, Express, an API, and NPM packages.",
    url: "https://recipe-xchange.herokuapp.com/",
    repo: "https://github.com/AndreaGT91/Recipe-Xchange"
  };
  
  const noteObj = {
    gif: "./assets/images/notetakergif.gif",
    description: "A web app to write, save, and delete notes. Uses Express to save and retrieve the notes from a JSON file.  Built using Node.js, Express.js, JavaScript, HTML, and CSS.",
    url: "https://kat-jones-express-note-taker.herokuapp.com/",
    repo: "https://github.com/katjones23/NoteTaker"
  };

  const readmeObj = {
    gif: "./assets/images/readmegif.gif",
    description: "A generator for a markdown README file for GitHub users.  Built using Node.js, JavaScript, and Markdown.",
    repo: "https://github.com/katjones23/READMEGenerator"
  };

  const rtSiteObj = {
    gif: "./assets/images/rtsite.gif",
    description: "A portfolio site built using HTML, CSS, and JavaScript.",
    url: "https://profryanthompson.com/",
    repo: "https://github.com/katjones23/Dr-Ryan-Thompson-Webpage"
  };

  const n2moviesObj = {
    gif: "./assets/images/n2movies.gif",
    description: "A collaboratively developed web application that populates movie recommendations based off of a movie name.  Built with HTML, CSS, and JavaScript, using data from APIs.",
    url: "https://katjones23.github.io/N2Movies/",
    repo: "https://github.com/katjones23/N2Movies"
  };

  // function to populate modals
  $("#portfolioModal").on("show.bs.modal", function (event) {
    const imgClicked = $(event.relatedTarget) // Image that triggered the modal
    const site = imgClicked.data("modal") // Extract info from data-* attributes

    // Update the modal's content.
    const modal = $(this)
    modal.find('.modal-title').text(site)

    const gif = modal.find('.gif')
    const description = modal.find(".projectDescription")
    const url = modal.find(".projectLink");
    const repo = modal.find(".repoLink")

    if ($(imgClicked).data("modal") === "Dr. Ryan Thompson Portfolio Site") {
      gif.attr("src", rtSiteObj.gif);
      description.text(rtSiteObj.description);
      url.css("display", "block");
      url.attr("href", rtSiteObj.url);
      repo.attr("href", rtSiteObj.repo);
    } else if ($(imgClicked).data("modal") === "N2Movies") {
      gif.attr("src", n2moviesObj.gif);
      description.text(n2moviesObj.description);
      url.css("display", "block");
      url.attr("href", n2moviesObj.url);
      repo.attr("href", n2moviesObj.repo);
    } else if ($(imgClicked).data("modal") === "Note Taker") {
      gif.attr("src", noteObj.gif);
      description.text(noteObj.description);
      url.css("display", "block");
      url.attr("href", noteObj.url);
      repo.attr("href", noteObj.repo);
    } else if ($(imgClicked).data("modal") === "README Generator") {
      gif.attr("src", readmeObj.gif);
      description.text(readmeObj.description);
      url.css("display", "none");
      repo.attr("href", readmeObj.repo);
    } else if ($(imgClicked).data("modal") === "Recipe-Xchange") {
      gif.attr("src", recipeObj.gif);
      description.text(recipeObj.description);
      url.css("display", "block");
      url.attr("href", recipeObj.url);
      repo.attr("href", recipeObj.repo);
    };
  });
});  