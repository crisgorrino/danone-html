//rating hover 
$(document).ready(function(){
		
		$('.icon-heart2').mouseover(function(){		
				
				$(this).removeClass('icon-heart2')
				$(this).addClass('icon-heart')
				
		});
		
		$('.icon-heart2').mouseout(function(){		
				$(this).removeClass('icon-heart')
				$(this).addClass('icon-heart2')
		});
	
});