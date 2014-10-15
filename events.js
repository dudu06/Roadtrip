	// window.onload = function(){
	// 	var logo = document.getElementById("car");
	// 	$('#car').mouseenter(function() {
	//        TweenLite.to(car, 4, {left:"400px"});   
	//     });
	// }

$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('#car').animate({left: "-=100px"}, 2000);
                break;
            // Up Arrow Pressed
            case 38:
                $('#car').animate({top: "-=30px"}, 'slow');
                break;
            // Right Arrow Pressed
            case 39:
                $('#car').animate({left: "+=100px"}, 1000);
                break;
            // Down Array Pressed
            case 40:
                $('#car').animate({top: "+=30px"}, 'slow');
                break;
        }
    });
});


//     $('img').animate({top: '+=100px'}, 500);
// });