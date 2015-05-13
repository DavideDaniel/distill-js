

var fs = require("fs");

fs.readFile("server.js", function (err, data) {
    if (data) {
        var text = data.toString();
        var commentArray = text.match(new RegExp(/\/\/...*\b/i));
        var counter = 0;
        for (var i = 0; i < commentArray.length; i++) {
            commentArray[i].replace(/\/\//, '')
            if (commentArray[i].indexOf('//') < 0) {
                counter++
            }
        }
        if (counter === commentArray.length) {
            var longString = ''
            for (var i = 0; i < commentArray.length; i++) {
                longString += commentArray[i] + '\n'
            };
            fs.writeFile("README.md", longString, function (err) {
                if (err) {
                    console.error(err)
                };
            })
            fs.readFile("README.md", function (err, data) {
                if (data) {
                    var text = data.toString();
                    if (text === longString) {
                        return true
                    }
                }
            })
        }
    }

});