
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

var ipLat = [];
var ipLon = [];
var fbLat = [];
var fbLon = [];
var gmLat = [];
var gmLon = [];
var richLat = [];
var richLon = [];


function preload(){
  fbdataCSV = loadTable('facebook.csv', "csv", "header");
  gmdataCSV = loadTable('gmail.csv', "csv", "header");
  richdataCSV = loadTable('richardlapham.csv', "csv", "header");
}

function setup(){
  ///fb
  facebookIP = fbdataCSV.getColumn("IP");
  for (i = 3; i < facebookIP.length; i++){
    fbgetAPI(facebookIP[i], i);
}
  ///gm
  gmailIP = gmdataCSV.getColumn("IP");
    for (i = 3; i < gmailIP.length; i++){
      gmgetAPI(gmailIP[i], i);
}
///rich
richardIP = richdataCSV.getColumn("IP");
  for (i = 3; i < richardIP.length; i++){
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


  // console.log(xhr.status);
  // console.log(xhr.statusText);
  var response = xhr.response;
  console.log(num + ": facebook: " + response);
	var json = JSON.parse(response);
	fbLat = append(fbLat, json.lat);
  fbLon = append(fbLon, json.lon);
}

function gmgetAPI(inputIP, num){
  var temp = "http://ip-api.com/json/";
  temp = temp + inputIP;

	var xhr = new XMLHttpRequest();
	xhr.open("GET", temp, false);
	xhr.send();


  // console.log(xhr.status);
  // console.log(xhr.statusText);
  var response = xhr.response;
  console.log(num + ": gmail: " + response);
	var json = JSON.parse(response);
	gmLat = append(gmLat, json.lat);
  gmLon = append(gmLon, json.lon);
}

function richgetAPI(inputIP, num){
  var temp = "http://ip-api.com/json/";
  temp = temp + inputIP;

	var xhr = new XMLHttpRequest();
	xhr.open("GET", temp, false);
	xhr.send();


  // console.log(xhr.status);
  // console.log(xhr.statusText);
  var response = xhr.response;
  console.log(num + ": richardlapham : " + response);
	var json = JSON.parse(response);
	richLat = append(richLat, json.lat);
  richLon = append(richLon, json.lon);
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
                    size: "L"
                });
var rocketIcon = L.MakiMarkers.icon({
                                    icon: "rocket",
                                    color: "#FFED19",
                                    size: "L"
                                });


///fb
  for (f = 0; f < fbLat.length; f++){
      if (fbLat[f] != undefined){
      L.marker([fbLat[f], fbLon[f]], {icon: dangerIcon}).addTo(map)
        // .bindPopup(fbLat[f], fbLon[f]);

    }
}
///gm
  for (f = 0; f < gmLat.length; f++){
      if (gmLat[f] != undefined){
      L.marker([gmLat[f], gmLon[f]], {icon: rocketIcon}).addTo(map)
        // .bindPopup(gmLat[f], gmLon[f]);
    }
}
///rich
  for (f = 0; f < richLat.length; f++){
      if (richLat[f] != undefined){
      L.marker([richLat[f], richLon[f]], {icon: lodgingIcon}).addTo(map)
        // .bindPopup(richLat[f], richLon[f]);
    }
}
}






////map markers/popups
//places
