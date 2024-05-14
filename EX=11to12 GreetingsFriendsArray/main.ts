// Q=11
// Store feww friends name in an array called names, print each persons name by accessing each element in list
// one at a time


// Array of names
let names: string[]=["parveen","parsa","anaya","fatima"]

// Three Methods

// loop
// for each
// for of loop


// loop

for (let i= 0; i < names.length; i++) {
    console.log(names[i]);
    
    
}

// for each
names.forEach(names => {
    console.log(names);
    
    
});

// for  of loop
for (const friendName of names) {
console.log(friendName);

 }



//  Q=12
// Greetings
// printing each persons name, prnt message to them, text of each message should be the same
// but each message should be personalized with persons name

// for loop method

for (let i= 0; i < names.length; i++) {
    console.log(`hello,${names[i]  }! how are you today?`) ;
    
   }

// for each method
names.forEach(names => {
    console.log(`dear,${names}!how are you today?`);
    
  })

//   for of loop
for (const friendName of names) {
    console.log(`hi,${friendName}! how are you today?`);
    
     }




