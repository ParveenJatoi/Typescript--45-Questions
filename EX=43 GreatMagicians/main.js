// Q=43
// Great Magicians:  make function and array of magicians names and modify the function with "great"
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define array of magician names
var magician_names = ["Herry", "David", "Albert"];
var great_magicians = make_great(magician_names);
console.log(great_magicians);
// to show in list
show_magicians(great_magicians);
console.log();
