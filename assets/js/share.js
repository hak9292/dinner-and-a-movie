// leaving comments so that you guys can see what i did, and i will delete them later before we present!
// share button
var shareBtn = $('#share-btn');
// getElementById and store the following vars:
// get & set date
var currentDate = moment().format("dddd");
$("#currentDay").text(currentDate);
// restaurant name
// var restaurantNameS = $('#restaurant-API-output');
// // cuisine
// var = $('');
// // restaurant address
// var = $('');
// // movie theater name
// var = $('');
// // theater address
// var = $('');

// restaurant name, cuisine, restaurant address
// movie theater name, theater address

// Set Title, author (will set to day of the week)

// 1. "Restaurant:" (h4 tag)
// 2. "(Restaurant Name):" (strong tag)
// 3. "Address:" (b tag)
// 4. "(Address):" (attrs: map link, a tag)
// 5. "Cuisine:" (b tag)
// 6. "(Cuisine):" (p tag)
// 7. "" (hr tag)
// 8. "Movies:" (h4 tag)
// 9. "(Theater Name):" (strong tag)
// 10. "Address:" (b tag)
// 11. "(Address):" (attrs: map link, a tag)
var title = `Date Night`;
var author = currentDate;

// my creative juices ran out, and thus, "freatePage()" was born
// needed to be formatted with element type "tag", attrs (attributes, only href and src), and lastly, "children" (Array of Node)
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
        linkEl.attr('href', createdLink); // makes link clickable.
    });
};
// var createdLink = response.
// var linkEl = $()
// linkEl.text(link[i]);

shareBtn.on("click", freatePage);




// Things i need to still do:
// clear link once someone clicks any of the "try again" buttons
// open link in new tab/window
// orient button better (center it)
// add function when clicking button to automatically copy the link to your clipboard, with an alert notifying you that you've done so


//***********old code, will look through and delete soon***********
//***********old code, will look through and delete soon***********
//***********old code, will look through and delete soon***********
//***********old code, will look through and delete soon***********
//***********old code, will look through and delete soon***********
//***********old code, will look through and delete soon***********

// var telegraphURL = "https://api.telegra.ph/%method%";


//     // "result": {
//     //     "short_name": "hhak92",
//     //     "author_name": "Hee Hoon Kim",
//     //     "author_url": "",
//     //     "access_token": "d06f6120a4635faec578c3bf6e210e40dfc5a6763c15af6be4fb771af417",
//     //     "auth_url": "https://edit.telegra.ph/auth/lGCwiALXXnf32DN3YIQSozQBxk8rBa8URIq7i95fwk"
//     // }

// var settings = {
//     "url": "https://api.telegra.ph/editAccountInfo?access_token=d06f6120a4635faec578c3bf6e210e40dfc5a6763c15af6be4fb771af417&short_name=Dinner and a Movie&author_name=Romantic Partner&author_url=https://google.com/",
//     "method": "GET",
//     "timeout": 0,
//   };
      
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });

//   function domToNode(domNode) {
//     if (domNode.nodeType == domNode.TEXT_NODE) {
//       return domNode.data;
//     }
//     if (domNode.nodeType != domNode.ELEMENT_NODE) {
//       return false;
//     }
//     var nodeElement = {};
//     nodeElement.tag = domNode.tagName.toLowerCase();
//     for (var i = 0; i < domNode.attributes.length; i++) {
//       var attr = domNode.attributes[i];
//       if (attr.name == 'href' || attr.name == 'src') {
//         if (!nodeElement.attrs) {
//           nodeElement.attrs = {};
//         }
//         nodeElement.attrs[attr.name] = attr.value;
//       }
//     }
//     if (domNode.childNodes.length > 0) {
//       nodeElement.children = [];
//       for (var i = 0; i < domNode.childNodes.length; i++) {
//         var child = domNode.childNodes[i];
//         nodeElement.children.push(domToNode(child));
//       }
//     }
//     return nodeElement;
//   }
  
//   function nodeToDom(node) {
//     if (typeof node === 'string' || node instanceof String) {
//       return document.createTextNode(node);
//     }
//     if (node.tag) {
//       var domNode = document.createElement(node.tag);
//       if (node.attrs) {
//         for (var name in node.attrs) {
//           var value = node.attrs[name];
//           domNode.setAttribute(name, value);
//         }
//       }
//     } else {
//       var domNode = document.createDocumentFragment();
//     }
//     if (node.children) {
//       for (var i = 0; i < node.children.length; i++) {
//         var child = node.children[i];
//         domNode.appendChild(nodeToDom(child));
//       }
//     }
//     return domNode;
//   }
  
//   var article = document.getElementById('article');
//   var content = domToNode(article).children;
//   $.ajax('https://api.telegra.ph/createPage', {
//     data: {
//       access_token:   '%access_token%',
//       title:          'Title of page',
//       content:        JSON.stringify(content),
//       return_content: true
//     },
//     type: 'POST',
//     dataType: 'json',
//     success: function(data) {
//       if (data.content) {
//         while (article.firstChild) {
//           article.removeChild(article.firstChild);
//         }
//         article.appendChild(nodeToDom({children: data.content}));
//       }
//     }
//   });


//***********old code, will look through and delete soon***********
//***********old code, will look through and delete soon***********
//***********old code, will look through and delete soon***********
//***********old code, will look through and delete soon***********
//***********old code, will look through and delete soon***********
//***********old code, will look through and delete soon***********