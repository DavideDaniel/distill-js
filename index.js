// dependencies
var fs = require("fs");

// module for commentDoc
module.exports = {
    read: function (filePath) {
        var text = fs.readFileSync(filePath, 'utf8', function (err) {
            if (err) {
                console.error(err);
            }
        });
        return text
    },
    filter: function (text) {
        var pattern = new RegExp("(\/\/...*\b)", "ig");
        var lines = text.split(/\n/);
        console.log(lines);
        // var commentArray = text.split(pattern);
        // text = text.split(pattern)
        var counter = 0;
        for (var i = 0; i < commentArray.length; i++) {
            // commentArray[i].replace(/\/\//, '')
            if (commentArray[i].indexOf('//') < 0) {
                counter++
            }
        }
        commentArray.split(/\n/);
        console.log(commentArray);
    },
    write: function (fileToWrite, filteredText) {
        var fileName = fileToWrite;
        // console.log(fileName);
        var stringToWrite = 'From file: ' + fileName + '\n' + filteredText;
        // console.log(stringToWrite);
        fs.writeFileSync(fileToWrite, stringToWrite, function (err) {
            if (err) {
                console.error(err);
            };
                console.log(fileToWrite + 'ready.');
        });
    },
    extract: function (fileToRead, newFile) { // params taken as strings
        var text = this.read(fileToRead);
        console.log(text);
        text = this.filter(text);
        this.write(newFile, text);
    }
}