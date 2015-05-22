#!/usr/bin/env node

var fileToRead = process.argv[2];

if (fileToRead) {
  doIt();
} else {
  console.log("distill needs a file to work with");
}

function doIt() {
  var module = require("./index").extract;
  var fileToWrite = fileToRead.replace(".js", "-distilled.md");
  module(fileToRead, fileToWrite);
}
