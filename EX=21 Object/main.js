//  Q19
// Dinner Guests:
// from ex 14 and 18 print the message indicating the number of guests invited
var guestList = ["Parsa", "Annaya", "Aleena", "Fatima"];
var guestLength = guestList.length;
console.log("we are inviting total ".concat(guestLength, " guests"));
// Q=20
// Think of something you ould like to store in an array for example mountains rivers cities countries or anything
// write a programme that creates objects containing these items
var countries = ["usa", "canada", "francec", "china", "japan"];
//  print list of countries
console.log("List of countries:", countries.forEach(function (country) {
    console.log(country);
}));
var itCourse = {
    courseName: "TypeScript ",
    location: "GovernorHouse",
    onSiteStudents: 50000
};
console.log(itCourse);
