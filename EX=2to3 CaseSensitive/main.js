// Q=2
// Name Cases: store a persons name in variable ,and then 
// that persons name in lowercase,uppercase and titile case.
//   UPPER CASE
var myName = "parveen jatoi";
console.log(myName.toUpperCase());
//    lower case
var myHubby = "ADNAN HAIDER";
console.log(myHubby.toLowerCase());
//   Title Case
var myCourse = "certified ai generative cloud computing certified engineering";
console.log(myCourse.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
var myMother = "Zubaida badar";
console.log(myMother.toUpperCase());
console.log(myMother.toLowerCase());
console.log(myMother.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
