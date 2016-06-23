var request = require("request");
var fs = require("fs");
var $ = require('cheerio');
var result = {};

//第一個網址
request({
  url: "http://www.tvhomes.net/2016/01/2016-2016-japan-drama-online.html",
  method: "GET"
  }, function(e,r,b) {
    if(e || !b) { return; }
    var bodyHtml = b;
    var namebox = $("ul.last",bodyHtml)
    var drameNmae = $("ul.last div span a",bodyHtml)

    //每個日劇的網址
    // console.log('每個日劇的網址')
    for (var i = 0; i < drameNmae.length; i++) {
      var thisdrameNmae = drameNmae[i].children[0].data
      result[thisdrameNmae] = {}
      var thisLink = drameNmae[i].attribs.href
      console.log(thisdrameNmae)

      // console.log(thisdrameNmae)
      // console.log(thisLink)
      // 99.9刑事律師 - 99.9 Keiji Senmon Bengoshi
      // http://www.tvhomes.net/2016/04/999-999-keiji-senmon-bengoshi-list.html

      request({
          url: thisLink,
          method: "GET"
        }, function(e,r,b) {
          if(e || !b) { return; }
          var bodyHtml = b;
          var videoBox = $(".entry-content",bodyHtml)
          var eachEpName = $(".entry-content table td h2 a",bodyHtml)
          var getDescription = $(".entry-content div[dir='ltr'] br",bodyHtml)
          var description = ''
          // 此日劇的介紹

          for (var j = 0; j < getDescription.length; j++) {
            if (getDescription[j].next != null && getDescription[j].next.data != null) {
              description += getDescription[j].next.data
            }
          }
          result[thisdrameNmae]['description'] = description
          var eachEpLink = $(".entry-content table td h2 a",bodyHtml)
          // console.log(result)
          // console.log(eachEpLink.length)
          // 每個集數的Link
          // for (var k = 0; k < eachEpName.length; k++) {
          //     result[thisdrameNmae][eachEpName[k].children[0].children[0].data] = []
          //     var videoURL = eachEpName[k].attribs.href
          //     request({
          //         url: videoURL,
          //         method: "GET"
          //     }, function(e,r,b) {
          //         if(e || !b) { return; }
          //         var videoHtml = b;
          //         var namebox = $(".entry-content iframe",videoHtml)
                  
          //         for (var l = 0; l < namebox.length; l++) {
          //             // 每個影片的iframe
          //             var iframeHTML = ''
          //             // if (namebox[l].attribs != undefined)
          //             {
          //               iframeHTML += '<iframe '
          //               // for (var z = 0; z < Object.keys(namebox[l].attribs).length; z++) {
          //               //     iframeHTML += ' ' + Object.keys(namebox[l].attribs)[z] + '=' + '"' + namebox[l]['attribs'][Object.keys(namebox[i].attribs)[z]] + '"'
          //                   // Object.keys(namebox[i].attribs)[z]
          //               }
          //               iframeHTML += '></iframe>'
          //             // }
          //             // result[thisdrameNmae][eachEpName[k].children[0].children[0].data].push(iframeHTML)
          //             console.log(result)
          //         }
          //     });
          // }
        });
  }
});

console.log(result)