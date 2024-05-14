// Q=2
// Name Cases: store a persons name in variable ,and then 
// that persons name in lowercase,uppercase and titile case.

//   UPPER CASE

let myName:string="parveen jatoi";
console.log(myName.toUpperCase());

//    lower case

let myHubby:string="ADNAN HAIDER";
console.log(myHubby.toLowerCase());

//   Title Case

let myCourse:string="certified ai generative cloud computing certified engineering";
console.log(myCourse.replace(/\b\w/g,(char)=> char.toUpperCase()));








