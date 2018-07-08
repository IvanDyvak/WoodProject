$(document).ready(function(){



$('[style*="#tab4"]').append('<h1 class="heading">ЗАГОЛОВОК</h1>');



document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });


$( "nav .menu" ).hide();
$( "#nav-toggle" ).click(function() {
$( "nav .menu" ).slideToggle( "slow", function() {
});
});

// $(window).bind('scroll', function(){
//      if ($(window).scrollTop() > 200) {
//        // $('nav').css({'height':'40px', 'width':'80%'});
//          $('nav').hide('slow');
//      }
//      else {
//          $('nav').show();
//      }
// });

$("a[href^='#tab']").click(function(){
   // $('#nav-toggle').classList.toggle( "active" ); 
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500)
  });



var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

    $(document).modallery({
      // title: 'The Beauty of the World',
      navigate: true,
      arrows: true,
      keypress: true
    });
// !!!!!!!!!!HEADER Elements APPEAR!!!!!!!!!!!!!!!!!!
    $(function() {
  $("header .low").delay(2000).fadeIn();
});

  setTimeout(function() {
  $("header .low").fadeOut();
}, 6000);

    $(function() {
  $("#head").delay(6500).fadeIn();
});
    $(function() {
  $(".icons").delay(7000).fadeIn();
});

    $(function() {
  var web_window = $(window);
var window_width = web_window.width();
 if($(window).width() >= 576) {
  $(".circle").delay(6500).fadeIn();
}; ($(".circle").css({"display":"none"}))
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// $(window).scroll(function () {
//     var elem = $('#main .fa');
//     setTimeout(function() {
//         elem.css({"opacity":"1","transition":"1s"});
//     },500);            
//     elem.css({"opacity":"0.2","transition":"1s"});    
// });


// $(".btn").click(function () {
//                 $.ajax({
//                     type: "GET",
//                     url: "pics.html",
//                     success: function (data) {
//                         $("#pics").append(data);
//                         $('#pics').css({"overflow": "scroll"});
//                         $('#pics .btn').css({"display": "none"});
//                     }
//                 });
//             });


})
