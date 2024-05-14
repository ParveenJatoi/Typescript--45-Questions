// Q=13
// in an array store some examples of mode of transportation use this list to print series of statement
// about these items such as "i would like to own a car"
var transportationMode = ["car", "bike", "bus", "aeroplane"];
// for loop
for (var i = 0; i < transportationMode.length; i++) {
    console.log("i would to own a ".concat(transportationMode[i]));
}
// for each lop
transportationMode.forEach(function (mode) {
    console.log("i would like to own a ".concat(mode));
});
