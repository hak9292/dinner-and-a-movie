var shareBtn = $('#share-btn');

var currentDate = moment().format("dddd");
$("#currentDay").text(currentDate);

var title = `Date Night`;
var author = currentDate;

function freatePage() {
    var contents = [
        {
            "tag": "h4",
            "children": ["Restaurant:"]
        }, {
            "tag": "strong",
            "children": [JSON.stringify(restaurantName)]
        }, {
            "tag": "br"
        }, {
            "tag": "b",
            "children": ["Cuisine: "]
        }, {
            "tag": "p",
            "children": [cuisineType]
        }, {
            "tag": "b",
            "children": ["Address: "]
        }, {
            "tag": "a",
            "attrs": { "href": `http://maps.google.com/maps?q=${restaurantAddress}` },
            "children": [restaurantAddress]
        }, {
            "tag": "hr"
        }, {
            "tag": "hr"
        }, {
            "tag": "h4",
            "children": ["Movie Theater:"]
        }, {
            "tag": "strong",
            "children": [JSON.stringify(theaterName)]
        }, {
            "tag": "br"
        }, {
            "tag": "b",
            "children": ["Address: "]
        }, {
            "tag": "a",
            "attrs": { "href": `http://maps.google.com/maps?q=${theaterAddress}` },
            "children": [theaterAddress]
        }
    ];
    var createPage = {
        "url": `https://api.telegra.ph/createPage?access_token=d06f6120a4635faec578c3bf6e210e40dfc5a6763c15af6be4fb771af417&title=${title}&author_name=${author}&content=${JSON.stringify(contents)}&return_content=true`,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(createPage).done(function (response) {
        var createdLink = response.result.url;
        var linkEl = $("#link");
        linkEl.text(createdLink);
        linkEl.attr("href", createdLink);
        $("#copyToClipboard").removeClass( "hidden" );
    });

};
function copyToClipboard() {
    var $temp = $("<input>");
    var linkEl = $("#link");
    $("body").append($temp);
    $temp.val(linkEl[0].innerText).select();
    document.execCommand("copy");
    $temp.remove();
    var successEl = $("#link");
    var success = "Your link has been copied to your clipboard!"
    successEl.text(success);
}

shareBtn.on("click", freatePage);