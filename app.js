$(document).ready(function(){
    $(".chocolat-parent").Chocolat({
      enableZoom: false,
      duration: 600,
      loop: true
    });


    // .click oder .mouseover

    $(".toggle").click(function() {

      $(".navigation").toggleClass("active");

      $(".open").toggleClass("active");

      $(".close").toggleClass("active");

    })
});
