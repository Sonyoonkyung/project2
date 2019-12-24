$(function(){

  $("#header .menu").hover(
		function(){
			$(this).addClass("on");
		}, function(){
			$(this).removeClass("on");
		}
	)
	$(".nav > ul > li:first-child > a").focusin(function(){
		$("#header .menu").addClass("on");
	});
	$(".nav li:last-child li:last-child").focusout(function(){
		$("#header .menu").removeClass("on");
	});

	$(".popup .popup_close a").click(function(){
		$(".popup").fadeOut(300);
	});

  var n=0;
  var pos=0;

	$(".controlls li").eq(n).addClass("active");
  setInterval(function(){
    if(n < 4){
      n=n+1;
    }
    else{
      n=0;
    }
		$(".controlls li").removeClass("active");
		$(".controlls li").eq(n).addClass("active");
    pos=-1*n*100+"%";
    $(".keyvisual_img ul").animate({"left":pos}, 400, function(){
      if(n == 4){
				n=0;
				pos=0;
				$(".keyvisual_img ul").animate({"left" : 0}, 0);
				$(".controlls li").eq(n).addClass("active");
			}
    });
  }, 4000);

});
