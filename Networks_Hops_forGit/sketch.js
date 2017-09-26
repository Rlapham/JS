
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

var ButtonF = false;
var ButtonG = false;
var ButtonR = false;
var ButtonA = true;
var ButtonC = false;

let divButtonF;
let divButtonG;
let divButtonR;
let divButtonA;
let divButtonC;


var fbX;
var gmX;
var richX;

var fbX1;
var fbX2;
var fbX3;
var fbX4;
var fbX5;
var fbX6;
var fbX7;
var fbX8;
var fbX9;
var fbX10;
var fbX11;
var fbX12;

var gX1;
var gX2;
var gX3;
var gX4;
var gX5;
var gX6;
var gX7;
var gX8;
var gX9;
var gX10;
var gX11;
var gX12;

var rX1;
var rX2;
var rX3;
var rX4;
var rX5;
var rX6;
var rX7;
var rX8;
var rX9;
var rX10;
var rX11;
var rX12;
var rX13;
var rX14;
var rX15;


///map stuff
L.MakiMarkers.accessToken = "pk.eyJ1IjoicmxhcGhhbSIsImEiOiJjaXo0anM2YnMwNjV2MnFwZ2h5YjlkcnR3In0.oj0KCWbMh5IlahZLgYzkhw";

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

let map = L.map('map').setView([40.729, -73.993], 11);
L.tileLayer('https://api.mapbox.com/styles/v1/rlapham/cj6p7c8lu2ab82smyupk5gjs5/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmxhcGhhbSIsImEiOiJjaXo0anM2YnMwNjV2MnFwZ2h5YjlkcnR3In0.oj0KCWbMh5IlahZLgYzkhw', {
  maxZoom: 18,
}).addTo(map);


function preload(){
  fbdataCSV = loadTable('facebook.csv', "csv", "header");
  gmdataCSV = loadTable('gmail.csv', "csv", "header");
  richdataCSV = loadTable('richardlapham.csv', "csv", "header");

  fbX1 = {"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"128.122.1.4","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
  fbX2 ={"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"128.122.254.114","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
  fbX3 ={"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"192.76.177.202","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
  fbX4 ={"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"128.122.254.109","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
  fbX5 ={"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"128.122.254.72","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
  fbX6 ={"as":"AS3356 Level 3 Communications, Inc.","city":"Brooklyn","country":"United States","countryCode":"US","isp":"Level 3 Communications","lat":40.6451,"lon":-73.945,"org":"Level 3 Communications","query":"4.15.212.94","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"11248"}
  fbX7 ={"as":"AS32934 Facebook, Inc.","city":"Los Angeles","country":"United States","countryCode":"US","isp":"Facebook Ireland Ltd","lat":34.0522,"lon":-118.244,"org":"Facebook","query":"31.13.25.67","region":"CA","regionName":"California","status":"success","timezone":"America/Los_Angeles","zip":""}
  fbX8 ={"as":"AS32934 Facebook, Inc.","city":"Los Angeles","country":"United States","countryCode":"US","isp":"Facebook Ireland Ltd","lat":34.0522,"lon":-118.244,"org":"Facebook","query":"31.13.26.17","region":"CA","regionName":"California","status":"success","timezone":"America/Los_Angeles","zip":""}
  fbX9 ={"as":"AS32934 Facebook, Inc.","city":"Sunnyvale","country":"United States","countryCode":"US","isp":"Facebook","lat":37.3697,"lon":-122.0214,"org":"Facebook","query":"173.252.67.111","region":"CA","regionName":"California","status":"success","timezone":"America/Los_Angeles","zip":"94086"}
  fbX10 ={"as":"AS32934 Facebook, Inc.","city":"Sunnyvale","country":"United States","countryCode":"US","isp":"Facebook","lat":37.3697,"lon":-122.0214,"org":"Facebook","query":"173.252.67.169","region":"CA","regionName":"California","status":"success","timezone":"America/Los_Angeles","zip":"94086"}
  fbX11 ={"as":"AS32934 Facebook, Inc.","city":"Sunnyvale","country":"United States","countryCode":"US","isp":"Facebook","lat":37.3697,"lon":-122.0214,"org":"Facebook","query":"173.252.67.9","region":"CA","regionName":"California","status":"success","timezone":"America/Los_Angeles","zip":"94086"}
  fbX12 ={"as":"AS32934 Facebook, Inc.","city":"New York","country":"United States","countryCode":"US","isp":"Facebook Ireland Ltd","lat":40.7128,"lon":-74.0059,"org":"Facebook","query":"31.13.71.36","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":""}

    rX1 = {"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"128.122.1.4","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
    rX2 = {"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"128.122.254.114","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
    rX3 =   {"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"192.76.177.202","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
    rX4 =   {"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"128.122.254.111","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
    rX5 =   {"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"128.122.254.70","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
    rX6 =   {"as":"AS6453 TATA COMMUNICATIONS (AMERICA) INC","city":"Bowie","country":"United States","countryCode":"US","isp":"Tata Communications (america)","lat":38.9268,"lon":-76.7118,"org":"Tata Communications (america)","query":"64.86.62.13","region":"MD","regionName":"Maryland","status":"success","timezone":"America/New_York","zip":"20716"}
    rX7 =   {"as":"AS6453 TATA COMMUNICATIONS (AMERICA) INC","city":"Herndon","country":"United States","countryCode":"US","isp":"Tata Communications (america)","lat":38.9266,"lon":-77.3936,"org":"Tata Communications (america)","query":"66.198.111.4","region":"VA","regionName":"Virginia","status":"success","timezone":"America/New_York","zip":"20171"}
    rX8 =   {"as":"AS6453 TATA COMMUNICATIONS (AMERICA) INC","city":"Herndon","country":"United States","countryCode":"US","isp":"Tata Communications (america)","lat":38.9266,"lon":-77.3936,"org":"Tata Communications (america)","query":"216.6.87.137","region":"VA","regionName":"Virginia","status":"success","timezone":"America/New_York","zip":"20171"}
    rX9 =   {"as":"AS6453 TATA COMMUNICATIONS (AMERICA) INC","city":"Herndon","country":"United States","countryCode":"US","isp":"Tata Communications (america)","lat":38.9266,"lon":-77.3936,"org":"Tata Communications (america)","query":"216.6.87.241","region":"VA","regionName":"Virginia","status":"success","timezone":"America/New_York","zip":"20171"}
    rX10 =   {"as":"AS6453 TATA COMMUNICATIONS (AMERICA) INC","city":"Herndon","country":"United States","countryCode":"US","isp":"Tata Communications (america)","lat":38.9266,"lon":-77.3936,"org":"Tata Communications (america)","query":"216.6.87.2","region":"VA","regionName":"Virginia","status":"success","timezone":"America/New_York","zip":"20171"}
    rX11=   {"as":"AS6453 TATA COMMUNICATIONS (AMERICA) INC","city":"Birmingham","country":"United States","countryCode":"US","isp":"Tata Communications (america)","lat":33.5065,"lon":-86.7408,"org":"Tata Communications (america)","query":"66.198.154.66","region":"AL","regionName":"Alabama","status":"success","timezone":"America/Chicago","zip":"35213"}
    rX12 =   {"as":"AS32787 Akamai Technologies, Inc.","city":"Cambridge","country":"United States","countryCode":"US","isp":"Akamai Technologies","lat":42.3626,"lon":-71.0843,"org":"Akamai Technologies","query":"209.200.144.200","region":"MA","regionName":"Massachusetts","status":"success","timezone":"America/New_York","zip":"02142"}
    rX13 =   {"as":"AS32787 Akamai Technologies, Inc.","city":"Cambridge","country":"United States","countryCode":"US","isp":"Akamai Technologies","lat":42.3626,"lon":-71.0843,"org":"Akamai Technologies","query":"209.200.144.205","region":"MA","regionName":"Massachusetts","status":"success","timezone":"America/New_York","zip":"02142"}
    rX14 =   {"as":"AS32787 Akamai Technologies, Inc.","city":"Cambridge","country":"United States","countryCode":"US","isp":"Akamai Technologies","lat":42.3626,"lon":-71.0843,"org":"Akamai Technologies","query":"209.200.148.130","region":"MA","regionName":"Massachusetts","status":"success","timezone":"America/New_York","zip":"02142"}
    rX15 =   {"as":"AS53831 Squarespace, Inc.","city":"Limeport","country":"United States","countryCode":"US","isp":"Squarespace","lat":40.509,"lon":-75.4471,"org":"Squarespace","query":"198.185.159.144","region":"PA","regionName":"Pennsylvania","status":"success","timezone":"America/New_York","zip":"18060"}

    gX1 =       {"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"128.122.1.36","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
    gX2 =       {"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"192.76.177.202","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
    gX3 =       {"as":"AS12 New York University","city":"New York","country":"United States","countryCode":"US","isp":"New York University","lat":40.7317,"lon":-73.9885,"org":"New York University","query":"128.122.254.68","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"10003"}
    gX4 =       {"as":"AS6453 TATA COMMUNICATIONS (AMERICA) INC","city":"Concord","country":"United States","countryCode":"US","isp":"Tata Communications (america)","lat":35.4198,"lon":-80.6748,"org":"Tata Communications (america)","query":"209.58.75.217","region":"NC","regionName":"North Carolina","status":"success","timezone":"America/New_York","zip":"28027"}
    gX5 =       {"as":"AS6453 TATA COMMUNICATIONS (AMERICA) INC","city":"Poughkeepsie","country":"United States","countryCode":"US","isp":"Tata Communications (america)","lat":41.677,"lon":-73.8619,"org":"Tata Communications (america)","query":"63.243.128.141","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"12603"}
    gX6 =       {"as":"AS6453 TATA COMMUNICATIONS (AMERICA) INC","city":"Poughkeepsie","country":"United States","countryCode":"US","isp":"Tata Communications (america)","lat":41.677,"lon":-73.8619,"org":"Tata Communications (america)","query":"63.243.128.141","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"12603"}
    gX7 =       {"as":"AS6453 TATA COMMUNICATIONS (AMERICA) INC","city":"Poughkeepsie","country":"United States","countryCode":"US","isp":"Tata Communications (america)","lat":41.677,"lon":-73.8619,"org":"Tata Communications (america)","query":"63.243.128.122","region":"NY","regionName":"New York","status":"success","timezone":"America/New_York","zip":"12603"}
    // gX8 =       {"as":"AS15169 Google Inc.","city":"Mountain View","country":"United States","countryCode":"US","isp":"Google","lat":37.4192,"lon":-122.0574,"org":"Google","query":"72.14.195.232","region":"CA","regionName":"California","status":"success","timezone":"America/Los_Angeles","zip":"94043”}
    gX9 =       {"as":"AS15169 Google Inc.","city":"Mountain View","country":"United States","countryCode":"US","isp":"Google","lat":37.4192,"lon":-122.0574,"org":"Google","query":"216.239.62.21","region":"CA","regionName":"California","status":"success","timezone":"America/Los_Angeles","zip":"94043"}
    gX10 =       {"as":"AS15169 Google Inc.","city":"Mountain View","country":"United States","countryCode":"US","isp":"Google","lat":37.4192,"lon":-122.0574,"org":"Google","query":"216.239.62.147","region":"CA","regionName":"California","status":"success","timezone":"America/Los_Angeles","zip":"94043"}
    gX11 =       {"as":"AS15169 Google Inc.","city":"Jupiter","country":"United States","countryCode":"US","isp":"Google","lat":26.937,"lon":-80.135,"org":"Google","query":"172.217.9.229","region":"FL","regionName":"Florida","status":"success","timezone":"America/New_York","zip":"33458"}


}


function setup(){

  ///fb
  facebookIP = fbdataCSV.getColumn("IP");
  fbSpeed = fbdataCSV.getColumn("speed1");
  // console.log(fbSpeed);
    fbgetAPI(fbX1);
    fbgetAPI(fbX2);
    fbgetAPI(fbX3);
    fbgetAPI(fbX4);
    fbgetAPI(fbX5);
    fbgetAPI(fbX6);
    fbgetAPI(fbX7);
    fbgetAPI(fbX8);
    fbgetAPI(fbX9);
    fbgetAPI(fbX10);
    fbgetAPI(fbX11);
    fbgetAPI(fbX12);

  ///gm
  gmailIP = gmdataCSV.getColumn("IP");
  gmSpeed = gmdataCSV.getColumn("speed1");
  gmgetAPI(gX1);
  gmgetAPI(gX2);
  gmgetAPI(gX3);
  gmgetAPI(gX4);
  gmgetAPI(gX5);
  gmgetAPI(gX6);
  gmgetAPI(gX7);
  // gmgetAPI(gX8);
  gmgetAPI(gX9);
  gmgetAPI(gX10);
  gmgetAPI(gX11);

///rich
richardIP = richdataCSV.getColumn("IP");
richSpeed = richdataCSV.getColumn("speed1");
richgetAPI(rX1);
richgetAPI(rX2);
richgetAPI(rX3);
richgetAPI(rX4);
richgetAPI(rX5);
richgetAPI(rX6);
richgetAPI(rX7);
richgetAPI(rX8);
richgetAPI(rX9);
richgetAPI(rX10);
richgetAPI(rX11);
richgetAPI(rX12);
richgetAPI(rX13);
richgetAPI(rX14);
richgetAPI(rX15);


  drawMap();
  // drawMapF(fbLat, fbLon);
  // drawMapG(gmLat, gmLon);
  // drawMapR(richLat, richLon);


  divButtonF = createButton('FB');
  divButtonF.id('divButtonF');

  divButtonG = createButton('Gmail');
  divButtonG.id('divButtonG');

  divButtonR = createButton('Richard');
  divButtonR.id('divButtonR');

  divButtonA = createButton('All');
  divButtonA.id('divButtonA');

  divButtonC = createButton('Clear');
  divButtonC.id('divButtonC');

}


function fbgetAPI(input){
  // var temp = "http://ip-api.com/json/";
  // temp = temp + inputIP;
  //
	// var xhr = new XMLHttpRequest();
	// xhr.open("GET", temp, false);
	// xhr.send();
  // var response = xhr.response;
	// var json = JSON.parse(response);

	fbLat = append(fbLat, input.lat);
  fbLon = append(fbLon, input.lon);
  fbName = append(fbName, input.as);
  fbCountry = append(fbCountry, input.country);
  fbState = append(fbState, input.state);
  fbCity = append(fbCity, input.city);
  console.log(fbLat);

}

function gmgetAPI(input){
  // var temp = "http://ip-api.com/json/";
  // temp = temp + inputIP;
  //
	// var xhr = new XMLHttpRequest();
	// xhr.open("GET", temp, false);
	// xhr.send();
  // var response = xhr.response;
	// var json = JSON.parse(response);

	gmLat = append(gmLat, input.lat);
  gmLon = append(gmLon, input.lon);
  gmName = append(gmName, input.as);
  gmCountry = append(gmCountry, input.country);
  gmState = append(gmState, input.state);
  gmCity = append(gmCity, input.city);
}

function richgetAPI(input){
  // var temp = "http://ip-api.com/json/";
  // temp = temp + inputIP;
  //
	// var xhr = new XMLHttpRequest();
	// xhr.open("GET", temp, false);
	// xhr.send();
  // var response = xhr.response;
	// var json = JSON.parse(response);

	richLat = append(richLat, input.lat);
  richLon = append(richLon, input.lon);
  richName = append(richName, input.as);
  richCountry = append(richCountry, input.country);
  richState = append(richState, input.state);
  richCity = append(richCity, input.city);
}

function drawMap(){

////////legend
var legend = L.control({position: 'bottomleft'});

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

///fb
function Facebook(){
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
} //end facebook

///gm
function Gmail(){
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

}
}/// END gmail



///rich
function Rich(){
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
    // console.log(richSpeed[f]);

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

}
} // End rich



function draw(){

  divButtonF.mousePressed(BoolF);
  divButtonG.mousePressed(BoolG);
  divButtonR.mousePressed(BoolR);
  divButtonA.mousePressed(BoolA);
  divButtonC.mousePressed(Clear);

  noLoop();
}


function BoolF(){
  ButtonF = true;
  ButtonG = false;
  ButtonR = false;
  ButtonA = false;
  console.log(ButtonF);
  Facebook();
}
function BoolG(){
  ButtonF = false;
  ButtonG = true;
  ButtonR = false;
  ButtonA = false;
  console.log(ButtonG);
  Gmail();
}
function BoolR(){
  ButtonF = false;
  ButtonG = false;
  ButtonR = true;
  ButtonA = false;
  console.log("R" + ButtonR);
  Rich();
}
function BoolA(){
  ButtonF = false;
  ButtonG = false;
  ButtonR = false;
  ButtonA = true;
  console.log(ButtonA);
  Facebook();
  Gmail();
  Rich();
}

function Clear(){
  map.eachLayer(function (layer) {
    map.removeLayer(layer);
  });
  L.tileLayer('https://api.mapbox.com/styles/v1/rlapham/cj6p7c8lu2ab82smyupk5gjs5/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmxhcGhhbSIsImEiOiJjaXo0anM2YnMwNjV2MnFwZ2h5YjlkcnR3In0.oj0KCWbMh5IlahZLgYzkhw', {
    maxZoom: 18,
  }).addTo(map);
}

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

// ///GEOJSON
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}
