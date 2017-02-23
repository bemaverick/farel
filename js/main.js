var buttonDown=document.querySelector(".scroll-down");
var body=document.querySelector("body");
		buttonDown.addEventListener("click", function(event){
    			event.preventDefault();
    			var scrolledValue=body.scrollTop;
    			var top = scrolledValue;
    		    //alert(scrolledValue);
    			var scr = setInterval(function () {	
					top = top + 10;
					console.log(top);
				    window.scrollTo(scrolledValue, top);	    
					if (top > 550 + scrolledValue) {
					 	    clearInterval(scr);
					    }
					}, 5);
    		});


var contact=document.querySelector(".contact-link"); 
	contact.addEventListener("click", function(event) {
		event.preventDefault();	
		var scrolledValue=body.scrollTop;
    	var top = scrolledValue;
    		var scr = setInterval(function () {	
				top = top + 20;
				console.log(top);
				window.scrollTo(scrolledValue, top);	    
				if (top > 3150) {
			    clearInterval(scr);
				}
			}, 5);

	});
	
			