// dependencies
var fs = require("fs");

// module for commentDoc

module.exports = {
    extract: function (fileToRead, fileToWrite) {

        fs.readFile(fileToRead, function (err, data) {
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
                    fs.writeFile(fileToWrite, longString, function (err) {
                        if (err) {
                            console.error(err)
                        };
                    })
                    fs.readFile(fileToWrite, function (err, data) {
                        if (data) {
                            var text = data.toString();
                            if (text === longString) {
                                console.log(fileToWrite + ' written succesfully.');
                            }
                        }
                    })
                }
            }

        });
    };

}