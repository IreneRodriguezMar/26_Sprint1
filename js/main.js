$(document).ready(function(){
   $(".evMouseenter").click(function(){
        alert("Hola Funciona!");
    });
});
$(document).ready(function(){
    $(".eventoMouse").on({
        mouseenter: function(){
            $(this).css("background-color", "pink");
        },
        mouseleave: function(){
            $(this).css("background-color", "black");
        },
        click: function(){
            $(this).css("background-color", "aquamarine");
        }
    });
});
$(document).ready(function(){
    $(".titevSlide").mouseleave(function(){
        $(".eventoSlide").css("color", "white").slideUp(2000).slideDown(2000);
    });
});
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "pink");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#cccccc");
    });
});
$(document).ready(function(){
    $(".eventoMouse2").on({
        mouseenter: function(){
            $(this).css("background-color", "deeppink");
        },
        mouseleave: function(){
            $(this).css("background-color", "black");
        }
    });
});
$(document).ready(function(){
    $(".imgfondo").click(function(){
        $(this).animate({height: '300px', opacity: '0.4'}, "slow");
        $(this).animate({width: '300px', opacity: '0.8'}, "slow");
        $(this).animate({height: '100px', opacity: '0.4'}, "slow");
        $(this).animate({width: '100px', opacity: '0.8'}, "slow");
    });
});
$(document).ready(function(){
	$(".jsColor").dblclick(function(){
		$(".jsColor").css("color","aquamarine");
	});
});
$(document).ready(function(){
	$(".eventRedes").click(function(){
		$(this).css("color","deeppink")
	});
});