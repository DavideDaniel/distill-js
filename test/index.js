var commentDoc = require('../index');
var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('assert');
var read = commentDoc.read;
var filter = commentDoc.filter;
var write = commentDoc.write;
var extract = commentDoc.extract;

describe('#read', function () {
	it('is a function', function () {
		expect(typeof read).to.equal('function');
	});
	it('should throw err if no file is present', function () {
		expect(read).to.throw(Error);
	});
	it('should read the contents of a file', function () {
		var expected = '// how now\nbrown cow';
		var actual = read('testRead.js');
		assert.equal(expected, actual);
	});
});
describe('#filter', function () {
	it('is a function', function () {
		expect(typeof filter).to.equal('function');
	});
	it(
		'should return an array with the file name and only the comments in a file and their line number',
		function () {
			var fileName = 'testRead.js';
			var text = read(fileName);
			var filteredText = filter(fileName, text);
			var expected = ['From testRead.js\n', 'Line 0: how now'];
			filteredText.should.eql(expected);
		});
});
describe('#write', function () {
	it('is a function', function () {
		expect(typeof write).to.equal('function');
	});
	it('should write a file with a given array', function () {
		var fileToRead = 'testRead.js';
		var text = read(fileToRead);
		var filteredText = filter(fileToRead, text);
		var newFile = 'testWrite.md';
		var expected = 'From testRead.js\n\nLine 0: how now\n';

		write(newFile, filteredText);
		contentsOfNewFile = read(newFile);
		expect(
			contentsOfNewFile).to.equal(expected);
	});
});
