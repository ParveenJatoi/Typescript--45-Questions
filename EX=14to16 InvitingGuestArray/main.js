// Guest List:
// if you could invite anyone to dinner,who wuold you like to invite? make a list that include 
// atleast 3 people you would like to invite to dinner,then use your list to print a message to
// each person,inviting them to dinner
var guestList = ["Parsa", "Annaya", "Aleena", "Fatima"];
guestList.forEach(function (oneGuest) { return console.log("salam ".concat(oneGuest, ",would you like to dinner with me?")); });
// Q 15
// Changing Guest List
// you have heared that one of your guest can't make the dinner,so you need to send out a new set
// of invitition,you will have to think of someone else to invite
//Start with your programme from ex 14, add a print statement at the end of your programme starting 
// the name of the guest you can't make it
// Modify your list replacing the nmae of guest who can't make it with the name of the new person
// you are inviting
// Print a second set of invitition,one of each person who is still in your list
guestList = ["Parsa", "Anaya", "Aleena", "Fatima"];
var dontCome = guestList[0];
console.log(dontCome + ' ' + "she cant come for diner");
guestList.splice(0, 1, "jaweria");
console.log(guestList);
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like to have dinner with me?")); });
// Q 16
// You just found a bigger dinner table,so now more space is available,think of three more guest 
// guest to invite to dinner,
// Start from exercise 15,add a print statement to the end of your programme informing people that
// that you found a bigger table
// Add a new guest to the begining of your array
// Add a new guest to the middle of your array
// use append() to add one new guest to end of the array
// Print a new set of invitation messages,one of each person in your list
guestList = ["Parsa", "Anaya", "Aleena", "Fatima"];
//making a variable for who will not come
dontCome = guestList[0];
//print the name who ill not come
console.log(dontCome, "nhn aa sakte hen");
//add and remove value from list
guestList.splice(0, 1, "ayesha");
//message print for bigger table
console.log("good news,e have a bigger table for dinner");
//adding a new array at starting index of array
guestList.unshift("Jaweria");
//adding a new guest at ending index of array
guestList.push("nini");
//making a variable and logic to find middle index
var midddleIndex = Math.floor(guestList.length / 2);
//adding a new guest in middle index of array
guestList.splice(midddleIndex, 0, "pari");
//print message for update list
console.log("update list of new guest");
//sending invitation messages to all our guest one by one
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to hve dinner with me?")); });
