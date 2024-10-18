var searchString = "Now is the time, this is the tame";
var re = /t\w{2}e/g;
console.log(searchString);
var replacement = searchString.replace(re, "place");
console.log(replacement);

//-----------------------------------------
var re = new RegExp('t\\w{2}e', "g");
var replacement = searchString.replace(re, "place");
console.log(replacement);