ymaps.ready(function() {
    var myMap = new ymaps.Map("map", {
          center: [59.9380,30.3200],
          zoom: [17],
          controls: []
       }),
 
       myMap.behaviors.disable("scrollZoom");
       myMap.controls.add("zoomControl");
 
    var   myPlacemark = new ymaps.Placemark([59.9386,30.3225], {
          hintContent: "",
          balloonContent: "ул. Б. Конюшенная 18/8"
          }, {
 
          iconLayout: "default#image",
          iconImageHref: "../img/map-marker.png",
          iconImageSize: [231, 190],
          iconImageOffset: [0, 0]
       }),
 
       myMap.geoObjects.add(myPlacemark);   
    });