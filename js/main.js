$(document).ready(function(){



document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });


$( "nav .menu" ).hide();
$( "#nav-toggle" ).click(function() {
$( "nav .menu" ).slideToggle( "slow", function() {
});
});


$("a[href^='#tab']").click(function(){
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
      navigate: true,
      arrows: true,
      keypress: true
    });
// !!!!!!!!!!HEADER Elements APPEAR!!!!!!!!!!!!!!!!!!

  setTimeout(function() {
    $(".brand span").css({"color":"#f46352"});
    },2300);  

    $(function() {
  $("#one").delay(2500).slideDown();
});
    $(function() {
  $("#two").delay(2700).slideDown();
});
    $(function() {
  $("#three").delay(2900).slideDown();
});


    $(function() {
  $(".icons").delay(3100).fadeIn();
});

    $(function() {
  var web_window = $(window);
var window_width = web_window.width();
 if($(window).width() >= 576) {
  $(".circle").delay(2500).fadeIn();
}; ($(".circle").css({"display":"none"}))
});

function moveClass() {
    $('.car').toggleClass('carActive');
}
setInterval(moveClass, 2000);


function offer() {
            var offer = $(".badge");
        offer.animate({fontSize: '15px'}, "ease-out");
        offer.animate({fontSize: '20px'}, "ease-out");
        offer.animate({marginTop: '-5px'}, "ease-out");
    }
setInterval(offer, 2000);

function size() {
            var price = $(".price");
        price.animate({fontSize: '15px'}, "ease-out");
        price.animate({fontSize: '23px'}, "ease-out");
        // price.animate({marginTop: '-5px'}, "ease-out");
    }
setInterval(size, 2000);

$(function () {
  $('[data-toggle="popover"]').popover()
})

})
