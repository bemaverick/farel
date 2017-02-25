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
				if (top > 3135) {
			    clearInterval(scr);
				}
			}, 5);

	});
	

    function initialize() {
	    var x = 50.473773;
	    var y = 30.497345;
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
	    var image = "img/map-marker-2.png"; 
	    var myLatLng = new google.maps.LatLng(x, y);
	    var beachMarker = new google.maps.Marker({
	        position: myLatLng,
	        map: map,
	        icon: image
	    });
}
google.maps.event.addDomListener(window, "load", initialize);		

var header=document.querySelector(".main-header-block");
var headerHiddenBlock=document.querySelector(".main-header-block-hidden");


window.addEventListener("scroll", function(event) {
  
    var top = this.scrollY;
 // console.log(top);
 // console.log(header);
  if (top >= 100) {
    header.classList.add("main-header-block-hollow");
 	headerHiddenBlock.classList.add("visible");
} else {
	header.classList.remove("main-header-block-hollow");
	headerHiddenBlock.classList.remove("visible");
}

}, false);﻿