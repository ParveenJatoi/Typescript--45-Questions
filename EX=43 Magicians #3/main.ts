// Q=43
// Unchanged Magicians:

// from ex 42
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define array of magician names
let  magician_names = ["Herry", "David", "Albert"];
// let great_magicians = make_great(magician_names);

// Making copy of original array through .slics function

let copy_magicians_names=magician_names.slice()

// Modify the copied array to include "The Great" with their nmaes

let copy_great_magicians =make_great(copy_magicians_names)

// show both arrays original and copy

// original
show_magicians(magician_names)

// copied
show_magicians(copy_great_magicians)
