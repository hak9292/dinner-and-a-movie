var auth = 'FLMPSIT7JM3ehGI0y5MWDZ46eeg00v29';
var theaterName;
var theaterAddress;
var movieCard = $('#movie-API-output');
var theater;

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

function getNearbyTheater() {

    var apiUrl = `https://api.tomtom.com/search/2/poiSearch/movie%20theatre.json?lat=${lat}&lon=${lon}&categorySet=7342&key=${auth}`;

    fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(result => collectNearbyTheaters(result))
    .catch(error => console.log('error', error));
    movieCard.text('');//to clear between reshuffles

}

function collectNearbyTheaters (result) {
    var randResult = Math.floor(Math.random() * result.results.length);
    theaterInfo = result.results[randResult];
    theaterName = theaterInfo.poi.name;
    theaterAddress = theaterInfo.address.freeformAddress;

    renderNearbyTheaters();
    saveRecentCinema(theaterInfo);
}

function renderNearbyTheaters() {

    $('<div id= "nearbyTheater"> </div>').appendTo("#movie-API-output");
    $(`<p id="theaterName"> ${theaterName} </p><br>`).appendTo("#nearbyTheater");
    $(`<p id="theaterAdd"> ${theaterAddress} </p>`).appendTo("#nearbyTheater");

}

function saveRecentCinema () {
    theater = [{
        "Name": theaterName,
        "Address": theaterAddress
    }];
    localStorage.setItem("theater", JSON.stringify(theater));
}