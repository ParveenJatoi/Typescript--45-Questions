// Q-45
// Cars: make function that stores information about car in an object the function should always recieve
// a manufacturer and a model name
function create_car(manufacturer, model) {
    // initializa a car object
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add aditional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
var my_car = create_car("Toyota", "Corolla", "color:black", "sunroof:true", "year:2020");
// print the variable to ensure all the information is stored
console.log(my_car);
