var auth = 'FLMPSIT7JM3ehGI0y5MWDZ46eeg00v29';
var theaterName;
var theaterAdd;
var movieCard = $('#movie-API-output');

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

function getNearbyTheater() {

    var apiUrl = `https://api.tomtom.com/search/2/poiSearch/movie%20theatre.json?lat=${lat}&lon=${lon}&categorySet=7342&key=${auth}`;
    console.log(apiUrl);

    fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(result => collectNearbyTheaters(result))
    .catch(error => console.log('error', error));

}

function collectNearbyTheaters (result) {
    var randResult = Math.floor(Math.random() * result.results.length);
    theaterInfo = result.results[randResult];
    theaterName = theaterInfo.poi.name;
    theaterAddress = theaterInfo.address.freeformAddress;

    console.log(randResult);

    renderNearbyTheaters();
}

function renderNearbyTheaters() {
    $('<div id= "nearbyTheater"> </div>').appendTo("#movie-API-output");
    $(`<p id="theaterName"> ${theaterName} </p><br>`).appendTo("#nearbyTheater");
    $(`<p id="theaterAdd"> ${theaterAddress} </p>`).appendTo("#nearbyTheater");

}