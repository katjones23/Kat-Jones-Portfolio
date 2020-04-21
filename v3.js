
  // contact button logic
  $(".contactBtn").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(".contactBtn").css("display", "none")

    var confirm = $("<p>").text("Thank you!")
    $(confirm).addClass("form-input")
    $(confirm).css({ "font-size": "20px", "font-weight": "bold", "font-family": "serif" })

    $("form").append(confirm)
  });