		var buttonWrite=document.querySelector(".scroll-down");
			var body=document.querySelector("body");

			buttonWrite.addEventListener("click", function(event){
    			event.preventDefault();
    			var scrolledValue=body.scrollTop;
    			var top = scrolledValue;
    		    //alert(scrolledValue);
    			var scr = setInterval(function () {	
					top = top + 5;
					console.log(top);
				    window.scrollTo(scrolledValue, top);	    
					if (top > 716) {
					 	    clearInterval(scr);
					    }
					}, 5);
    		});

			