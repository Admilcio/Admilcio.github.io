$(function() {
    $(".control").each(function() {
      $(this).on("click", function() {
        $(".active-btn").removeClass("active-btn");
        $(this).addClass("active-btn");
        $(".active").removeClass("active");
        $("#" + $(this).data("id")).addClass("active");
      });
    });
  
    $(".theme-btn").on("click", function() {
      $("body").toggleClass("light-mode");
    });
  });

  