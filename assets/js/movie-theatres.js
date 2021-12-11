// variables for header
// var movieBaseUrl = 'https://api-gate2.movieglu.com/';
// var client = 'FFBV';
// var xApiKey = '2kHFB0cyD25gEBxjotDKF8rsNCeQZK9W4PPMGXd8'; //  for sandbox use 2kHFB0cyD25gEBxjotDKF8rsNCeQZK9W4PPMGXd8
// var auth = 'Basic RkZCVl9YWDpNa3RIUG5HcFdUU2g='; // for sandbox use Basic RkZCVl9YWDpNa3RIUG5HcFdUU2g=
// var territory = 'XX'; // two letter ISO codes | for sandbox use XX
// var apiVersion = 'v200'; // current api version is v200 as of Dec 21
// var geoLocation = '';
// var deviceDt = ''; //ISO 8601

// var lat;
// var lon;

// before you can make a call, find deviceDt in ISO 8601 
// !! remember to add moment.js to html as a script
function getNearbyTheater() {
    var dt = moment().toISOString();

    // put lat lon into movieglu cinemasNearby
    //holders for testing:
    var lat = -84.388000;
    var lon = 33.749000;

    var settings = {
        "url": "https://api-gate2.movieglu.com/cinemasNearby/?n=10",
        "method": "GET",
        "headers": {
        "api-version": "v200",
        "Authorization": "Basic RkZCVl9YWDpNa3RIUG5HcFdUU2g=",
        "Geolocation": "-84.388000;33.749000",
        "client": "FFBV",
        "x-api-key": "2kHFB0cyD25gEBxjotDKF8rsNCeQZK9W4PPMGXd8",
        "device-datetime": "2021-12-06T23:28:07.277Z",
        "territory": "XX",
        "app_version": "V200",
        },
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
};

getNearbyTheater();