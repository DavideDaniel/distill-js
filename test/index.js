var should = require('chai')
    .should();
var commentDoc = require('../index');
var read = commentDoc.read;
var filter = commentDoc.filter;
var write = commentDoc.write;
var extract = commentDoc.extract;

describe('#read', function () {
    it('should read the contents of a file', function () {
        read('testRead.js')
            .should.equal('// how now\nbrown cow');
    });
});
describe('#filter', function () {
    it('should return an array with the file name and only the comments in a file and their line number', function () {
      var fileName = 'testRead.js'
        var text = read(fileName)
        var filtererdText = filter(fileName, text)
        console.log(filtererdText);
        filter('testRead.js', text).should.equal(['From testRead.js\n','Line 0: how now']);
    });
});