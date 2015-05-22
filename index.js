// dependencies
var fs = require("fs");

exports.read = function (filePath) {
  var text = fs.readFileSync(filePath, 'utf8', function (err, data) {
    if (err)
      throw (err);
  });
  return text;
};
exports.filter = function (fileName, text) {
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
};
exports.write = function (fileToWrite, filteredText) {
  function appendLine(line) {
    fs.appendFileSync(fileToWrite, line, encoding = 'utf8', function (
      err) {
      if (err) throw (err);
    });
  }
  for (var i = 0; i < filteredText.length; i++) {
    var line = filteredText[i] + '\n';
    appendLine(line);
  }
};
exports.extract = function (fileToRead, newFile) { // params taken as strings
  var text = exports.read(fileToRead);
  text = exports.filter(fileToRead, text);
  exports.write(newFile, text);
};
