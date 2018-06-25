var slider = $('.slides div');
    var intervalHandler = null;
    slider.hide();
    slider.eq(0).show();
    clickCount = 0;    

    //autoplay

    $(document).ready(function(){
        intervalHandler = setInterval(function(){$(".SlNextBT").click();},6000);
     }) ;  

    //next

    $(".SlNextBT").click(function(){
          clearInterval(intervalHandler);
          intervalHandler = setInterval(function(){$(".SlNextBT").click();},6000);
         if(clickCount < slider.length)
               slider.eq(clickCount++).fadeOut(2100).hide();
         if(clickCount == slider.length)
             clickCount = 0;
          slider.eq(clickCount).fadeIn(2100).show();
     }) ; 

    //previous

        $(".SlPreviousBT").click(function(){
            clearInterval(intervalHandler);
            intervalHandler = setInterval(function(){$(".SlNextBT").click();},6000);
             if(clickCount >= 0)
                   slider.eq(clickCount--).fadeOut(2100).hide();                
             if(clickCount < 0)
                 clickCount = slider.length-1;
              slider.eq(clickCount).fadeIn(2100).show();
            console.log(clickCount);
         }) ; 
	

		 
 function easyOptions(title, subTitle, overlay, control) {
        if ( ! title && ! subTitle && ! overlay && ! control) {
            $(".sliderTitle, .sliderSubTitle, .sliderOverlay, .sliderControll").css("display","none");
            return;
        }

        $(".sliderTitle, .sliderSubTitle, .sliderOverlay, .sliderControll").css("display","block");
    }

    easyOptions(true, true, true, true);

		


