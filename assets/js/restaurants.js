var APIKey = 'JQQVfzZ0V6AWGJY29qv5JWeDuv2zOB9i';
// var lat = 37.337;
// var lon = -121.89;
var restaurantInfo;
var restaurantName;
var restaurantCategories;
var cuisineType;
var restaurantAddress;
var restaurantCard = $('#restaurant-API-output');
var submitBtn = $('#submit-btn');
var restaurantBtn = $('#restaurant-btn');
var lineBreak = $('<br>');
var lineBreak2 = $('<br>');
var lineBreak3 = $('<br>');
var saveRestaurant;

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  function fetchRestaurantAPI () {
    fetch("https://api.tomtom.com/search/2/poiSearch/petrol%20station.json?query=restaurants&lat=" + lat +  "&lon=" + lon + "&limit=100&radius=1600&key=" + APIKey, requestOptions)
        .then(response => response.json())
        .then(result => printRestaurant(result))
        .catch(error => console.log('error', error));

    restaurantCard.text('');
  }

    function printRestaurant (result) {
        // console.log(result.results.length)
        var randomResult = Math.floor(Math.random() * result.results.length)
        restaurantInfo = result.results[randomResult];
        restaurantName = restaurantInfo.poi.name;
        restaurantCategories = restaurantInfo.poi.categories;
        
        if (restaurantCategories[0] == 'restaurant') {
            cuisineType = restaurantCategories[1];
        } else {
            cuisineType = restaurantCategories[0];
        }

        restaurantAddress = restaurantInfo.address.freeformAddress;
        addRestaurantContent();
    }

// when the submit button is clicked, generate restaurants
// submitBtn.on("click", fetchRestaurantAPI);

// Append restaurant content to restaurant card
function addRestaurantContent() {
    restaurantCard.append(restaurantName, lineBreak, cuisineType, lineBreak2, restaurantAddress, lineBreak3);
    saveRestaurantFunction();
}

function saveRestaurantFunction() {
    saveRestaurant = [{
        "Name": restaurantName,
        "Cusine Type": cuisineType,
        "Restaurant Address": restaurantAddress
    }];
    window.localStorage.setItem('restaurant', JSON.stringify(saveRestaurant));
}

restaurantBtn.on("click", fetchRestaurantAPI);