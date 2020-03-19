
ymaps.ready(function(){var e=new ymaps.Map("map",{center:[59.939287346934364,30.319933535690303],zoom:17},{searchControlProvider:"yandex#search"}),o=ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),a=new ymaps.Placemark([59.938784,30.32312],{hintContent:"",balloonContent:"",iconContent:""},{iconLayout:"default#image",iconImageHref:"img/map-marker.png",iconImageSize:[231,190],iconImageOffset:[-50,-200],iconContentLayout:o});e.geoObjects.add(a),e.behaviors.disable("scrollZoom")});




