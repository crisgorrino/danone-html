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
	
	
	  // Perform AJAX login on form submit
    $('form#login_form').on('#submit', function(e){
        $('form#login_form p.status').show().text(ajax_login_object.loadingmessage);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login_form #username').val(), 
                'password': $('form#login_form #password').val(), 
                'security': $('form#login_form #security').val() },
            success: function(data){
                $('form#login_form p.status').text(data.message);
                if (data.loggedin == true){
                    document.location.href = ajax_login_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });

	
	
});
