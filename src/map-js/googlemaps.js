function initMap() {
	var coordinates = {lat: 49.9909904, lng: 36.2309967};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		scrollwheel: false,
		center: coordinates
	});
	var marker = new google.maps.Marker({
		position: coordinates,
		map: map
	});
	$.getJSON("build/map-js/map-style_colored.json", function (data) {
		map.setOptions({styles: data});
	});
}



