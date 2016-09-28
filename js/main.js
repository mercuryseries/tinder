$(document).ready(function() {

  // Hide Overlay on Video Play
  $('#video_background').on('play', function(){
    $('.overlay').css('opacity', 0);
  });

  // Display other languages on click
  $("nav li.active a").on('click', function(e) {
    e.preventDefault();
    $('nav li:not(.active)').slideToggle(400);
    // $(this).closest('li').siblings('li').slideToggle(400);
  });

  // Magnific Popup
  // $('.popup').magnificPopup({
  //   type: 'iframe',
  //   removalDelay: 300,
  //   showCloseBtn: false
  // });

  // Arrow Down Button
  $('.arrow_down').on('click', function(e) {
    e.preventDefault();

    $(this).removeClass('bounce');

    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
});