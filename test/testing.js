var assert = require("assert");
var fs = require("fs");
describe("extractComments function", function () {
    it("should return true when a file is present", function () {
        assert.equal(fs.readFile("server.js", function (err, data) {
            if (data) {
                return true;

            }
        }))
    })
    it("should detect // in the file and return true", function () {
        assert.equal(fs.readFile("server.js", function (err, data) {
            if (data) {
                var text = data.toString();
                if (text.indexOf('//') > 0) {
                    return true;
                }
            }
        }))
    })
    it("should return lines that start with // in the file", function () {
        assert.equal(fs.readFile("server.js", function (err, data) {
            if (data) {
                var text = data.toString();
                // var pattern = /\/\/...*\b/
                // var comment = new RegExp(pattern);
                var commentArray = text.match(new RegExp(/\/\/...*\b/i));
                if (commentArray.length >= 1) {
                    return true
                }

            }
        }))
    })
    it("should remove // from the lines in the matched array", function () {
        assert.equal(fs.readFile("server.js", function (err, data) {
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
                    return true
                }
            }

        }))
    })
    it("should write the comments into a markdown file and the contents should match", function () {
        assert.equal(fs.readFile("server.js", function (err, data) {
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
                    fs.writeFile("README.md", longString, function(err){
                    	if (err){console.error(err)};
                    })
                    fs.readFile("README.md", function(err, data){
                    	if (data){
                    		var text = data.toString();
                    		if (text === longString){
                    			return true
                    		}
                    	}
                    })
                }
            }

        }))
    })
})