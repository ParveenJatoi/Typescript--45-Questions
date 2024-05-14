// Q=13

// in an array store some examples of mode of transportation use this list to print series of statement
// about these items such as "i would like to own a car"

let transportationMode:string[]=["car","bike","bus","aeroplane"];

// for loop
    

    
for (let i = 0; i < transportationMode.length;i++) {
    console.log(`i would to own a ${transportationMode[i]}`);
    
    
}

// for each loop
transportationMode.forEach(mode => {
    console.log(`i would like to own a ${mode}`);
    
    
});

