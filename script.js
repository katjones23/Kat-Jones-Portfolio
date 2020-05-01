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
  const readmeObj = {
    gif: "./assets/images/readmegif.gif",
    description: "A generator for a markdown README file for GitHub users.",
    repo: "https://github.com/katjones23/READMEGenerator"
  };

  const rtSiteObj = {
    gif: "./assets/images/rtsite.gif",
    description: "A portfolio site built using HTML, CSS, and Javascript.",
    url: "https://profryanthompson.com/",
    repo: "https://github.com/katjones23/Dr-Ryan-Thompson-Webpage"
  };

  const n2moviesObj = {
    gif: "./assets/images/n2movies.gif",
    description: "A web application that populates movie recommendations based off of a movie name.  Built with HTML, CSS, and Javascript, using data from APIs.",
    url: "https://katjones23.github.io/N2Movies/",
    repo: "https://github.com/katjones23/N2Movies"
  };

  const weatherAppObj = {
    gif: "./assets/images/weatherapp.gif",
    description: "A dynamic weather app that allows users to search cities, see search history, quickly redo previous searches, and see current weather and a five-day forecast.  Built with HTML, CSS, and Javascript, using data from an API.",
    url: "https://katjones23.github.io/WeatherApp/",
    repo: "https://github.com/katjones23/WeatherApp"
  };

  const dayPlannerObj = {
    gif: "./assets/images/dayplanner.gif",
    description: "A day planner app for work hours 8-5 to enter and save events for the same day.  Built with HTML, CSS, and Javascript.",
    url: "https://katjones23.github.io/DayPlanner/",
    repo: "https://github.com/katjones23/DayPlanner"
  };

  const jsQuizObj = {
    gif: "./assets/images/quiz.gif",
    description: "A short quiz of multiple choice questions to test your JavaScript knowledge.  Built with HTML, CSS, and Javascript.",
    url: "https://katjones23.github.io/JavaScriptQuiz/",
    repo: "https://github.com/katjones23/JavaScriptQuiz"
  };

  const passGenObj = {
    gif: "./assets/images/passwordgen.gif",
    description: "A webpage with a password generator that will take input from the user as to length and character types to include in the password.  Built with HTML, CSS, and Javascript.",
    url: "https://katjones23.github.io/KJ-password-generator/",
    repo: "https://github.com/katjones23/KJ-password-generator"
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
      url.attr("href", rtSiteObj.url);
      repo.attr("href", rtSiteObj.repo);
    } else if ($(imgClicked).data("modal") === "N2Movies") {
      gif.attr("src", n2moviesObj.gif);
      description.text(n2moviesObj.description);
      url.attr("href", n2moviesObj.url);
      repo.attr("href", n2moviesObj.repo);
    } else if ($(imgClicked).data("modal") === "Weather App") {
      gif.attr("src", weatherAppObj.gif);
      description.text(weatherAppObj.description);
      url.attr("href", weatherAppObj.url);
      repo.attr("href", weatherAppObj.repo);
    } else if ($(imgClicked).data("modal") === "Day Planner") {
      gif.attr("src", dayPlannerObj.gif);
      description.text(dayPlannerObj.description);
      url.attr("href", dayPlannerObj.url);
      repo.attr("href", dayPlannerObj.repo);
    } else if ($(imgClicked).data("modal") === "JavaScript Quiz") {
      gif.attr("src", jsQuizObj.gif);
      description.text(jsQuizObj.description);
      url.attr("href", jsQuizObj.url);
      repo.attr("href", jsQuizObj.repo);
    } else if ($(imgClicked).data("modal") === "Password Generator") {
      gif.attr("src", passGenObj.gif);
      description.text(passGenObj.description);
      url.attr("href", passGenObj.url);
      repo.attr("href", passGenObj.repo);
    } else if ($(imgClicked).data("modal") === "README Generator") {
      gif.attr("src", readmeObj.gif);
      description.text(readmeObj.description);
      url.css("display", "none");
      repo.attr("href", readmeObj.repo);
    };
  });

});  