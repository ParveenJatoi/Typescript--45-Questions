// Q=11
// Store few friends name in an array called names, print each persons name by accessing each element in list
// one at a time
// Array of names
var names = ["parveen", "parsa", "anaya", "fatima"];
// Three Methods
// loop
// for each
// for of loop
// loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// for each
names.forEach(function (names) {
    console.log(names);
});
// for  of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
//  Q=12
// Greetings
// printing each persons name, prnt message to them, text of each message should be the same
// but each message should be personalized with persons name
// for loop method
for (var i = 0; i < names.length; i++) {
    console.log("hello,".concat(names[i], "! how are you today?"));
}
// for each method
names.forEach(function (names) {
    console.log("hello,".concat(names, "!how are you today?"));
});
//   for of loop
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var friendName = names_2[_a];
    console.log("hello,".concat(friendName, "! how are you today?"));
}
