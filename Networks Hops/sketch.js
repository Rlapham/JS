
var inputIP;
var fbdataCSV;
var gmdataCSV;
var richdataCSV;
var num;

var facebookIP;
var gmailIP;
var richardIP;
var facebookGeo;
var gmailGeo;
var richardGeo;

var fbSpeed;
var gmSpeed;
var richSpeed;

var ipLat = [];
var ipLon = [];
var fbLat = [];
var fbLon = [];
var gmLat = [];
var gmLon = [];
var richLat = [];
var richLon = [];

var fbJson;
var gmJson;
var richJson;

var fbName = [];
var fbCountry = [];
var fbState = [];
var fbCity = [];

var gmName = [];
var gmCountry = [];
var gmState = [];
var gmCity = [];

var richName = [];
var richCountry = [];
var richState = [];
var richCity = [];



function preload(){
  fbdataCSV = loadTable('facebook.csv', "csv", "header");
  gmdataCSV = loadTable('gmail.csv', "csv", "header");
  richdataCSV = loadTable('richardlapham.csv', "csv", "header");
}

function setup(){
  ///fb
  facebookIP = fbdataCSV.getColumn("IP");
  fbSpeed = fbdataCSV.getColumn("speed1");
  console.log(fbSpeed);
  for (i = 2; i < facebookIP.length; i++){
    fbgetAPI(facebookIP[i], i);
}
  ///gm
  gmailIP = gmdataCSV.getColumn("IP");
  gmSpeed = gmdataCSV.getColumn("speed1");
    for (i = 2; i < gmailIP.length; i++){
      gmgetAPI(gmailIP[i], i);
}
///rich
richardIP = richdataCSV.getColumn("IP");
richSpeed = richdataCSV.getColumn("speed1");
  for (i = 2; i < richardIP.length; i++){
    richgetAPI(richardIP[i], i);
}

  drawMap(fbLat, fbLon, gmLat, gmLon, richLat, richLon);
}


function fbgetAPI(inputIP, num){
  var temp = "http://ip-api.com/json/";
  temp = temp + inputIP;

	var xhr = new XMLHttpRequest();
	xhr.open("GET", temp, false);
	xhr.send();

  var response = xhr.response;
  // console.log(num + ": facebook: " + response);
	var json = JSON.parse(response);
	fbLat = append(fbLat, json.lat);
  fbLon = append(fbLon, json.lon);

  fbName = append(fbName, json.as);
  fbCountry = append(fbCountry, json.country);
  fbState = append(fbState, json.state);
  fbCity = append(fbCity, json.city);

}

function gmgetAPI(inputIP, num){
  var temp = "http://ip-api.com/json/";
  temp = temp + inputIP;

	var xhr = new XMLHttpRequest();
	xhr.open("GET", temp, false);
	xhr.send();


  var response = xhr.response;
  // console.log(num + ": gmail: " + response);
	var json = JSON.parse(response);
	gmLat = append(gmLat, json.lat);
  gmLon = append(gmLon, json.lon);
  gmJson = json;

  gmName = append(gmName, json.as);
  gmCountry = append(gmCountry, json.country);
  gmState = append(gmState, json.state);
  gmCity = append(gmCity, json.city);
}

function richgetAPI(inputIP, num){
  var temp = "http://ip-api.com/json/";
  temp = temp + inputIP;

	var xhr = new XMLHttpRequest();
	xhr.open("GET", temp, false);
	xhr.send();

  var response = xhr.response;
  // console.log(num + ": richardlapham : " + response);
	var json = JSON.parse(response);
	richLat = append(richLat, json.lat);
  richLon = append(richLon, json.lon);
  richJson = json;

  richName = append(richName, json.as);
  richCountry = append(richCountry, json.country);
  richState = append(richState, json.state);
  richCity = append(richCity, json.city);
}

function drawMap(fbLat, fbLon, gmLat, gmLon, richLat, richLong){

 L.MakiMarkers.accessToken = "pk.eyJ1IjoicmxhcGhhbSIsImEiOiJjaXo0anM2YnMwNjV2MnFwZ2h5YjlkcnR3In0.oj0KCWbMh5IlahZLgYzkhw";
 var map = L.map('map').setView([40.729, -73.993], 11);
L.tileLayer('https://api.mapbox.com/styles/v1/rlapham/cj6p7c8lu2ab82smyupk5gjs5/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmxhcGhhbSIsImEiOiJjaXo0anM2YnMwNjV2MnFwZ2h5YjlkcnR3In0.oj0KCWbMh5IlahZLgYzkhw', {
  maxZoom: 18,
}).addTo(map);
var dangerIcon = L.MakiMarkers.icon({
            icon: "danger",
            color: "#FF0050",
            size: "L"
        });
var lodgingIcon = L.MakiMarkers.icon({
                    icon: "lodging",
                    color: "#14A0CC",
                    size: "M"
                });
var rocketIcon = L.MakiMarkers.icon({
                                    icon: "rocket",
                                    color: "#FFED19",
                                    size: "S"
                                });


function getColor(d) {
    return d > 6 ? '#FF0000' :
           d > 5 ? '#FF8000' :
           d > 4  ? '#FFBF00' :
           d > 3  ? '#FFFF00' :
           d > 2  ? '#BFFF00' :
           d > 1   ? '#80FF00' :
           d > 0   ? '#FFFFFF' :
                      '#FFFFFF';
}

///fb
  for (f = 0; f < fbLat.length; f++){
      if (fbLat[f] != undefined){

      var tempLat = fbLat[f];
      var tempLon = fbLon[f];
      var tempName = fbName[f];
      var tempCount = fbCountry[f];
      var tempCity = fbCity[f];
      if (fbLat[f+1] != undefined){
        var tempLatoff = fbLat[f+1];
        var tempLonoff = fbLon[f+1];
      }
      var latlng = [];
      console.log(fbSpeed[f]);

      L.geoJson(getData(), {
          pointToLayer: function(feature, coordinates){
          return new L.marker(coordinates,
            {
              icon: dangerIcon
          })
        },
        onEachFeature(feature, layer){
          layer.bindPopup("Name: " + feature.geometry.name + "." + "<br>" + "City: " + feature.geometry.city + "." + "<br>" + "Country: " + feature.geometry.country + "." + "<br>" + "Coord: " + feature.geometry.coordinates)
        },

        }
        ).addTo(map);

        function connectDots() {
          if (tempLatoff != undefined) {
              latlng.push([tempLat, tempLon]);
              latlng.push([tempLatoff, tempLonoff]);
          }
      return latlng;
      }


      L.polyline(connectDots(),
        {
            color: getColor(fbSpeed[f]),
            weight: 3,
            smoothFactor: 1
         }).addTo(map);


        function getData() {
        return {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [tempLon, tempLat],
            "name": tempName,
            "country": tempCount,
            "city": tempCity,
          },
          "properties": {
          }
        }
      }; //End getData
    } // End undefined
}
///gm
  for (f = 0; f < gmLat.length; f++){
    //   if (gmLat[f] != undefined){
    //   L.marker([gmLat[f], gmLon[f]], {icon: rocketIcon}).addTo(map)
    //     // .bindPopup(gmLat[f], gmLon[f]);
    // }

    if (gmLat[f] != undefined){

    var tempLat = gmLat[f];
    var tempLon = gmLon[f];
    var tempName = gmName[f];
    var tempCount = gmCountry[f];
    var tempCity = gmCity[f];
    if (gmLat[f+1] != undefined){
      var tempLatoff = gmLat[f+1];
      var tempLonoff = gmLon[f+1];
    }
    var latlng = [];
    console.log(gmSpeed[f]);

    L.geoJson(getData(), {
        pointToLayer: function(feature, coordinates){
        return new L.marker(coordinates,
          {
            icon: rocketIcon
        })
      },
      onEachFeature(feature, layer){
        layer.bindPopup("Name: " + feature.geometry.name + "." + "<br>" + "City: " + feature.geometry.city + "." + "<br>" + "Country: " + feature.geometry.country + "." + "<br>" + "Coord: " + feature.geometry.coordinates)
      },

      }
      ).addTo(map);

      function connectDots() {
        if (tempLatoff != undefined) {
            latlng.push([tempLat, tempLon]);
            latlng.push([tempLatoff, tempLonoff]);
        }
    return latlng;
    }


    L.polyline(connectDots(),
      {
          color: getColor(gmSpeed[f]),
          weight: 3,
          smoothFactor: 1
       }).addTo(map);


      function getData() {
      return {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [tempLon, tempLat],
          "name": tempName,
          "country": tempCount,
          "city": tempCity,
        },
        "properties": {
        }
      }
    }; //End getData
  } // End undefined

} /// END gmail



///rich
  for (f = 0; f < richLat.length; f++){
    //   if (richLat[f] != undefined){
    //   L.marker([richLat[f], richLon[f]], {icon: lodgingIcon}).addTo(map)
    //     // .bindPopup(richLat[f], richLon[f]);
    // }
    if (richLat[f] != undefined){

    var tempLat = richLat[f];
    var tempLon = richLon[f];
    var tempName = richName[f];
    var tempCount = richCountry[f];
    var tempCity = richCity[f];
    if (richLat[f+1] != undefined){
      var tempLatoff = richLat[f+1];
      var tempLonoff = richLon[f+1];
    }
    var latlng = [];
    console.log(richSpeed[f]);

    L.geoJson(getData(), {
        pointToLayer: function(feature, coordinates){
        return new L.marker(coordinates,
          {
            icon: lodgingIcon
        })
      },
      onEachFeature(feature, layer){
        layer.bindPopup("Name: " + feature.geometry.name + "." + "<br>" + "City: " + feature.geometry.city + "." + "<br>" + "Country: " + feature.geometry.country + "." + "<br>" + "Coord: " + feature.geometry.coordinates)
      },

      }
      ).addTo(map);

      function connectDots() {
        if (tempLatoff != undefined) {
            latlng.push([tempLat, tempLon]);
            latlng.push([tempLatoff, tempLonoff]);
        }
    return latlng;
    }


    L.polyline(connectDots(),
      {
          color: getColor(richSpeed[f]),
          weight: 3,
          smoothFactor: 1
       }).addTo(map);


      function getData() {
      return {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [tempLon, tempLat],
          "name": tempName,
          "country": tempCount,
          "city": tempCity,
        },
        "properties": {
        }
      }
    }; //End getData
  } // End undefined

} // End rich

////////legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 1, 2, 3, 4, 5, 6],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + " ms." +'<br>' : '+');
    }

    return div;
};

legend.addTo(map);


} /// END DRAWMAP



// ///GEOJSON
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}
