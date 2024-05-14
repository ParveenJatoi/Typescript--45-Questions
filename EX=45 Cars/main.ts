// Q-45
// Cars: make function that stores information about car in an object the function should always recieve
// a manufacturer and a model name


function create_car(manufacturer,model,...options){
    // initializa a car object

    let car ={

        manufacturer:manufacturer,
        model       :model

    }
    // Add aditional options to the car object

    options.forEach(option => {

        let [key,value]=option.split(":")
        car [key.trim()]=value.trim()

    })

    return car;
}

// call the function to create a car object

let my_car = create_car("Toyota","Corolla","color:black","sunroof:true","year:2020")

// print the variable to ensure all the information is stored

console.log(my_car);


































