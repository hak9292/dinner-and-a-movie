//zip-code api call



var zipCodeBaseUrl = 'https://www.zipcodeapi.com/rest'; //50 requests per hour, 250 max per day 
var zipAPIKey = 'uAFMqf3SzWZK3GgF5EnCFem0VTjSf1Pl0H0ZH25RAjs5abpIncPNpM8CN3TQfgv7';
var format = 'json';
var zipCode = '';
var units = 'degrees';
var sep = '/';
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };                   <--trying to get around cors, did not work

var searchInput = document.getElementById('searched-zipcode');//gets user input from html
//function fetches zip code API  ?How to validate a zip code?
function fetchZipCodeData() {
    searchString = searchInput.value;
    if (searchString) {
        zipCode = searchString;
        var url = zipCodeBaseUrl + sep + zipAPIKey + sep + 'info.' + format + sep + zipCode + sep + units;

        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            if (!data) {//lookup if status not 200
                console.error("No response from server, check request.");
            } else {
                printZipApiOutput(data);
            }
        }).catch(function (err) {
            // callBackupZipCodeApi(url);
            console.error(err);
        });
    } else {
        console.error("This is not valid zip-code.");
    }
}


function printZipApiOutput(data) {
    console.log(data);
}

// will use in case I find a good backup API for the zip
function callBackupZipCodeApi(zip) {
    var backupUrl = '';
    fetch(backupUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (!data) {
            console.error("No response from server, check request.");
        } else {
            printZipApiOutput(data);
        }
    }).catch(function (err) {
        console.error(err);
    });
}