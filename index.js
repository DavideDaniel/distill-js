// dependencies
var fs = require("fs");

// module for commentDoc
module.exports = {
  read: function (filePath) {
    var text = fs.readFileSync(filePath, 'utf8', function (err, data) {
      if (err)
        throw (err);
    });
    return text;
  },
  filter: function (fileName, text) {
    var pattern = new RegExp("(\/\/...*\b)", "ig");
    var lines = text.split(/\n/);
    var title = 'From ' + fileName + '\n';
    var listOfLines = [title];
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].indexOf('// ') >= 0) {
        var newLine = lines[i].replace('\/\/ ', '');
        listOfLines.push('Line ' + i + ': ' + newLine);
      }
    }
    return listOfLines;
  },
  write: function (fileToWrite, filteredText) {
    var success = false;

    function appendLine(line) {
      fs.appendFileSync(fileToWrite, line, encoding = 'utf8', function (
        err) {
        if (err) throw (err);
        success = true;
      });
    }
    for (var i = 0; i < filteredText.length; i++) {
      var line = filteredText[i] + '\n';
      appendLine(line);
    }
    return success;
  },
  extract: function (fileToRead, newFile) { // params taken as strings
    var text = this.read(fileToRead);
    console.log(text);
    text = this.filter(fileToRead, text);
    this.write(newFile, text);
  }
};
