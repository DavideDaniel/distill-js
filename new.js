var fs = require("fs"),
    // readFileName = process.argv[2],
    // writeFileName = process.argv[3],
    commentArray = [];

// module.exports = {
  // read: function (readFileName) {
    // fs.readFile (readFileName, function(err, data) {
//       var text = data.toString();
//       var commentArray = text.match(new RegExp(/\/\/...*\b/i));
//       for (var i = 0; i < commentArray.length; i++) {
//         commentArray[i].replace(/\/\//, '');
//       if (err) { throw err; }
//         console.log("Done reading");
//         writeFile(writeFileName);
//       }
//     });
//   },
//   write: function (writeFileName) {
//     var longString = ''
//     for (var i = 0; i < commentArray.length; i++) {
//       longString += commentArray[i] + '\n'
//     };
//     fs.writeFile (writeFileName, longString, function(err, data) {
//       if (err) { throw err; }
//       console.log(writeFileName + " has been written");
//     })
//   }
// }


function readWrite (readThisFile, writeFileName) {
  fs.readFile(readThisFile, function(err, data) {
    var text = data.toString();
      commentArray = text.match(new RegExp(/\/\/...*\b/i));
    for (var i = 0; i < commentArray.length; i++) {
      commentArray[i].replace(/\/\//, '');
      console.log(commentArray);
    if (err) { throw err; }
      console.log("Done reading");
      writeFile(writeFileName);
    }
  });
}

function writeFile (writeFileName) {
  console.log(commentArray);
  var longString = ''
  for (var i = 0; i < commentArray.length; i++) {
    longString += commentArray[i] + '\n'
  };
  fs.writeFile (writeFileName, longString, function(err, data) {
    if (err) { throw err; }
    console.log(writeFileName + " has been written");
  })
}

readWrite("testRead.js", "test.md");
