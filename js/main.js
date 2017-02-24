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
	

    function initialize() {
	    var x = 50.473869;
	    var y = 30.497340;
	    var mapOptions = {
	        zoom: 17,
	        center: new google.maps.LatLng(x, y),
	        scrollwheel: false,
	        disableDefaultUI: true
	    }
	    var map = new  google.maps.Map(
	        document.querySelector(".map"),
	        mapOptions
	    );
	    var image = "img/map-marker.png"; 
	    var myLatLng = new google.maps.LatLng(x, y);
	    var beachMarker = new google.maps.Marker({
	        position: myLatLng,
	        map: map,
	        icon: image
	    });
}
google.maps.event.addDomListener(window, "load", initialize);		